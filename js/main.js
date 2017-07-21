var pseudo = prompt ('Quel est ton nom ?');
var premierCaractere = pseudo.charAt(0);
var reponses = ["ca va ?", "oui tranks", "merci", "jsais pas et toi ?", "je t'aime pas"];
var x = 0;

// récuperer la 1ere lettre du pseudo
$('#you').html(premierCaractere.toUpperCase());

// cliquer sur la touche entrer pour envoyer les msg
$('#message').keypress(function(e) {    
   if(e.keyCode == 13) { 
   e.preventDefault();// KeyCode de la touche entrée
         envoyer(); 
         var message = $('#message').val("");
 }
});

// Envoyer avec le click du bouton (smartphone)
$('#envoi').click(envoyer);

//
	function envoyer() {
	var message = $('#message').val(); // Recupere le message du textarea
	//Vide le textarea
	$("div").last().after("<div class='msg Y'><h3 class='you'></h3><p></p></div>");
	$('.Y p').last().html(message);
	$('.you').html(premierCaractere.toUpperCase());
 	
 	var scroll = document.getElementById('chat');
	scroll.scrollTop = scroll.scrollHeight;
	var message = $('textarea').val("");
 
 // Reponse de rebecca
 setTimeout(function(){

    $(".Y:last").after("<div class='msg R'><h3>R</h3><p class='answer'></p></div>");
   	
   	$('.answer:last').html(reponses[x]);
   	x++;
   	if(x == reponses.length){x = 0};
   	var scroll = document.getElementById('chat');
	scroll.scrollTop = scroll.scrollHeight;

 }, 2000);

};


