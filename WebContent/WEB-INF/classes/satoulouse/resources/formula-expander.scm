;Ce fichier contient les fonctions nécessaires pour remplacer chaque macro d'une formule par l'équivalent en formule booléenne.
;Par exemple (bigand i (1 2 3) (p i)) -------------> (((p 1) and (p 2)) and (p 3))
;la formule principale de ce fichier est formula-expand

;(condition-tester c) retourne vrai (#t) ou faux (#f) selon que la condition c est évaluée à vrai ou faux
;(condition-tester '(diff 1 2)) retourne #f
;(condition-tester '(diff 1 1)) retourne #t
(define (condition-tester c)
  (match c
    ((a 'diff b)
         (diff a b))
    (a #f)))

;vérifie que la liste e est un singleton c'est à dire de la forme (element)
;(singleton? '(1 2)) retourne #f
;(singleton? '(2)) retourne #t
;(singleton? '()) retourne #f
(define (singleton? e)
  (if (null? e)
      #f
      (null? (cdr e))))

	  
;cette fonction permet de construire une liste (a a+1 a+2..... b) à partir de a et b
;l est un accumulateur
(define (suiterec a b l)
  (if (> a b)
      l
      (suiterec a (- b 1) (cons b l))))

;(suite a b) construit (a a+1 a+2 ... b) à partir d'entiers a et b
;(suite 0 9)
          ;(suite 3 2)
(define (suite a b)
  (suiterec a b ()))

;(calculer '(bigand i (1 .. 9) (p i))) retourne '(bigand i (1 2 3 4 5 6 7 8 9) (p i))
;(calculer '(bigand i (1 .. 9) (p (1 + 2)))) retourne '(bigand i (1 2 3 4 5 6 7 8 9) (p 3))
;(calculer '(1 .. 3))
;(calculer '(1 .. (3 + 2)))
;(calculer '((1 + 2) .. (3 + 2)))
;(calculer '((1 + 6) .. (3 + 2)))
;(calculer '((i + 6) .. (3 + 2))) ;error normalement
;(calculer '(bigor j (2 (2 + 1)) (p 2 j)))
;(calculer '(bigor j (2 .. (2 + 1)) (p 2 j)))
;(calculer '(bigor j (2 .. (2 + 3)) (p 2 j)))
;(calculer '(bigor j (2 .. (i + 3)) (p 2 j)))

(define (calculer phi)
  (match phi
    ((a '.. b) 
     (let ((acalcule  (calculer a))     ; Permet de calculer le nombre de l'intervalle de départ si n'est
                                        ; pas un nombre déjà. Ex: [(i+1) .. (i+4)], calcule i+1 puis appelle
           (bcalcule  (calculer b)))    ; fonction suite.
       (if (and (number? acalcule) (number? bcalcule))
           (suite acalcule bcalcule)
           `(,acalcule .. ,bcalcule))))
	((i '+ j)
		(if (and (number? (calculer i)) (number? (calculer j)))         ;Changé i <- calculer i, etc..
			(+ (calculer i) (calculer j))
			(map calculer phi)))
	((i '- j)
		(if (and (number? (calculer i)) (number? (calculer j)))
			(- (calculer i) (calculer j))
			(map calculer phi)))
	((i '* j)
		(if (and (number? (calculer i)) (number? (calculer j)))
			(* (calculer i) (calculer j))
			(map calculer phi)))
	((i '/ j)
		(if (and (number? (calculer i)) (number? (calculer j)))
			(/ (calculer i) (calculer j))
			(map calculer phi)))
    (a
     (if (list? a) (map calculer phi)
         a))))

;retourne vrai ssi l est un "début" de disjonction ie. que l commence par "(A or .....)"
(define (formula-or-multi? l)
  (match l
    ((a 'or . L) #t)
    (b #f)
    ))

;retourne vrai ssi l est un "début" de conjunction ie. que l commence par "(A and .....)"
(define (formula-and-multi? l)
  (match l
    ((a 'and . L) #t)
    (b #f)
    ))

;(andByTwo l) retourne la conjonction l où l'opérateur 'and ne prend que 2 arguments
;la fonction retourne une erreur si l n'est pas une conjonction, c'est à dire du type (A and B and C and ..... and Z)
;(andByTwo '(a and b and c)) retourne '((a and b) and c)
;(andByTwo '((r i) and (not (a i)) and (not (b i)) ))
(define (andByTwo l)
  (if (null? (cdr l))
      (car l)
      (if (not (equal? (cadr l) 'and))
          (error `("il faut un and dans " ,l))
          `(,(car l) and ,(andByTwo (cddr l))))))

;comme andByTwo mais pour les disjonctions
;(orByTwo '(a and b and c))
(define (orByTwo L)
  (if (null? (cdr L))
      (car L)
      (if (not (equal? (cadr L) 'or))
          (error "il faut un or")
          `(,(car L) or ,(orByTwo (cddr L))))))

(define (make-bigxor-rec i s bigset psi)
	(if (singleton? s)
		`( ,(remplacer i (car s) psi) and (bigand ,i ,bigset (,i diff ,(car s)) (not ,psi)))
		`(( ,(remplacer i (car s) psi) and (bigand ,i ,bigset (,i diff ,(car s)) (not ,psi))) or ,(make-bigxor-rec i (cdr s) bigset psi))))

		
;(make-bigxor i s psi) retourne une formule propositionnelle dont la sémantique est "il existe une et une seule valeur de i pour laquelle psi est vraie"
;(make-bigxor 'i '(1 2 3) '(p i))
(define (make-bigxor i s psi)
	(if (null? s)
		'bottom
		(if (singleton? s)
			(remplacer i (car s) psi)
			(make-bigxor-rec i s s psi))))

;(formula-expand phi) remplace chaque macro par la formule propositionnelle complète
;(formula-expand phi ... à optimiser
;(formula-expand '(bigand i (1 2 3) (p i))) retourne (((p 1) and (p 2)) and (p 3))
;(formula-expand '(bigxor i (1 2 3) (p i)))
;(formula-expand '(p xor q))
;(formula-expand '(bigand i (1 2) (bigor j (i (i+1)) (p i j))))
;(formula-expand '(bigand i (1 2) (bigor j (i .. (i + 1)) (p i j))))
;(formula-expand '(bigand i (1 2) (bigor j ((i + 2) .. (i + 1)) (p i j))))
;(formula-expand '(bigand i (1 2) (bigor j ((i + 2) .. (i + 5)) (p i j))))
;(formula-expand '(bigand i (2 .. 1) (p i)))
;(formula-expand '(bigand i (2 .. 1) (p i)))
;(formula-expand '(bigor i (2 .. 1) (p i)))
(define (formula-expand phi)
  (match (calculer phi)
    (('bigand i s condition psi)
     (if (null? s)
         'top
         (if (condition-tester (remplacer i (car s) condition))
             (if (singleton? s)
                 (formula-expand (remplacer i (car s) psi))
                 `(,(formula-expand (remplacer i (car s) psi)) and ,(formula-expand `(bigand ,i ,(cdr s) ,condition ,psi))))
             (formula-expand `(bigand, i, (cdr s), condition, psi)))))
    (('bigor i s condition psi)
     (if (null? s)
         'bottom
         (if (condition-tester (remplacer i (car s) condition))
            (if (singleton? s)
             (formula-expand (remplacer i (car s) psi))
             `(,(formula-expand (remplacer i (car s) psi)) or ,(formula-expand `(bigor ,i ,(cdr s) ,condition ,psi))))
             (formula-expand `(bigor ,i ,(cdr s)  ,condition ,psi)))))
    (('bigand i s psi)
     (if (null? s)
         'top
         (if (singleton? s)
           (formula-expand (remplacer i (car s) psi))  
         `(,(formula-expand (remplacer i (car s) psi)) and ,(formula-expand `(bigand ,i ,(cdr s) ,psi))))))
    (('bigor i s psi)
     (if (null? s)
         'bottom
         (if (singleton? s)
             (formula-expand (remplacer i (car s) psi))
         `(,(formula-expand (remplacer i (car s) psi)) or ,(formula-expand `(bigor ,i ,(cdr s) ,psi))))))
    (('bigxor i s psi)
	  (formula-expand (make-bigxor i s psi)))
    ((phi 'and psi)
     `(,(formula-expand phi) and ,(formula-expand psi)))
    
    ((phi 'or psi)
     `(,(formula-expand phi) or ,(formula-expand psi)))
    
    ((phi 'xor psi)
     (let ((sphi (formula-expand phi))
           (spsi (formula-expand psi)))
       `((,sphi and (not ,spsi)) or ((not ,sphi) and ,spsi))))
    
    ((phi 'imply psi)
     `((not ,(formula-expand phi)) or ,(formula-expand psi)))
    
    ((phi 'equiv psi)
     `(((not ,(formula-expand psi)) or ,(formula-expand phi)) and ((not ,(formula-expand phi)) or ,(formula-expand psi))) )

    (('not phi)
     `(not ,(formula-expand phi)))
  (a 
   (if (formula-and-multi? a)
       (formula-expand (andByTwo a))
       (if (formula-or-multi? a)
           (formula-expand (orByTwo a))
           a)))
  ))

 ;(remplacer a b L) est la liste L dans laquelle on a remplacé toutes les occurences de a par b
 ;(remplacer i 2 '(+ i j)) retourne '(+ 2 j)
;(remplacer 'i 2 '(bigor j (i (i+1)) (p i j)))
;(remplacer 'i 2 'i)
;(remplacer 'i 2 '(i+1)) ;attention, i+1 est considere comme un identifiant
;(remplacer 'i 2 '(i + 1))
;(remplacer 'i 2 '(bigor j (i (i + 1)) (p i j)))
(define (remplacer a b L)
  (if (list? L)
     (let ((f (lambda (e) (remplacer a b e))))
	      (map f L))
      (if (equal? L a)
          b
          L)))

;(diff a b) retourne #t ssi a et b sont différents
(define (diff a b)
  (not (equal? a b)))
