
function check(form)
{

 if(form.userid.value == "findthemagic" && form.pswrd.value == "hunter*123")
  {
    window.open('magic.html');
  }
 else
 {
   alert("Give it another try");
  }

}

setInterval(function() {
  var message = document.getElementById("message");
  var welcomeText = document.getElementById("welcome-text");
  message.style.display = checkme.checked ? "block" : "none";
  welcomeText.style.display = checkme.checked ? "none" : "block";
}, 100);
