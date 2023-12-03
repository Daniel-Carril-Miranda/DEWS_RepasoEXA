import { mostrar } from './main.js';
export class Motos {
    // Los atributos 
    #m;
    #ci;
    #p;
    #co;

    // Constructor por parámetros
    constructor (marca, cilindrada, potencia, color){
        this.#m = marca;
        this.#ci = cilindrada;
        this.#p = potencia;
        this.#co = color;
    }

    // GETERS y SETTERS
    get marca(){
        return this.#m;
    }
    set marca(marca){
        this.#m = marca;
    }
    get cilindrada(){
        return this.#ci;
    }
    set cilindrada(cilindrada){
        this.#ci = cilindrada;
    }
    get potencia(){
        return this.#p;
    }
    set potencia(potencia){
        this.#p = potencia;
    }
    get color(){
        return this.#co;
    }
    set color(color){
        this.#co = color;
    }
    verMoto(){
        const mensaje = 
        `Marca ${this.#m} <br>
        Cilindrada: ${this.#ci} <br>
        Potencia: ${this.#p} <br>
        Color: ${this.#co}`;

        mostrar(`<p>${mensaje}</p>`);
    }
    estallar(){
        const mensaje = `<b>La moto</b> <br> 
        Marca ${this.#m} <br>
        Cilindrada: ${this.#ci} <br>
        Potencia: ${this.#p} <br>
        Color: ${this.#co} <br>
        <b>Ha estallado en 3 pedazos matando al conductor y decapitando a su hijo</b>`;
        mostrar(`<p>${mensaje}</p>`);
    }
}