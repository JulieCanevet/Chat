var pseudo = prompt ('Quel est ton nom ?');
var premierCaractere = pseudo.charAt(0);


// récuperer la 1ere lettre du pseudo
$('#you').html(premierCaractere.toUpperCase());

$('#envoi').click(function() {
	var message = $('#message').val();
	$('.Y p').html(message);
	$('#message').html();
	setTimeout(function(){
		$("div").addClass("R");
	}, 2000);
});



