import { Motos } from "./claseMotos.js";
import { mostrar } from "./main.js";

export class MotosR extends Motos {
    #al;
    #ru;

    constructor (marca, cilindrada, potencia, color, altura, ruedas){
        super (marca, cilindrada, potencia, color);
        this.#al = altura;
        this.#ru = ruedas;
    }

    get altura(){
        return this.#al;
    }
    get ruedas(){
        return this.#ru;
    }
    set altura(altura){
        this.#al = altura;
    }
    set ruedas(ruedas){
        this.#ru = ruedas;
    }

    datos(){
        const datos = `La motillo tiene ${this.#al}cms de alto y ruedas de ${this.#ru}"`;
        mostrar(datos);
    }
    frenar(){
        const frenar = `La motillo ha frenado en 20 metros`;
        mostrar(frenar);
    }
}