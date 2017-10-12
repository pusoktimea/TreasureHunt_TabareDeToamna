
function check(form)
{

 if(form.userid.value == "findthemagic" && form.pswrd.value == "hunter*123")
  {
    window.open('magic.html');
  }
 else
 {
   alert("That was not magical....try again");
  }
  console.log("oh, you're almost there, keep trying");

}

var checker = document.getElementById('checkme');


// checker.onchange = function() {
//    document.getElementById('doneButton').disabled = false;
// };

// function statecheck(){
//     console.log(this);
//   console.log(this.checked);
//   if( document.getElementById('checkme').checked===true){
//    document.getElementById('doneButton').disabled === false;
// }
// }

// $(".chellange").hide();
// $(".form-check-label").click(function() {
//     if($(this).is(":checked")) {
//       console.log("Hello!")
//         $(".chellange").show();
//     } else {
//         $(".chellange").hide();
//     }
// });

function ShowHideDiv(checkme) {
    var message = document.getElementById("message");
    var welcomeText = document.getElementById("welcome-text");
    message.style.display = checkme.checked ? "block" : "none";
    welcomeText.style.display = checkme.checked ? "none" : "block";
}

//
// if(doneButton.enabled == true){
//   window.open('index.html');
// }
