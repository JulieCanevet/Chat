var pseudo = prompt ('Quel est ton nom ?');
var premierCaractere = pseudo.charAt(0);


// récuperer la 1ere lettre du pseudo
$('#you').html(premierCaractere.toUpperCase());

$('#message').keypress(function(e) {    
   if(e.keyCode == 13) { // KeyCode de la touche entrée
         envoyer(); 
 }
});


$('#envoi').click(envoyer);

	function envoyer() {
	var message = $('#message').val(); // Recupere le message du textarea
	$('#message').val(""); //Vide le textarea
	$("div").last().after("<div class='msg Y'><h3 class='oui'></h3><p></p></div>");
	$('.Y p').last().html(message);
	$('.oui').html(premierCaractere.toUpperCase());
 
 // Reponse de rebecca
 setTimeout(function(){
    $(".Y:last").after("<div class='msg R'><h3>R</h3><p>Ca va ?</p></div>");
   	var scroll = document.getElementById('chat');
	scroll.scrollTop = scroll.scrollHeight;
 }, 2000);

  	var scroll = document.getElementById('chat');
	scroll.scrollTop = scroll.scrollHeight;

};


