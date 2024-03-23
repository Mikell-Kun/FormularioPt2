# Gabriel Miguel Cabrera Samano
# No.Control: 20491199
# Formulario Pt. 2 (practica continua del formulario pt. 1)

## Explique los arreglos en JavaScript:
- de la misma manera que en otros lenguajes de programacion, en JS un arreglo se construye como una estructura de datos que se utiliza para almacenar una colección de elementos, en donde estos elementos pueden ser parte de cualquier tipo de datos (enteros, caracteres, cadenas, entre otros), y al igual que en todos los arrelgos. Los elementos en un arreglo son indexados, lo que significa que cada elemento tiene una posición numérica que comienza desde cero.

# Explique el almacenamiento del navegador (sessionStorage y localStorage) indique ventajas y desventajas, capacidad de almacenamiento y como accederlo utilizando java script (como almacenar, recuperar y eliminar datos)
- sessionStorage y localStorage son mecanismos de almacenamiento de datos que proporcionan los navegadores web en donde permiten que las aplicaciones web almacenen datos de forma persistente por el lado del cliente. los dos poseen propositos similares pero difieren en ciertas caracteristicas como su alcance y duración de almacenamiento.

### COMPARATIVA
- sessionStorage:
  - Capacidad de almacenamiento: Por lo general, alrededor de 5 MB por origen.
  - Alcance: Los datos se almacenan por pestaña o ventana del navegador.
Ventajas:
  - Los datos persisten mientras la pestaña o ventana esté abierta.
  - Los datos no se comparten entre pestañas o ventanas del mismo origen.
Desventajas:
  - Los datos se eliminan cuando se cierra la pestaña o ventana.
  - capacidad limitada en comparacion con localStorage.
ejemplo:
// Almacenar datos en sessionStorage
- sessionStorage.setItem('usuario', 'Juan');

// Recuperar datos de sessionStorage
- let usuario = sessionStorage.getItem('usuario');
- console.log(usuario); // Salida: Juan

// Eliminar datos de sessionStorage
- sessionStorage.removeItem('usuario');

- LocalStorage:
  - Capacidad de almacenamiento: Por lo general, alrededor de 5 MB por origen.
  - Alcance: Los datos se almacenan a nivel de dominio (mismo protocolo, dominio y puerto).
Ventajas:
  - Los datos persisten incluso después de cerrar y reabrir el navegador.
  - Los datos están disponibles para todas las pestañas y ventanas del mismo origen.
Desventajas:
  - No se borra automáticamente, lo que puede aumentar el riesgo de almacenar datos sensibles.
  - Capacidad limitada en comparación con bases de datos locales más robustas.
ejemplo:
// Almacenar datos en localStorage
- localStorage.setItem('preferencia', 'oscuro');

// Recuperar datos de localStorage
- let preferencia = localStorage.getItem('preferencia');
- console.log(preferencia); // Salida: oscuro

// Eliminar datos de localStorage
- localStorage.removeItem('preferencia');

# ¿Qué es JSON?
- es un formato de datos ligero y legible para el usuario que es implementado para realizar intercambios de datos entre un servidor y un navegador web (o entre diferentes sistemas). aunque se basa en JS, es independiente de cualquier lenguaje, por lo que puede ser implementado en diferentes programas que pueden realizar comunicacion de datos.

# ¿Qué hacen las funciones JSON.parse() y JSON.stringify() ?
- JSON.parse(): Convierte una cadena JSON en un objeto JavaScript.

let jsonTexto = '{"nombre": "María", "edad": 30}';
let objeto = JSON.parse(jsonTexto);
console.log(objeto.nombre); // Salida: María

- JSON.stringify(): Convierte un objeto JavaScript en una cadena JSON.

let objeto = { nombre: 'Carlos', edad: 25 };
let jsonTexto = JSON.stringify(objeto);
console.log(jsonTexto); // Salida: '{"nombre":"Carlos","edad":25}'

# ¿Cómo funciona window.location.href ?
- permite redirecciona una url desde la pagina actual de trabajo a otra pagina diferente, de la misma manera que puede devolver una URL a la pagina actual.

# Explique el funcionamiento de scriptResultados.js
- scriptResultados.js es un archivo aparte en script el cual interactua con el archivo resultados.HTML. En este documento, permite retomar todos los objetos enviados por parte del archivo script.js, ya que al momento de realizar un registro, toda la informacion se convertira en un objeto en donde realizara un envio a LocalStorage guardando todo el arreglo actualizado, y se redirecciona justamente a resultados.HTML, lo que permite scriptResultados.js es retomar toda esa informacion en una variable constante llamada tablaResultados, en donde se enviara de manera ordenada al contenido de la tabla por cada envio que reciba del registro,  de manera que cada registro enviado por parte del registro.html, sea almacenado en la tablaResultados y se vea reflejado en el documento de resultados.html.
