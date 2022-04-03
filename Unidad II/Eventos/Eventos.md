# Captura y Propagación de Eventos En JavaScript #

Alumno: **Brandon Alonso Acosta Gonzalez.**
No. De Control: **19100139.**

Vamos a empezar con un ejemplo.

Este manejador está asignado a **<div>**, pero también se ejecuta si haces clic a cualquier elemento anidado como **<em>** ó **<code>**:

***Propagación***

El principio de propagación es simple.

Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros.

Digamos que tenemos 3 elementos anidados **FORM** > **DIV** > **P** con un manejador en cada uno de ellos:

Ejemplo: 

**<style>**
  **body * {**
    **margin: 10px;**
    **border: 1px solid blue;**
  **}**
**</style>**

**<form onclick="alert('form')">FORM**
  **<div onclick="alert('div')">DIV**
    **<p onclick="alert('p')">P</p>**
  **</div>**
**</form>**
