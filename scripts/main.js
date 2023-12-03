// Author: Daniel Carril Miranda (Student)
// GitHub: aawdawd
console.log("JS enlazado");

import { Motos } from './claseMotos.js';
import { MotosR } from './motosR.js';

export function mostrar(mensaje) {
    document.querySelector("main").appendChild(document.createElement("div")).innerHTML += `<p>${mensaje}</p>`;
}
/* Esto es lo mismo que poner:
const mensaje = document.createElement("div");
document.querySelector("main").appenChild(mensaje);
mensaje.innerHTML = `<p>${mensaje}</p>`;
document.querySelector("main").appenchild(div).innerHTML += `<p>${mensaje}</p>`;*/


const Moto1 = new Motos ("voge", 300, 29, "azul");
console.log(Moto1);
mostrar("<u>La moto1 es la siguiente:</u>");
Moto1.verMoto();
Moto1.estallar();

// Obetenemos sólo la cilindrada y la cambiamos
console.log(Moto1.cilindrada);
Moto1.cilindrada = 250;
console.log(Moto1.cilindrada);

const Moto2 = new MotosR ("Yamaha", 600, 75, "verde", 75, 21);
console.log(Moto2);
Moto2.datos();
Moto2.frenar();

// Variable de tipo Objet de un objeto Moto:
const motoObject = {
    velocidad: "mucha",
    riesgoMuerte: "elevado",
    ruedas: 2
}
console.log(motoObject);
localStorage.clear();
localStorage.setItem("Moto1", JSON.stringify(motoObject));
console.log(localStorage.getItem("Moto1"));
console.log(JSON.parse(localStorage.getItem("Moto1"))); /* Es lo mismo que console.log(motoObject); */

/* ------------------------------------------------------------ */

// Genere variable tipo Object con POO
const motoObject2 = {
    marca: Moto2.marca,
    cilindrada: Moto2.cilindrada,
    potencia: Moto2.potencia,
    color: Moto2.color,
    altura: Moto2.altura,
    ruedas: Moto2.ruedas,
}

// Almacenar los datos en el LocalStorage mediante un bcle iterativo
for (const key in motoObject2){
    if (motoObject2.hasOwnProperty(key)){
        localStorage.setItem(key, motoObject2[key]);
    }
};

localStorage.setItem("Moto2", JSON.stringify(motoObject2));
// Mostrar los datos en el LocalStorage
console.log(motoObject2);
console.log(JSON.parse(localStorage.getItem("Moto2")));

// Elimina el color del loalstorage
localStorage.removeItem("color");
// Eliminar del localStorage
localStorage.removeItem("todoterreno");

