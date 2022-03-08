# Modelo De Caja  #

Alumno: **Brandon Alonso Acosta Gonzalez.**
No. De Control: **19100139.**

 En el desarrollo web, el modelo de caja CSS se refiere a cómo se modelan los elementos HTML en los motores de navegación y cómo las dimensiones de esos elementos HTML se derivan de las propiedades CSS. 

Es un concepto fundamental para la composición de páginas web HTML. Las pautas del modelo de caja están descritas por los estándares web World Wide Web Consortium (W3C), específicamente el CSS Working Group. Durante gran parte de la década de 1990 y principios de la de 2000, hubo implementaciones del modelo de caja que no cumplían con los estándares en los navegadores principales. 

Con la llegada de CSS2 en 1998, que introdujo la box-sizingproperety, el problema se había resuelto en su mayor parte.

La especificación de hojas de estilo en cascada (CSS) describe cómo los navegadores gráficos muestran los elementos de las páginas web . La sección 4 de la especificación CSS1 define un "modelo de formato" que proporciona elementos a nivel de bloque, como **p** y **blockquote**, un ancho y alto, y tres niveles de cuadros que lo rodean: relleno, bordes y márgenes. Si bien la especificación nunca usa el término "modelo de caja" explícitamente, el término se ha vuelto ampliamente utilizado por desarrolladores web y proveedores de navegadores web.

Todos los elementos HTML se pueden considerar "cajas", esto incluye divetiqueta, petiqueta o aetiqueta. Cada una de esas cajas tiene seis dimensiones modificables:

- Contenido (content): se trata del contenido HTML del elemento (las palabras de un párrafo, una imagen, el texto de una lista de elementos, etc.).

- Relleno (padding): espacio libre opcional existente entre el contenido y el borde.

- Borde (border): línea que encierra completamente el contenido y su relleno.

- Imagen de fondo (background image): imagen que se muestra por detrás del contenido y el espacio de relleno.

- Color de fondo (background color): color que se muestra por detrás del contenido y el espacio de relleno.

- Margen (margin): separación opcional existente entre la caja y el resto de cajas adyacentes.

<img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/W3C_and_Internet_Explorer_box_models.svg/300px-W3C_and_Internet_Explorer_box_models.svg.png">

El modelo de cajas o "box model" es seguramente la característica más importante del lenguaje de hojas de estilos CSS, ya que condiciona el diseño de todas las páginas web. El modelo de cajas es el comportamiento de CSS que hace que todos los elementos de las páginas se representen mediante cajas rectangulares.