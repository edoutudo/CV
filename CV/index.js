alert("Bienvenue sur mon site");

var maFonction = function(obj)
{	
  var titre = obj.titre;
  var actif = obj.actif;
  return {
  	titre : titre, 
  	actif: actif
  };
};

var menus = [
  maFonction({ titre: "Accueil", actif: false}),
  maFonction({ titre: "Formation", actif: false}),
  maFonction({ titre: "Travaux", actif: false}),
  maFonction({ titre: "Contact", actif: false})
];

console.log(menus);

for (var i = 0; i < menus.length; i++) {
	var newLink = document.createElement('a');
	newLink.setAttribute("class" , "boutonmenu");
	newLink.setAttribute('href' , "#" + menus[i].titre.toLowerCase());
	newLink.innerHTML = menus[i].titre;
	var navig = document.querySelector("#navigation");
	navig.appendChild(newLink);
}