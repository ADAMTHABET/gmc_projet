let username=document.getElementById('name')
let password=document.getElementById('password')
let sub=document.getElementById('sub')
function verif(){

    if (username.value==="adam" && password.value==="123")
    alert("CONNEXION REUSSIE");

else 
alert("VERIFIER VOS CORDONNEES!!!");
}
sub.addEventListener('click',verif);

