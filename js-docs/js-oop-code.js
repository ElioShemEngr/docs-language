// Programacion Orientada a Objetos

// Clases
class Animal {
    //Atributos
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    };

    //Metodos
    hacerSonido(){
        console.log("Emitiendo Sonido Generico");
    };

    saludar(){
        console.log(`Hola mi nombre es: ${this.nombre} y mi genero es: ${this.genero}`);
    };

};


const scooby = new Animal("Scobby", "Macho");
const mimi = new Animal("Mimi", "Hembra");

console.log(scooby.nombre); // Scobby
console.log(mimi.nombre);   // Mimi

scooby.hacerSonido(); // Emitiendo Sonido Generico
mimi.hacerSonido(); // Emitiendo Sonido Generico

scooby.saludar(); // Hola mi nombre es: Scobby y mi genero es: Macho
mimi.saludar(); // Hola mi nombre es: Mimi y mi genero es: Hembra

// ***********************************************************************************************************
// Herencia
class Perro extends Animal {
    constructor(nombre, genero, tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;
    };

    hacerSonido(){
        console.log("Guaf Guaf Guaf");
    };
};

const sanson = new Perro("Sanson", "Macho", "Grande");

console.log(sanson.nombre);
console.log(sanson.tamanio);

sanson.saludar();

sanson.hacerSonido();

// ***********************************************************************************************************
// Metodos Estaticos (Static), Getters y Setters
// Son metodos que se pueden invocar sin ser instanciados.

class Gato extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    hacerSonido(){
        console.log("Miau Miau Miau");
    };

    // Metodo estatico
    static queEres(){
        console.log("Soy un gato y somos los amos del universo, Respetame!");
    };

    // Metodos getters
    get getRaza(){
        return this.raza;
    }

    // Metodos Setters
    set setRaza(raza){
        this.raza = raza;
    };

}

Gato.queEres();

const michifus = new Gato("Michifus", "Macho", "Mediano");
console.log(michifus.nombre);
console.log(michifus.tamanio);

// Los getters y setters se tratan como propiedades
console.log(michifus.getRaza);
michifus.setRaza = "Angora";
console.log(michifus.getRaza);

