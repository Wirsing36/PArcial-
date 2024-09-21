public class persona {
    public static void main(String[] args) {
        // Crear un objeto de la clase Persona e inicializarlo con un nombre
        Persona persona1 = new Persona("Juan");

        // Mostrar el nombre de la persona
        persona1.mostrarNombre(); // Esto debería imprimir: "El nombre de la persona es: Juan"

        // Cambiar el nombre de la persona
        persona1.setNombre("Carlos");

        // Mostrar el nuevo nombre de la persona
        persona1.mostrarNombre(); // Esto debería imprimir: "El nombre de la persona es: Carlos"
    }
}
