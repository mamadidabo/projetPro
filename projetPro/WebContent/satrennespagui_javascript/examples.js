
	
		//methode servant à insérer un exemple en dur 
		function insererEx(nomExemple)
	    {
			//on vide tous les inputs 
			viderNbInput(getNbInput());
			
	    	switch (nomExemple)
	    	{
		    	case 'CarreLatin':
		    		setNbInput(5);
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox1'].value= "(bigand i (1 2 3) (bigand j (1 2 3) (bigor n (1 2 3) (p i j n))))";
		    		updateLaTeX("(bigand i (1 2 3) (bigand j (1 2 3) (bigor n (1 2 3) (p i j n))))",'textBox1');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox2'].value= "(bigand i (1 2 3) (bigand j (1 2 3) (bigand n (1 2 3)  (bigand m (1 2 3)  (m diff n) ((p i j n) imply (not (p i j m)))))))";
		    		updateLaTeX("(bigand i (1 2 3) (bigand j (1 2 3) (bigand n (1 2 3)  (bigand m (1 2 3)  (m diff n) ((p i j n) imply (not (p i j m)))))))",'textBox2');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox3'].value= "(bigand i (1 2 3) (bigand n (1 2 3)  (bigor j (1 2 3) (p i j n))))";
		    		updateLaTeX("(bigand i (1 2 3) (bigand n (1 2 3)  (bigor j (1 2 3) (p i j n))))",'textBox3');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox4'].value= "(bigand j (1 2 3) (bigand n (1 2 3)  (bigor i (1 2 3) (p i j n))))";
		    		updateLaTeX("(bigand j (1 2 3) (bigand n (1 2 3)  (bigor i (1 2 3) (p i j n))))",'textBox4');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox5'].value= "((((((((p 1 1 2) and (p 1 2 1)) and ((p 1 3 3) and (p 2 1 1))) and (p 2 2 3)) and (p 2 3 1)) and (p 3 1 1)) and (p 3 2 2)) and (p 3 3 3))";
		    		updateLaTeX("((((((((p 1 1 2) and (p 1 2 1)) and ((p 1 3 3) and (p 2 1 1))) and (p 2 2 3)) and (p 2 3 1)) and (p 3 1 1)) and (p 3 2 2)) and (p 3 3 3))",'textBox5');    		
		    		
		    		afficheDescription("Carr&eacute Latin","Le but du jeu est de remplir un tableau de 3 lignes et 3 colonnes contenant des chiffres allant de 1 &agrave 3 en veillant toujours &agrave ce qu'un m&ecircme chiffre ne figure qu'une seule fois par colonne, une seule fois par ligne, et une seule fois par carr&eacute de neuf cases.");
		    		
		    	break;
		    	case 'Sudoku2':
		    		setNbInput(5);
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox1'].value= "(bigand i (1 2) (bigand j (1 2) (bigor n (1 2) (p i j n))))";
		    		updateLaTeX("(bigand i (1 2) (bigand j (1 2) (bigor n (1 2) (p i j n))))",'textBox1');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox2'].value= "(bigand i (1 2) (bigand j (1 2) (bigand n (1 2)  (bigand m (1 2)  (m diff n) ((p i j n) imply (not (p i j m)))))))";
		    		updateLaTeX("(bigand i (1 2) (bigand j (1 2) (bigand n (1 2)  (bigand m (1 2)  (m diff n) ((p i j n) imply (not (p i j m)))))))",'textBox2');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox3'].value= "(bigand i (1 2) (bigand n (1 2)  (bigor j (1 2) (p i j n))))";
		    		updateLaTeX("(bigand i (1 2) (bigand n (1 2)  (bigor j (1 2) (p i j n))))",'textBox3');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox4'].value= "(bigand j (1 2) (bigand n (1 2)  (bigor i (1 2) (p i j n))))";
		    		updateLaTeX("(bigand j (1 2) (bigand n (1 2)  (bigor i (1 2) (p i j n))))",'textBox4');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox5'].value= "((p 1 1 2) and (p 1 2 1))";
		    		updateLaTeX("((p 1 1 2) and (p 1 2 1))",'textBox5');   	
		    	
		    		afficheDescription("Sudoku 2X2","Le but du jeu est de remplir un tableau de 2 lignes X 2 colonnes contenant des chiffres allant de 1 &agrave 9 en veillant toujours &agrave ce qu'un m&ecircme chiffre ne figure qu'une seule fois par colonne et une seule fois par ligne.");
			    	
		    		
		    	break;
		    	case 'Sudoku4':
		    		setNbInput(10);
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox1'].value= "(bigand i (1 .. 4) (bigand j (1 .. 4) (bigor n (1 .. 4) (p i j n))))";
		    		updateLaTeX("(bigand i (1 .. 4) (bigand j (1 .. 4) (bigor n (1 .. 4) (p i j n))))",'textBox1');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox2'].value= "(bigand i (1 .. 4) (bigand j (1 .. 4) (bigand n (1 .. 4)  (bigand m (1 .. 4)  (m diff n) ((p i j n) imply (not (p i j m)))))))";
		    		updateLaTeX("(bigand i (1 .. 4) (bigand j (1 .. 4) (bigand n (1 .. 4)  (bigand m (1 .. 4)  (m diff n) ((p i j n) imply (not (p i j m)))))))",'textBox2');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox3'].value= "(bigand n (1 .. 4) (bigand i (1 .. 4) (bigor j (1 .. 4) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 4) (bigand i (1 .. 4) (bigor j (1 .. 4) (p i j n))))",'textBox3'); 
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox4'].value= "(bigand n (1 .. 4) (bigand i (1 .. 4) (bigor j (1 .. 4) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 4) (bigand i (1 .. 4) (bigor j (1 .. 4) (p i j n))))",'textBox4');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox5'].value= "(bigand n (1 .. 4) (bigand j (1 .. 4) (bigor i (1 .. 4) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 4) (bigand j (1 .. 4) (bigor i (1 .. 4) (p i j n))))",'textBox5');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox6'].value= "(bigand n (1 .. 4) (bigor i (1 2) (bigor j (1 2) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 4) (bigor i (1 2) (bigor j (1 2) (p i j n))))",'textBox6');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox7'].value= "(bigand n (1 .. 4) (bigor i (1 2) (bigor j (3 4) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 4) (bigor i (1 2) (bigor j (3 4) (p i j n))))",'textBox7');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox8'].value= "(bigand n (1 .. 4) (bigor i (3 4) (bigor j (1 2) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 4) (bigor i (3 4) (bigor j (1 2) (p i j n))))",'textBox8');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox9'].value= "(bigand n (1 .. 4) (bigor i (3 4) (bigor j (3 4) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 4) (bigor i (3 4) (bigor j (3 4) (p i j n))))",'textBox9');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox10'].value= "((p 1 1 2) and ((p 1 3 2) and (p 3 4 4)))";
		    		updateLaTeX("((p 1 1 2) and ((p 1 3 2) and (p 3 4 4)))",'textBox10');
		    		
		    		afficheDescription("Sudoku 4X4","Le but du jeu est de remplir 4 lignes X 4 colonnes cases contenant des chiffres allant de 1 &agrave 9 en veillant toujours &agrave ce qu'un m&ecircme chiffre ne figure qu'une seule fois par colonne et une seule fois par ligne.");
		    		
			    break;
		    	case 'Sudoku9':
		    		setNbInput(16);			
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox1'].value="(bigand i (1 .. 9) (bigand j (1 .. 9) (bigor n (1 .. 9) (p i j n))))";
		    		updateLaTeX("(bigand i (1 .. 9) (bigand j (1 .. 9) (bigor n (1 .. 9) (p i j n))))",'textBox1');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox2'].value="(bigand i (1 .. 9) (bigand j (1 .. 9) (bigand n (1 .. 9)  (bigand m (1 .. 9)  (m diff n) ((p i j n) imply (not (p i j m)))))))";
		    		updateLaTeX("(bigand i (1 .. 9) (bigand j (1 .. 9) (bigand n (1 .. 9)  (bigand m (1 .. 9)  (m diff n) ((p i j n) imply (not (p i j m)))))))",'textBox2');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox3'].value="(bigand n (1 .. 9) (bigand i (1 .. 9) (bigor j (1 .. 9) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 9) (bigand i (1 .. 9) (bigor j (1 .. 9) (p i j n))))",'textBox3');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox4'].value="(bigand n (1 .. 9) (bigand j (1 .. 9) (bigor i (1 .. 9) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 9) (bigand j (1 .. 9) (bigor i (1 .. 9) (p i j n))))",'textBox4');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox5'].value="(bigand n (1 .. 9) (bigor i (1 .. 3) (bigor j (1 .. 3) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 9) (bigor i (1 .. 3) (bigor j (1 .. 3) (p i j n))))",'textBox5');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox6'].value="(bigand n (1 .. 9) (bigor i (4 .. 6) (bigor j (1 .. 3) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 9) (bigor i (4 .. 6) (bigor j (1 .. 3) (p i j n))))",'textBox6');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox7'].value="(bigand n (1 .. 9) (bigor i (7 .. 9) (bigor j (1 .. 3) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 9) (bigor i (7 .. 9) (bigor j (1 .. 3) (p i j n))))",'textBox7');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox8'].value="(bigand n (1 .. 9) (bigor i (1 .. 3) (bigor j (4 .. 6) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 9) (bigor i (1 .. 3) (bigor j (4 .. 6) (p i j n))))",'textBox8');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox9'].value="(bigand n (1 .. 9) (bigor i (4 .. 6) (bigor j (4 .. 6) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 9) (bigor i (4 .. 6) (bigor j (4 .. 6) (p i j n))))",'textBox9');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox10'].value="(bigand n (1 .. 9) (bigor i (7 .. 9) (bigor j (4 .. 6) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 9) (bigor i (7 .. 9) (bigor j (4 .. 6) (p i j n))))",'textBox10');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox11'].value="(bigand n (1 .. 9) (bigor i (1 .. 3) (bigor j (7 .. 9) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 9) (bigor i (1 .. 3) (bigor j (7 .. 9) (p i j n))))",'textBox11');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox12'].value="(bigand n (1 .. 9) (bigor i (4 .. 6) (bigor j (7 .. 9) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 9) (bigor i (4 .. 6) (bigor j (7 .. 9) (p i j n))))",'textBox12');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox13'].value="(bigand n (1 .. 9) (bigor i (7 .. 9) (bigor j (7 .. 9) (p i j n))))";
		    		updateLaTeX("(bigand n (1 .. 9) (bigor i (7 .. 9) (bigor j (7 .. 9) (p i j n))))",'textBox13');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox14'].value="((p 1 2 3) and (p 1 6 1) and (p 2 3 6) and (p 2 8 5) and (p 3 1 5) and (p 3 7 9) and (p 3 8 8))";
		    		updateLaTeX("((p 1 2 3) and (p 1 6 1) and (p 2 3 6) and (p 2 8 5) and (p 3 1 5) and (p 3 7 9) and (p 3 8 8))",'textBox14');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox15'].value="((p 4 2 8) and (p 4 6 6) and (p 4 7 3) and (p 4 9 2) and (p 5 5 5) and (p 6 1 9) and (p 6 3 3) and (p 6 4 8) and (p 6 8 6))";
		    		updateLaTeX("((p 4 2 8) and (p 4 6 6) and (p 4 7 3) and (p 4 9 2) and (p 5 5 5) and (p 6 1 9) and (p 6 3 3) and (p 6 4 8) and (p 6 8 6))",'textBox15');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox16'].value="((p 7 1 7) and (p 7 2 1) and (p 7 3 4) and (p 7 9 9) and (p 8 2 2) and (p 8 7 8) and (p 9 4 4) and (p 9 8 3))";
		    		updateLaTeX("((p 7 1 7) and (p 7 2 1) and (p 7 3 4) and (p 7 9 9) and (p 8 2 2) and (p 8 7 8) and (p 9 4 4) and (p 9 8 3))",'textBox16');
		    	
		    		afficheDescription("Sudoku 9X9","Le but du jeu est de remplir 81 cases contenant des chiffres allant de 1 &agrave 9 en veillant toujours &agrave ce qu'un m&ecircme chiffre ne figure qu'une seule fois par colonne, une seule fois par ligne, et une seule fois par carr&ecute de neuf cases.");
		    			
		    	break;
			    
		    	case 'MoutonChouLoup':
		    		setNbInput(10);
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox1'].value="(bigand t (0 .. 7) (((loup droite t) and (mouton droite t)) imply (barque droite t)))";
		    		updateLaTeX("(bigand t (0 .. 7) (((loup droite t) and (mouton droite t)) imply (barque droite t)))",'textBox1');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox2'].value="(bigand t (0 .. 7) (((mouton droite t) and (chou droite t)) imply (barque droite t)))";
		    		updateLaTeX("(bigand t (0 .. 7) (((mouton droite t) and (chou droite t)) imply (barque droite t)))",'textBox2');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox3'].value="(bigand t (0 .. 7) (((not (loup droite t)) and (not (mouton droite t))) imply (not (barque droite t))))";
		    		updateLaTeX("(bigand t (0 .. 7) (((not (loup droite t)) and (not (mouton droite t))) imply (not (barque droite t))))",'textBox3');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox4'].value="(bigand t (0 .. 7) (((not (mouton droite t)) and (not (chou droite t))) imply (not (barque droite t))))";
		    		updateLaTeX("(bigand t (0 .. 7) (((not (mouton droite t)) and (not (chou droite t))) imply (not (barque droite t))))",'textBox4');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox5'].value="(bigand o (barque chou loup mouton) (not (o droite 0)))";
		    		updateLaTeX("(bigand o (barque chou loup mouton) (not (o droite 0)))",'textBox5');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox6'].value="(bigand o (barque chou loup mouton) (o droite 7))";
		    		updateLaTeX("(bigand o (barque chou loup mouton) (o droite 7))",'textBox6');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox7'].value="(bigand t (0 .. 6) (bigand o (chou loup mouton) ((barque droite t) imply ((not (o droite t)) imply (not (o droite (t + 1)))))))";
		    		updateLaTeX("(bigand t (0 .. 6) (bigand o (chou loup mouton) ((barque droite t) imply ((not (o droite t)) imply (not (o droite (t + 1)))))))",'textBox7');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox8'].value="(bigand t (0 .. 6) (bigand o (chou loup mouton) ((not (barque droite t)) imply ((o droite t) imply (o droite (t + 1))))))";
		    		updateLaTeX("(bigand t (0 .. 6) (bigand o (chou loup mouton) ((not (barque droite t)) imply ((o droite t) imply (o droite (t + 1))))))",'textBox8');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox9'].value="(bigand t (0 .. 6) (bigand o (chou loup mouton) (bigand o2 (chou loup mouton) (o diff o2) ((not ((o droite t) equiv (o droite (t + 1)))) imply ((o2 droite t) equiv (o2 droite (t + 1)))))))";
		    		updateLaTeX("(bigand t (0 .. 6) (bigand o (chou loup mouton) (bigand o2 (chou loup mouton) (o diff o2) ((not ((o droite t) equiv (o droite (t + 1)))) imply ((o2 droite t) equiv (o2 droite (t + 1)))))))",'textBox9');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox10'].value="(bigand t (0 .. 6) ((barque droite t) equiv (not (barque droite (t + 1)))))";
		    		updateLaTeX("(bigand t (0 .. 6) ((barque droite t) equiv (not (barque droite (t + 1)))))",'textBox10');
		    	
		    		afficheDescription("Mouton Chou Loup","Une barque doit faire passer le chou, le mouton et le loup de l'autre c&ocirct&eacute de la rivi&egravere. Mais il n'a qu'une place sur la barque ! De plus, si le mouton et le chou sont ensemble sur une rive quand la barque s'&eacuteloigne, le mouton mange le chou. Et si le loup et le mouton sont ensemble quand Lulu s'&eacuteloigne, le loup mange le mouton !");
		    		
		    	break;
		    	
		    	case 'Carte':
		    		setNbInput(13);
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox1'].value="(bigand p (France Italie Suisse Allemagne Luxembourg Belgique Autriche) (bigor c (Rouge Bleu Vert Jaune) (p c)))";
		    		updateLaTeX("(bigand p (France Italie Suisse Allemagne Luxembourg Belgique Autriche) (bigor c (Rouge Bleu Vert Jaune) (p c)))",'textBox1');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox2'].value="(bigand p (France Italie Suisse Allemagne Luxembourg Belgique Autriche) (bigand c (Rouge Bleu Vert Jaune) (bigand d (Rouge Bleu Vert Jaune) (d diff c) ((p c) imply (not (p d))))))";
		    		updateLaTeX("(bigand p (France Italie Suisse Allemagne Luxembourg Belgique Autriche) (bigand c (Rouge Bleu Vert Jaune) (bigand d (Rouge Bleu Vert Jaune) (d diff c) ((p c) imply (not (p d))))))",'textBox2');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox3'].value="(bigand c (Rouge Bleu Vert Jaune) ((not (France c)) or (not (Allemagne c))))";
		    		updateLaTeX("(bigand c (Rouge Bleu Vert Jaune) ((not (France c)) or (not (Allemagne c))))",'textBox3');
		    		setFormula(4, "(bigand c (Rouge Bleu Vert Jaune) ((not (Suisse c)) or (not (Allemagne c))))");
		    		updateLaTeX("(bigand c (1 2 3 4) ((not (Suisse c)) or (not (Allemagne c))))",'textBox4');
		    		setFormula(5, "(bigand c (Rouge Bleu Vert Jaune) ((not (France c)) or (not (Suisse c))))");
		    		setFormula(6, "(bigand c (Rouge Bleu Vert Jaune) ((not (Luxembourg c)) or (not (Allemagne c))))");
		    		setFormula(7, "(bigand c (Rouge Bleu Vert Jaune) ((not (France c)) or (not (Luxembourg c))))");
		    		setFormula(8, "(bigand c (Rouge Bleu Vert Jaune) ((not (France c)) or (not (Italie c))))");
		    		setFormula(9, "(bigand c (Rouge Bleu Vert Jaune) ((not (Suisse c)) or (not (Italie c))))");
		    		setFormula(10, "(bigand c (Rouge Bleu Vert Jaune) ((not (Italie c)) or (not (Autriche c))))");
		    		setFormula(11, "(bigand c (Rouge Bleu Vert Jaune) ((not (Luxembourg c)) or (not (Belgique c))))");
		    		setFormula(12, "(bigand c (Rouge Bleu Vert Jaune) ((not (Belgique c)) or (not (France c))))");
		    		setFormula(13, "(bigand c (Rouge Bleu Vert Jaune) ((not (Belgique c)) or (not (Allemagne c))))");
				
		    		afficheDescription("Carte","");
		    		
		    	break;
		    	case 'EmploiDuTemps':
		    		setNbInput(7);
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox1'].value= "(bigand m (musique poterie dessin theatre cinema philo lettres) (bigor j (lundi mardi jeudi vendredi) (bigor c (matin aprem) (m j c))))";
		    		updateLaTeX("(bigand m (musique poterie dessin theatre cinema philo lettres) (bigor j (lundi mardi jeudi vendredi) (bigor c (matin aprem) (m j c))))",'textBox1');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox2'].value= "(bigand m (musique poterie dessin theatre cinema  philo lettres) (bigand j (lundi mardi jeudi vendredi) (bigand c (matin aprem)  (bigand m2 (musique poterie dessin theatre cinema philo lettres) (m diff m2) ((m j c) imply (not (m2 j c)))))))";
		    		updateLaTeX("(bigand m (musique poterie dessin theatre cinema  philo lettres) (bigand j (lundi mardi jeudi vendredi) (bigand c (matin aprem)  (bigand m2 (musique poterie dessin theatre cinema philo lettres) (m diff m2) ((m j c) imply (not (m2 j c)))))))",'textBox2');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox3'].value= "(musique vendredi aprem)";
		    		updateLaTeX("(musique vendredi aprem)",'textBox3');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox4'].value= "(bigor j (lundi mardi jeudi vendredi) (theatre j matin))";
		    		updateLaTeX("(bigor j (lundi mardi jeudi vendredi) (theatre j matin))",'textBox4');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox5'].value= "(bigand j (lundi mardi jeudi vendredi) ((lettres j matin) imply (cinema j aprem)))";
		    		updateLaTeX("(bigand j (lundi mardi jeudi vendredi) ((lettres j matin) imply (cinema j aprem)))",'textBox5'); 
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox6'].value= "(bigand j (lundi mardi jeudi vendredi) ((lettres j aprem) imply (cinema j matin)))";
		    		updateLaTeX("(bigand j (lundi mardi jeudi vendredi) ((lettres j aprem) imply (cinema j matin)))",'textBox6');    
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox7'].value= "(bigor c (matin aprem) (philo lundi c))";
		    		updateLaTeX("(bigor c (matin aprem) (philo lundi c))",'textBox7');
		    	
		    		afficheDescription("Emploi Du Temps","");
		    		
		    	break;
		    	case 'Somme':
		    		setNbInput(5);
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox1'].value= "(bigand i (0 1 2 3) ((s i) equiv  ( ((r i) and (a i) and (b i)) or  ((r i) and (not (a i)) and (not (b i)) ) or ( (a i) and (not (r i)) and (not (b i)) ) or ( (b i) and (not (r i)) and (not (a i))))))";
		    		updateLaTeX("(bigand i (0 1 2 3) ((s i) equiv  ( ((r i) and (a i) and (b i)) or  ((r i) and (not (a i)) and (not (b i)) ) or ( (a i) and (not (r i)) and (not (b i)) ) or ( (b i) and (not (r i)) and (not (a i))))))",'textBox1');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox2'].value= "(bigand i (0 1 2 3) ((r (i + 1)) equiv (((r i) and (a i)) or ((b i) and (a i)) or ((r i) and (b i)))))";
		    		updateLaTeX("(bigand i (0 1 2 3) ((r (i + 1)) equiv (((r i) and (a i)) or ((b i) and (a i)) or ((r i) and (b i)))))",'textBox2');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox3'].value= "(not (r 0))";
		    		updateLaTeX("(not (r 0))",'textBox3');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox4'].value= "((s 2) and (s 3))";
		    		updateLaTeX("((s 2) and (s 3))",'textBox4');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox5'].value= "((not (b 2)) and (not (b 1)) and (not (a 2)))";
		    		updateLaTeX("((not (b 2)) and (not (b 1)) and (not (a 2)))",'textBox5'); 
		    		
		    		afficheDescription("Somme","");
		    		
		    	break;
		    	case '8Dames':
		    		setNbInput(6);
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox1'].value= "(bigand i (1 .. 8) (bigor j (1 .. 8) (p i j)))";
		    		updateLaTeX("(bigand i (1 .. 8) (bigor j (1 .. 8) (p i j)))",'textBox1');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox2'].value= "(bigand i (1 .. 8) (bigor j (1 .. 8) (p j i)))";
		    		updateLaTeX("(bigand i (1 .. 8) (bigor j (1 .. 8) (p j i)))",'textBox2');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox3'].value= "(bigand i (1 .. 8) (bigand j (1 .. 8) ((p i j) imply (bigand k (1 .. 8) (k diff i) (not (p k j))))))";
		    		updateLaTeX("(bigand i (1 .. 8) (bigand j (1 .. 8) ((p i j) imply (bigand k (1 .. 8) (k diff i) (not (p k j))))))",'textBox3');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox4'].value= "(bigand i (1 .. 8) (bigand j (1 .. 8) ((p i j) imply (bigand k (1 .. 8) (k diff j) (not (p i k))))))";
		    		updateLaTeX("(bigand i (1 .. 8) (bigand j (1 .. 8) ((p i j) imply (bigand k (1 .. 8) (k diff j) (not (p i k))))))",'textBox4');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox5'].value= "(bigand i (1 .. 8) (bigand j (1 .. 8) ((p i j) imply (bigand k (1 .. 8) ((not (p (i+k) (j+k))) and (not (p (i-k) (j-k))))))))";
		    		updateLaTeX("(bigand i (1 .. 8) (bigand j (1 .. 8) ((p i j) imply (bigand k (1 .. 8) ((not (p (i+k) (j+k))) and (not (p (i-k) (j-k))))))))",'textBox5'); 
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox6'].value= "(bigand i (1 .. 8) (bigand j (1 .. 8) ((p i j) imply (bigand k (1 .. 8) ((not (p (i+k) (j-k))) and (not (p (i-k) (j+k))))))))";
		    		updateLaTeX("(bigand i (1 .. 8) (bigand j (1 .. 8) ((p i j) imply (bigand k (1 .. 8) ((not (p (i+k) (j-k))) and (not (p (i-k) (j+k))))))))",'textBox6');    
		    	
		    		afficheDescription("Les 8 Dames","");
		    		
		    	break;
		    	case '6Boules':
		    		setNbInput(6);
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox1'].value= "(bigand i (1 .. 6) (bigor c (Rouge Vert Bleu) (b i c)))";
		    		updateLaTeX("(bigand i (1 .. 6) (bigor c (Rouge Vert Bleu) (b i c)))",'textBox1');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox2'].value= "(bigand i (1 .. 6) (bigand c (Rouge Vert Bleu) ((b i c) imply (bigand d (Rouge Vert Bleu) (c diff d) (not (b i d))))))";
		    		updateLaTeX("(bigand i (1 .. 6) (bigand c (Rouge Vert Bleu) ((b i c) imply (bigand d (Rouge Vert Bleu) (c diff d) (not (b i d))))))",'textBox2');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox3'].value= "(bigor i (2 .. 5) ((b (i - 1) Vert) and (b (i+1) Vert)))";
		    		updateLaTeX("(bigor i (2 .. 5) ((b (i - 1) Vert) and (b (i+1) Vert)))",'textBox3');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox4'].value= "(bigor i (2 .. 4) ((b (i - 1) Rouge) and (b (i+2) Rouge)))";
		    		updateLaTeX("(bigor i (2 .. 4) ((b (i - 1) Rouge) and (b (i+2) Rouge)))",'textBox4');
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox5'].value= "(bigor i (2 3) ((b (i - 1) Bleu) and (b (i+3) Bleu)))";
		    		updateLaTeX("(bigor i (2 3) ((b (i - 1) Bleu) and (b (i+3) Bleu)))",'textBox5'); 
		    		document.getElementById("formulaire_satisfiabilite").elements['textBox6'].value= "(b 6 Bleu)";
		    		updateLaTeX("(b 6 Bleu)",'textBox6');   
		    		
		    		afficheDescription("Les 6 Boules","");
		    		
		    	break;
	    	}
	    }