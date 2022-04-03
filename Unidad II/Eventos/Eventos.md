# Captura y Propagación de Eventos En JavaScript #

Alumno: **Brandon Alonso Acosta Gonzalez.**
No. De Control: **19100139.**

Vamos a empezar con un ejemplo.

Este manejador está asignado a **<**div**>**, pero también se ejecuta si haces clic a cualquier elemento anidado como **<**em**>** ó **<**code**>**:

### **Propagación**

El principio de propagación es simple.

Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros.

Digamos que tenemos 3 elementos anidados **FORM** > **DIV** > **P** con un manejador en cada uno de ellos:

Ejemplo:

<img src ="https://scontent.xx.fbcdn.net/v/t1.15752-9/277615334_725205611821402_4197824097359398404_n.png?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFSA65ltWvF00piahqpAeSkZaM9fiF0119loz1-IXTXXy46VNXtIyrZyLsYCU1G_WGAWQP0LQqKrBRBTArr84Nf&_nc_ohc=iVEdxQLvI9cAX_gtcIe&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIqunUc7HsB0MiRNxd497VlmLNciSV-HtdbfbW4Blmnow&oe=626D0932">

Un clic en el elemento del interior **<**p**>** primero ejecuta onclick:

En ese **<**p**>**.

Luego en el **<**div**>** de arriba.

Luego en el **<**form**>** de más arriba.

Y así sucesivamente hasta el objeto **document**.

<img src ="https://scontent.xx.fbcdn.net/v/t1.15752-9/277596970_537275937766057_6989615068335078423_n.png?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHgKfWmyCPWKvR8ayoLXLbpHgi-me3__oEeCL6Z7f_-gQ7HA5P03ZTTkHc5SXVY3MX_ya004X9uPGnwwki4sxFT&_nc_ohc=1u2MPFgqt4IAX_5s25x&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKet0zKgf_6BWrEmjY31VrXXtNNC9IVl3MXHumZcvz_Vw&oe=626D0514">

Así si hacemos clic en **<**p**>**, entonces veremos 3 alertas: **p** → **div** → **form**.

Este proceso se conoce como *“propagación”* porque los eventos *“se propagan”* desde el elemento más al interior, a través de los padres, como una burbuja en el agua.

### **event.target**
Un manejador en un elemento padre siempre puede obtener los detalles sobre dónde realmente ocurrió el evento.

El elemento anidado más profundo que causó el evento es llamado elemento objetivo, accesible como *event.target*

Nota la diferencia de **this (=event.currentTarget):**

**event.target** – es el elemento *“objetivo”* que inició el evento, no cambia a través de todo el proceso de propagación.

**this** – es el elemento “actual”, el que tiene un manejador ejecutándose en el momento.

Por ejemplo, si tenemos un solo manejador **form.onclick**, este puede atrapar todos los clicks dentro del formulario. No importa dónde el clic se hizo, se propaga hasta el **<**form**>** y ejecuta el manejador.

En el manejador **form.onclick:**

**this (=event.currentTarget)** es el elemento **<**form**>**, porque el manejador se ejecutó en él.

**event.target** es el elemento actual dentro de el formulario al que se le hizo clic.

Ejemplo:

<img src ="https://scontent.xx.fbcdn.net/v/t1.15752-9/277592182_671099180795149_3768383411015278172_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHy1j0vtb1cFuISbjs10g9f5LmIZ0ipJ2rkuYhnSKknamLkpXGhcHsZgdjjPSrZ3pL4939pHdT8XKImyed7q0kQ&_nc_ohc=kQ2JwIV8GSIAX91Rvcc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI5UoU8ee--2BN4c7hsnCuRU-5510MHnA-2SI9FhK94Kg&oe=626CD75F">

<img src ="https://scontent.xx.fbcdn.net/v/t1.15752-9/277593158_519387812909006_7751621508915397229_n.png?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHieGKK8NjBtuyWBE7qmjfIdlPELTl67LF2U8QtOXrssdW0WLM_LbQpSo8Xml9IqiJzFMQDzxfM4HVDxc9rzUeD&_nc_ohc=XT4Kyi_LUuEAX-i1Zhf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ-bZNnW2U9aXYfUKnW96hUdHpFvlaFa8UR1Fydnll4qg&oe=626D55EC">

