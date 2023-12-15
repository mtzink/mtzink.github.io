function validateForm(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    if(name.value.length < 2) {
        alert("Your name must include at least 2 characters");
        return false;
    }else if(!(/^[A-Za-z]+$/.test(name.value))){
        alert("Your name must only include characters from the alphabet");
        return false;
    }else if(/@/.test(email.value)){
          return true}
    else{
        alert("The email you entered does not contain an @ sign and is considered to be incorrect."+
        " If you somehow have a magic email which doesn't contain an @ sign please email me at the address above with your comments."+
        "(also let me know how you made an email without an @ because I'm pretty sure thats impossible...)");
      return false;
    }}

function displayOther(){
    var other = document.getElementById("otherCheck");
    var text = document.getElementById("otherText");
    if (other.checked == true){
        text.style.display = "inline";
    } else {
        text.style.display = "none";
    }
}