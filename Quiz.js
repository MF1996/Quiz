function hide() {  /* fonction pour cahcer autre quiz a fin de pas faire 6 page */
                           	   	document.getElementById('Q2').style.display ="none";
                                document.getElementById('Q3').style.display ="none";
                                document.getElementById('Q4').style.display ="none";
                                document.getElementById('Q5').style.display ="none";
                                document.getElementById('Q6').style.display ="none";
                                document.getElementById('Q7').style.display ="none";
                              
                           	   }       

                           	  var sortie  = 0; // conteur pour afficher image correct et nombre reponse correct aussi
                              var tour_a  = 0; // conteur utiliser pour afficher image erreur selon quiz 
                              var tour_b  = 0; // conteur utiliser pour afficher 2 image erreur indentique a quiz 	   
                               var erreu = 0; // conteur pour conter le nombre erreur pour afficeher a la fin
          	      
                  function valide1() {  


                  // valide contien les bonnes reponses


          	         switch(sortie){
                          case 0: document.getElementById('rep1').style.opacity ="1"; // afficher image correct meme pour 2 ... 6 case
                                  document.getElementById('mark').style.opacity ="1";  // affichage button Question suivant meme pour 2 .. 6 case
                                                        
                                                                                     break;

                          case 1:
                                  document.getElementById('rep11').style.opacity ="1";
                                  document.getElementById('mark2').style.opacity ="1";   
                                                                                      break;

                          case 2: document.getElementById('rep111').style.opacity ="1";
                                  document.getElementById('mark3').style.opacity ="1";   
                                                                                       break;
                          
                          case 3: document.getElementById('rep1111').style.opacity ="1";
                                  document.getElementById('mark4').style.opacity ="1"; 
                                                                                       break;
                          
                          case 4 : document.getElementById('rep11111').style.opacity ="1";
                                   document.getElementById('mark5').style.opacity ="1"; 
                                                                                       break;
                          
                          case 5 : document.getElementById('rep111111').style.opacity ="1";
                                   document.getElementById('mark6').style.opacity ="1";
                                                                                       break;
                          
                          case 6 : document.getElementById('rep1111111').style.opacity ="1";
                                   document.getElementById('mark7').style.opacity ="1";
                                                                                        break;


                          }

                          
                          	

                         sortie++;
          	         
                          	}
          	        

          	        function valide2()
          	         {
          	         	   
                         // valide 2 contien les mauvais reponses et aussi valide3

                        switch(tour_a){
                              //affichage image erreur selon quiz 1 ou 2.....7
                          case 0:  document.getElementById('rep2').style.opacity ="1";  break;
                          case 1:  document.getElementById('rep21').style.opacity ="1";  break;
                          case 2:  document.getElementById('rep211').style.opacity ="1"; 	break;
                          case 3:  document.getElementById('rep2111').style.opacity ="1";	break;
                          case 4:  document.getElementById('rep21111').style.opacity ="1";	break;
                          case 5:  document.getElementById('rep211111').style.opacity ="1"; 	break;
                          case 6:  document.getElementById('rep2111111').style.opacity ="1";  break;
                          
                          
                          }

                        
          	          tour_a++;  // conteur pour utiliser afficher image erreur
          	         	erreu++;  // conteur erreur 

          	          	}
          	        

          	        function valide3()
          	         	{
                        
                        switch(tour_b){

                          case 0:  document.getElementById('rep3').style.opacity ="1";  break;
                          case 1:  document.getElementById('rep31').style.opacity ="1";  break;
                          case 2:  document.getElementById('rep311').style.opacity ="1"; 	break;
                          case 3:  document.getElementById('rep3111').style.opacity ="1";	break;
                          case 4:  document.getElementById('rep31111').style.opacity ="1";	break;
                          case 5:  document.getElementById('rep311111').style.opacity ="1"; 	break;
                          case 6:  document.getElementById('rep3111111').style.opacity ="1";  break;


                          }

                         
                          tour_b++;
                          erreu++;
          	         

                        } 
          	         
                     // button quiz 1 pour aller au 2 quiz meme pour tout les fonction next
          	      function next1() {
          	        document.getElementById('Q1').style.display ="none";
          	        document.getElementById('Q2').style.display="inline";
                    Inc();                    
          	      }

                   
                function next2() {
          	       document.getElementById('Q2').style.display ="none";
          	        document.getElementById('Q3').style.display="inline";
                    Inc(); 

          	      }

				  function next3() {
                    document.getElementById('Q3').style.display ="none";
          	        document.getElementById('Q4').style.display="inline";
                   Inc();

          	      }

  				function next4() {
          	        document.getElementById('Q4').style.display ="none";
          	        document.getElementById('Q5').style.display="inline";
                   Inc();

          	      }

  				function next5() {
          	        document.getElementById('Q5').style.display ="none";
          	        document.getElementById('Q6').style.display="inline";
                   Inc();

          	      }

  				function next6() {
          	        document.getElementById('Q6').style.display ="none";
          	        document.getElementById('Q7').style.display="inline";
                   Inc();

          	      }

          	      function next7() {
          	      	
                                   document.getElementById('hide').style.display ="none";
                                   document.getElementById('image7').style.display ="none";
                                   document.getElementById('mark7').style.display ="none";
                                  
                                     if ((sortie-1)==tour_a && (sortie-1)==tour_b) {

                                         tour_b = 0;
                                         tour_a = 0;

                                     }                  

                                    document.getElementById('h3').style.display ="none"; 
                                   document.getElementById('correct').innerHTML =""+sortie; // score bonne reponse 
                                   document.getElementById('incorrect').innerHTML =""+(erreu/2)+"";// score mauvaise reponse
                                   
                                   document.getElementById('rep1111111').style.opacity ="1";
                                   document.getElementById('rep2111111').style.opacity ="1";
                                                                                


          	      }

          	      function Inc() {
          	           if (sortie!=tour_b) {
                         
          	           	tour_b++;
          	           }else{
          	           	erreu=erreu+1;
          	           }

          	           if (sortie!=tour_a) {
          	           	tour_a++;
          	           }else{
          	           	erreu=erreu+1;
          	           }


          	      	}