Es posible que event.target sea igual a **this:** ocurre cuando el clic se hace directamente en el elemento **<**form**>**.

### **Captura**

Hay otra fase en el procesamiento de eventos llamada *“captura”*. Es raro usarla en código real, pero a veces puede ser útil.

El estándar de eventos del **DOM** describe 3 fases de la propagación de eventos:

**Fase de captura** – el evento desciende al elemento.

**Fase de objetivo** – el evento alcanza al elemento.

**Fase de propagación** – el evento se propaga hacia arriba del elemento.

Aquí está la imagen de un clic en **<**td**>** dentro de una tabla, tomada desde la especificación:

<img src ="https://scontent.xx.fbcdn.net/v/t1.15752-9/277609792_2114842248674282_1559767068562066587_n.png?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFd2HQqaQqv1i3DoGqvwR7LEx7S7No8w_wTHtLs2jzD_GGUHEYE0rejowvAb71VHXdJwwhfWosuB0kV2R-Fd-yb&_nc_ohc=_Qkez_7WGIAAX8WOp35&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIJ9NTon99lIeNlXFr9dWJ45Qmg1RKjyBpw1Dh8NPKTUg&oe=626FFA60
">

**Se explica así:** por un clic en **<**td**>** el evento va primero a través de la cadena de ancestros hacia el elemento **(fase de captura)**, luego alcanza el objetivo y se desencadena ahí **(fase de objetivo)**, y por último va hacia arriba **(fase de propagación)**, ejecutando los manejadores en su camino.

Antes solo hablamos de la propagación porque la fase de captura es raramente usada. Normalmente es invisible a nosotros.

Los manejadores agregados usando la propiedad **on** **<**event**>** ó usando atributos **HTML** ó **addEventListener(event, handler)** con dos argumentos no ejecutarán la fase de captura, únicamente ejecutarán la 2da y 3ra fase.

Para atrapar un evento en la fase de captura, necesitamos preparar la opción capture como true en el manejador:


<img src ="https://scontent.xx.fbcdn.net/v/t1.15752-9/277601018_1378764029252341_4864108464956108727_n.png?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHbzydlxgX5Qtq5lDsfkGnAL-zt6XouoUkv7O3pei6hSTd4BQKqcM3u8ZqhD-tyw51_ufF7SL-jXFwOyw8HN6sX&_nc_ohc=gVWBA6HhO10AX_hyS3u&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJwhCycN8rmyh6EYeDnqzCR9rpB65K67UUfel59ZnIz0g&oe=62709CB9">

Hay dos posibles valores para la opción capture:

Si es **false** **(por defecto)**, entonces el manejador es preparado para la fase de propagación.

Si es **true**, entonces el manejador es preparado para la fase de captura.

Es de notar que mientras formalmente hay 3 fases, la 2da fase **(*“la fase de objetivo”*: el evento alcanzó el elemento)** no es manejada de forma separada; los manejadores en ambas fases, la de captura y propagación, se disparan en esa fase.

Veamos ambas fases, captura y propagación, en acción:

<img src ="https://scontent.xx.fbcdn.net/v/t1.15752-9/277542171_553467322780103_7044577110777365738_n.png?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHyuZOUYhZGv_KCNfx6CgT1XsMGYrxSfttewwZivFJ-2ynMk-NosYmxtypllJuPAQYk4a_ONqk9fEAUx7eq7iUk&_nc_ohc=ciovCdg6ieUAX_ICl9D&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVILIkhXpq6iUmxqoQDOyjaXb55KDimYA7PvZzGzhYwytA&oe=626FA44F">

El código prepara manejadores de clic en cada elemento en el documento para ver cuáles están funcionando.

Si haces clic en **<**p**>**, verás que la secuencia es:

**HTML** → **BODY** → **FORM** → **DIV** **(fase de captura, el primer detector):**
**P** **(fase de objetivo, se dispara dos veces, tan pronto como preparemos los dos detectores: de captura y propagación)**
**DIV** → **FORM** → **BODY** → **HTML** **(fase de propagación, el segundo detector)**.

Hay un propiedad **event.eventPhase** que nos dice el número de fase en la qué el evento fue capturado. Pero es raramente usada, ya que usualmente lo sabemos en el manejador.



