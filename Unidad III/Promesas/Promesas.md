# Promise  #

Alumno: **Brandon Alonso Acosta Gonzalez.**
No. De Control: **19100139.**

El objeto Promise (Promesa) es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

**Sintaxis**

"new Promise( /* ejecutor */ function(resolver, rechazar) { ... } );"

**Parámetros**

*ejecutor*

Una función con los argumentos resolver y rechazar. La función ejecutor es ejecutada inmediatamente por la implementación de la Promesa, pasándole las funciones resolver y rechazar (el ejecutor es llamado incluso antes de que el constructor de la Promesa devuelva el objeto creado). Las funciones resolver y rechazar, al ser llamadas, resuelven o rechazan la promesa, respectivamente. Normalmente el ejecutor inicia un trabajo asíncrono, y luego, una vez que es completado, llama a la función resolver para resolver la promesa o la rechaza si ha ocurrido un error.
Si un error es lanzado en la función ejecutor, la promesa es rechazada y el valor de retorno del ejecutor es rechazado.

**Descripción**

Una Promesa es un proxy para un valor no necesariamente conocido en el momento que es creada la promesa. Permite asociar manejadores que actuarán asincrónicamente sobre un eventual valor en caso de éxito, o la razón de falla en caso de una falla. Esto permite que métodos asíncronos devuelvan valores como si fueran síncronos: en vez de inmediatamente retornar el valor final, el método asíncrono devuelve una promesa de suministrar el valor en algún momento en el futuro.

Una Promesa se encuentra en uno de los siguientes estados:

- pendiente (pending): estado inicial, no cumplida o rechazada.

- cumplida (fulfilled): significa que la operación se completó satisfactoriamente.

- rechazada (rejected): significa que la operación falló.

Una promesa pendiente puede ser cumplida con un valor, o rechazada con una razón (error). Cuando cualquiera de estas dos opciones sucede, los métodos asociados, encolados por el método then de la promesa, son llamados. (Si la promesa ya ha sido cumplida o rechazada en el momento que es anexado su correspondiente manejador, el manejador será llamado, de tal manera que no exista una condición de carrera entre la operación asíncrona siendo completada y los manejadores siendo anexados)

Como los métodos "Promise.prototype.then()" y "Promise.prototype.catch()" retornan promesas, éstas pueden ser encadenadas.

<img src ="https://mdn.mozillademos.org/files/8633/promises.png">
