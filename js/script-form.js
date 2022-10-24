var btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
	e.preventDefault()
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value,
	subject = document.getElementById('subject').value,
	message = document.getElementById('message').value;
	var body = 'name: '+name+ '<br/> email: ' + '<br/> subject : ' + subject + '<br/> message : ' + message;
	Email.send({
	SecureToken : "475dc553-ecef-4802-a2c2-0493adde55a8",
    Password : "34DCA3942A3B02A4E8BA56ECD66BAEB022CB",
    To : "e.anasbaroudi@gmail.com",
    From : email,
    Subject : subject,
    Body : body
}).then(
  message => alert(message)
);
})





