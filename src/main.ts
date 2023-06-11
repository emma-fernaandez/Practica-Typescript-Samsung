import { Persona } from "./personas"
import { Direccion } from "./direcciones"
import { Mail } from "./mails"
import { Telefono } from "./telefonos"


// Creación de 3 registros de persona
// Direcciones
const direccionPersona1 = new Direccion("calle Cervantes", 2, 5, "A", 34672, "Lorca", "Murcia");
const direccionPersona2 = new Direccion("calle Aguilas", 19, 3, "B", 34672, "Lorca", "Murcia");
const direccionPersona3 = new Direccion("calle Lepanto", 14, 1, "A", 34672, "Lorca", "Murcia");
// Mails
const mailPersona1 = new Mail("personal", "juanmartinezsaez@gmail.com");
const mailPersona2 = new Mail("personal", "anafernandezperez@gmail.com");
const mailPersona3 = new Mail("personal", "adrianlopezabad@gmail.com");
// Telefonos
const telefonoPersona1 = new Telefono("trabajo", 672456234);
const telefonoPersona2 = new Telefono("personal", 604489076);
const telefonoPersona3 = new Telefono("personal", 633454670);

// Persona1
const persona1 = new Persona ("Juan", "Martínez Saez", 19, "45673529A", "19/04/2002", "rojo", "masculino", [direccionPersona1], [mailPersona1], [telefonoPersona1], "Compañero de trabajo");
// Persona 2
const persona2 = new Persona ("Ana", "Fernandez Perez", 21, "40388032B", "19/04/2002", "rojo", "femenino", [direccionPersona2], [mailPersona2], [telefonoPersona2], "Novia Juan")
// Persona 3
const persona3 = new Persona ("Adrian", "Lopez Abad", 32, "44356899R", "19/04/2002", "rojo", "masculino", [direccionPersona3], [mailPersona3], [telefonoPersona3], "Amigo Ana")

// Mostrar en la terminal cada registro de persona
console.log(persona1)
console.log(persona2)
console.log(persona3)



// Modificación de uno de los registros de persona realizando búsqueda por dni
const buscarPorDni = (dni = "") => {
    const nuevaDireccion = new Direccion("calle Atalaya", 3, 9, "B", 30510, "Yecla", "Murcia");
    const nuevoTelefono = new Telefono("personal", 781943567);
    const nuevoMail = new Mail ("personal","nuevapersona.murcia@gmail.com");

    if (dni === persona1.dni) {
        persona1.modificarPersona([nuevaDireccion], [nuevoTelefono], [nuevoMail]);
        return console.log("El dni coincide con la persona1");
    }; 
    if (dni === persona2.dni){
        persona2.modificarPersona([nuevaDireccion], [nuevoTelefono], [nuevoMail]);
        return console.log("El dni coincide con la persona2");
    };
    if (dni === persona3.dni){
        persona3.modificarPersona([nuevaDireccion], [nuevoTelefono], [nuevoMail]);
        return console.log("El dni coincide con la persona3");
    }
}

buscarPorDni("44356899R")



// Mostrar en la terminal los cambios realizados
console.log(persona1)
console.log(persona2)
console.log(persona3)

