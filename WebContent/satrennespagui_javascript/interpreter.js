/*this an interpreter of the language Scheme in Javascript called JavaSc...heme!

scheme.eval("(+ 2 1)");

 */

var scheme = (function()
		{

	//Affiche les messages d'erreurs pendant le developpement
	function debugmessage(message)
	{
		//Attention, a mettre en commentaire apr�s le developpement
		console.log(message);
	}


	//Fonction permettant d'afficher, dans la console, les messages d'erreurs
	function debugerrormessage(message)
	{
		//Envoie le message dans la console
		console.log(message);
	}

	//Permet de v�rifier si la fonction est dans l'environnement
	function find(o, x)
	{
		if(o.hasOwnProperty(x))
			//Retourne l'environnement
			return o;
		else
		{
			//Retourne un message d'erreur si la fonction n'existe pas
			debugmessage("impossible to find " + x + " in the environment");
			return {};
		}
	}

	function  Env(args){
		var env={};outer=args.outer||{}
		for( var i in outer)
			env[i]=outer[i];
		if(args.formal.length===args.actual.length){
			for(var i = 0; i < args.formal.length; i++)
				env[args.formal[i]] = args.actual[i];
		}
		//	for( var i in outer)
		//	env[i]=outer[i];
		return env;
	}

	//Ajout des fonctions standard dans l'environnement
	/*add standard functions in the environment*/
	function add_global(env){

		//Initialisations des fonctions communes dans la classe Math
		var primitives=["sin","cos","tan","asin","acos","atan","exp","log","floor","min","max","sqrt","abs"];
		var env={};
		//Ajout des fonctions communes dans l'environnement
		for(var i=0;i<primitives.length;i++){
			env[primitives[i]]=Math[primitives[i]];
		}
		//Rajout des fonctions standards non pr�sente dans la classe Math
		env["#f"] = false;
		env["#t"] = true;
		env["+"] = function(x,y) {return x + y;}
		env["-"] = function (x, y) {return x - y;}
		env["*"] = function (x, y) {return x * y;}
		env["/"] = function (x, y) {return x / y;}
		env[">"] = function (x, y) {return x > y;}
		env["<"] = function (x, y) {return x < y;}
		env[">="] = function (x, y) {return x >= y;}
		env["<="] = function (x, y) {return x <= y;}
		env["="] = function (x, y) {return x ===y;}
		env["car"] = function (x) { return x[0]}
		env["caar"] = function (x) { return x[0][0]}
		env["cadr"] = function (x) { return x[1]}
		env["cdr"] = function (x) { return x.slice(1)}
		env['list'] = function () { return Array.prototype.slice.call(arguments); };
		env["eq?"] = function (x, y) {return x === y;}
		env["cons"] = function (x, y) {return [x].concat(y); }
		env["append"] = function (x, y) { return x.concat(y); }
		env["not"] = function (x) {return !x;}
		env["and"] = function(x,y) {return (x && y);}
		env["or"] = function(x,y) {return (x || y);}
		env["length"] = function (x) { return x.length; }
		env["list?"] = function (x) { return (x instanceof Array);}
		env["null?"] = function (x) { return (!x || x.length == 0); }
		env["symbol?"] = function (x) {  return (typeof(x) == "string"); }
		env["symbol-uppercase?"] = function (x) { if( !(typeof(x) == "string")) return false; else return (x == x.toUpperCase()); }
		//Renvoie l'environnement remplit des fonctions standards
		return env;
	}

	//Evaluation de la sous-expression x dans l'environnement env
	/*evaluation of the s-expression x in the environment env*/
	function evalte(x,env){
		env=env||global_env;
		//V�rifie si la sous-expression x est un String
		if (typeof x == "string")
			//retourne l'effet de la fonction x stock� dans l'environnement
			return find(env, x)[x];
		//V�rifie si la sous-expression x est un number
		else if (typeof x =='number')
			return x;
		//V�rifie si la sous-expression x est une citation
		else if (x[0] == 'quote')
			return x[1];
		//V�rifie si la sous-expression x est de type conditionnel
		else if (x[0] == 'if') {
			var test = x[1];
			var conseq = x[2];
			var alt = x[3];
			//Effectue le test de l'expression
			if (evalte(test, env))
				//Si la condition est v�rifi�e
				return evalte(conseq, env);
			else
				//Si la condition n'est pas v�rifi�e
				return evalte(alt, env);
		}
		//V�rifie si la sous-expresssion x est de type set
		else if (x[0] === 'set!'){
			find(env, x[1])[x[1]] = evalte(x[2], env);
			return "value of " + x[0] + " set"
		}
		//V�rirfie si sous-expression x est de type define
		else if (x[0] === 'define'){
			var variableDefined;
			if(x[1] instanceof Array) //constructions as "(define (f x y) ....)
			{
				variableDefined = x[1][0];
				var vars = x[1].slice(1);
				var exp = x[2];
				env[variableDefined] = function () {
					return evalte(exp, Env({formal: vars, actual: arguments,outer:env}));
				};
			}
			else  //constructions as "(define x ....)
			{
				variableDefined = x[1];
				env[x[1]] = evalte(x[2], env);
			}
			debugmessage(variableDefined + " defined");
			return variableDefined + " defined"
		}
		else if (x[0] === 'lambda') {
			var vars = x[1];
			var exp = x[2];
			return function () {
				return evalte(exp, Env({formal: vars, actual: arguments,outer:env}));
			};
		}
		else if (x[0] === 'let') {
			var extractvars = function(tab)
			{
				var V = new Array();
				for(var i in tab)
				{
					V.push(tab[i][0]);
				}

				return V;
			}
			var vars = extractvars(x[1]);

			var extractargs = function(tab)
			{
				var A = new Array();
				for(var i in tab)
				{
					A.push(evalte(tab[i][1], env));
				}

				return A;
			}

			var args = extractargs(x[1]);
			var exp = x[2];

			return evalte(exp, Env({formal: vars, actual: args,outer:env}));

		}
		else if (x[0] === 'begin') {
			var val;
			for (var i = 1; i < x.length; i++)
				val = evalte(x[i], env);
			return val;
		}
		else 
		{
			var exps = [];
			debugmessage("miaou: ");
			for (i = 0; i < x.length; i++)
			{
				exps[i] = evalte(x[i], env);
				debugmessage("arg" + i + " = " + exps[i]);
			}
			var proc = exps.shift();
			var result;
			if(proc === undefined)
			{
				debugerrormessage("function undefined in " + x + " of length " + x.length);
				result = 0;
			}
			else
			{
				result = proc.apply(null, exps);
			}
			debugmessage("result = " + result);
			return result;
		}




	}
	///////////////////////////////
	global_env=add_global(Env({formal:[],actual:[]}));


	/*parse the string s and returns the internal representation of s*/
	function parser(s){
		return read_from(tokenize(s));
	}

	//Analyseur lexical
	/*lexical analyzer*/
	function tokenize(s){
		return s.replace(/'/g, "' ")
		.replace(/;[^\n]*/g, "")
		.replace(/\(/g," ( ")
		.replace(/\)/g," ) ")
		.trim()
		.replace(/\s+/g," ")
		.split(" ");
	}

	//Analyseur syntaxique
	/*syntactic analyzer*/
	function read_from(tokens){
		if(tokens.length == 0)
			process.stdout.write("Unexpected EOF while reading");
		var token = tokens.shift();
		if("'" == token)
		{
			var L = [];
			L.push('quote');
			L.push(read_from(tokens));
			return L;
		}
		if("`" == token)
		{
			var L = [];
			L.push('quasiquote');
			L.push(read_from(tokens));
			return L;
		}
		if("," == token)
		{
			var L = [];
			L.push('unquote');
			L.push(read_from(tokens));
			return L;
		}
		if("(" == token){
			var L = [];
			while(tokens[0] != ")"){
				L.push(read_from(tokens));
			}
			tokens.shift();
			return L;
		}
		else if(")" == token)
			process.stdout.write("unexpected");
		else
			return atom(token);
	}
	function atom(token){
		if (!(isNaN(token)))
			return Number(token);

		else
			return token;

	}



	/*transform the internal representation of an s-express o in a string*/
	function prettyprint(o)
	{
		if(o instanceof Array)
		{
			return "(" + o.map(prettyprint).join(" ") + ")";
		}
		else
		{
			return o;
		}

	}





	/*return the scheme interpreter object*/
	return {


		/*read a string as "(+ 2 3)" and returns the internal representation of the evaluation of it*/
		"parse": function(string)
		{
			return parser(string);
		},


		/*read a string as "(+ 2 3)" and returns the internal representation of the evaluation of it*/
		"eval": function(string)
		{
			return evalte(parser(string));
		},

		/*read a string as "'(1 2)" and returns a string representing the evaluation of it, for instance "(1 2)"*/
		"evalprettyprint": function(string)
		{
			return prettyprint(evalte(parser(string)));
		},

		/*transform the internal representation of an s-express o in a string*/
		"prettyprint": function(o)
		{
			return prettyprint(o);
		},

		/*load a scheme file on the web and evaluate it (it puts all the definition in the global environment)*/
		"loadfile": function(url)
		{
			var result;
			$.ajax(
					{
						type: 'GET',
						async: false,
						url:  url,
						dataType: "text",
						success: function(data) {
							result = data;

							var t = tokenize(data);

							while(t.length > 0)
							{
								evalte(read_from(t));
							}
						}
					});
			return result;

		}
	};

		})();
