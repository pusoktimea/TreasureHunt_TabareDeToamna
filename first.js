
function check(form)
{

 if(form.userid.value == "findthemagic" && form.pswrd.value == "hunter*123")
  {
    window.open('magic.html');
  }
 else
 {
   alert("That was not magical....try again")
  }
  console.log("oh, you're almost there, keep trying")

}
