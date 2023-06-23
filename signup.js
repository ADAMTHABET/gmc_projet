let username=document.getElementById('name')
let email=document.getElementById('mail')
let password=document.getElementById('password')
let num=document.getElementById('num')
let age=document.getElementById('age')
let adr=document.getElementById('adr')
let sub=document.getElementById('sub')

function all(){
    if (username.value==="" || email.value==="" || password.value==="" || num.value==="" || age.value==="" || adr.value==="")
    alert("TOUS LES CHAMPS DOIVENT ETRE REMPLIS")
    else alert("INSCRIPTION REUSSIE")
}

sub.addEventListener('click',all);



