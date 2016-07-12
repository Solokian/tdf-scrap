  var Nightmare = require('nightmare');

    new Nightmare({ weak: false, webSecurity: false })
    .goto("https://fr.wikipedia.org/wiki/Palmar%C3%A8s_du_Tour_de_France")
    .viewport(1024, 768) //test pour les screenshots


    .wait() //attendre que la page soit chargée pour récupérer les infos
    .screenshot('home_wikipedia.jpg') //test pour savoir où on est
   .evaluate (function(){ //va chercher la valeur de...
      var winner = $("[title='Tour de France 1953']")[0].parentElement.parentElement.children[1].children[1].text;
      return winner; //retourne winner, le résultat texte 

   }, function(winner){ //attrape le return
    console.log(winner) //affiche winner
   })


    .url (function(url){ //test pour afficher l'url en cours
      console.log("Our current url is " +url)
    })

    .run(function(err, nightmare){ //attrape erreur
      if (err) return console.log (err);
      console.log("Done.");
    });