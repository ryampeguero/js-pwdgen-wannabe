const nome = prompt("Scrivi il tuo nome");  //String
const cognome = prompt("Scrivi il tuo cognome"); //String
const colore = prompt("Scrivi il tuo colore preferito"); //String
const numRand = Math.floor (Math.random() * 100); //Number

let password = nome + cognome + colore + numRand;

document.getElementById("password").innerHTML = password;
