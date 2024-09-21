// Definir la clase Persona
class Persona {
    // Constructor para inicializar los atributos
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    // Método para obtener información de la persona
    obtenerInfo() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Profesión: ${this.profesion}`;
    }

    // Método para aumentar la edad
    cumplirAnios() {
        this.edad += 1;
        console.log(`${this.nombre} ahora tiene ${this.edad} años.`);
    }
}

// Crear tres objetos de la clase Persona
let objeto1 = new Persona("Juan", 25, "Ingeniero");
let objeto2 = new Persona("María", 30, "Doctora");
let objeto3 = new Persona("Carlos", 28, "Abogado");

// Imprimir la información de los tres objetos
console.log(objeto1.obtenerInfo());
console.log(objeto2.obtenerInfo());
console.log(objeto3.obtenerInfo());

// Usar el método cumplirAnios en uno de los objetos
objeto1.cumplirAnios();
