---
slug: "/faq/subir-cursos"
date: "2020-06-17"
title: "Cómo subir cursos a la plataforma Aeducar"
---

*** Nota: Esta información está indicada para el gestor de Aeducar en el centro educativo***

Cuando es un único curso o unos pocos los que hay que crear, no hay problema en hacerlo desde:
*Administración del sitio >> Cursos >> Administrar cursos y categorías.*

En cambio, cuando tenemos que preparar la estructura completa de un centro, por ejemplo, puede convertirse entonces en una tarea más pesada que podemos evitar preparando un fichero CSV con la información básica de los cursos a crear.


Para la carga masiva de cursos las categorías deberán existir previamente.
Nos hará falta un fichero CSV contendrá una fila por cada curso que vaya a ser creado. Los campos que debemos completar para cada curso son:
- *shortname*: nombre corto del curso.
- *fullname*: nombre completo del curso.
- *category*: número de la categoría en la que queremos que aparezca el curso   
- *summary*: resumen del curso
- *visible*: a 1 si queremos que se cree y aparezca directamente visible.
- *enablecompletion*: a 1 para habilitar tener el ajuste de Finalización de actividad, de gran utilidad en el trabajo con el alumnado.
- *groupmodeforce*: a 1 para forzar el modo grupo en los cursos. 
- *groupmode*: 0 para Sin grupos, 1 para Grupos separados y 2 para Grupos visibles.


Una vez creada la estructura de cursos en el fichero CSV, solicitaremos a través de la plataforma de soporte para Aeducar que suban este fichero a nuestra plataforma, ya que nuestra cuenta de gestión no tiene permisos suficientes para realizar esta acción.

Serán, bien asesorías de CATEDU o bien asesorías del Centro de Profesorado de referencia para nuestro centro educativo (con acceso con perfil de administración a nuestra plataforma), quienes atiendan nuestro ticket de petición de soporte y suban este fichero desde Administración del sitio > Cursos > Subir cursos. 