---
slug: "/faq/subida-masiva-usuarios"
date: "2017-11-07"
title: "Subir usuarios de forma masiva"
---

Para que el alumnado y el profesorado de nuestro centro puedan trabajar con Aeducar, necesitarán tener una cuenta con la que acceder a la plataforma.

En cada centro, la persona que realice las tareas de gestión de Aeducar será la encargada de la creación de estas cuentas. 

Para poder crear un número elevado de cuentas de usuario a la vez, moodle permite el uso de ficheros CSV. Estos fichero contienen la información de todas las personas que van a ser incorporadas a nuestro Aeducar.

Un fichero CSV podemos abrirlo con un programa de hojas de cálculo y veremos que en cada columna contiene los campos de la información requerida por la plataforma y en cada fila los valores para esos campos de cada una de las personas a incorporar.

Para la carga de alumnado y/o profesorado, nos proporcionarán unas plantillas que simplemente deberemos completar.

Entre los campos a completar para usuarios:

- **username**: nombre de usuario. Debe ser único y no podrá haber dos personas con el mismo username en la plataforma. Usaremos el NIF y en el caso de menores que no lo tengan, el NIF de su madre o padre seguido del orden que ocupa entre sus hermanos en el centro.
- **password**: campo que permite asignar contraseña a cada usuario en el momento de la carga de este archivo. Asignaremos de inicio Cambiame1!(por e y en la subida del archivo indicaremos que se fuerce al cambio de contraseña tras el primer acceso. 
- **firstname**: nombre de la persona.
- **lastname**: apellidos.
- **email**: dirección de correo electrónico. En caso de ser un menor, se podrá aportar la dirección de correo electrónico de una de las personas adultas de la familia. En caso de no disponer de correo electrónico, se  le asignará el proporcionado desde el equipo de Aeducar a este efecto.
- **course1**: nombre corto de un curso en el que queremos que participe. Los cursos deberán existir previamente. 
- **role1**: es un campo opcional, para poder especificar el rol con el que se matricula en ese curso (student, editingteacher). Si no usamos este campo, por defecto se matricularán como estudiantes. 
- **course2...courseN**: otra columna para cada uno del resto de cursos en los que va a participar esta persona.

Una vez hayamos preparado este fichero CSV, la carga de los usuarios es un proceso muy sencillo. Iremos a la opción Subir Usuarios y solo tendremos que seleccionar nuestro fichero CSV y cargarlo. 

![](/assets/subir-usuarios-1.png)

![](/assets/subir-usuarios-2.png)


Nos aseguramos que como Delimitador CSV hemos elegido la coma (,) y que vamos a previsualizar un número de filas antes de que se proceda a la carga. Después pulsamos Subir usuarios.
Una vez hayamos pulsado en Subir usuarios, nos llevará a la página de previsualización donde además de ver el listado de usuarios a cargar, debajo de este listado nos aparecerá una serie de configuraciones donde deberemos dejar los siguientes valores en los siguientes ajustes antes de pulsar Subir archivo:

- Contraseña de nuevo usuario: campo requerido en el archivo
- Estandarizar nombre de usuario: No

![](/assets/subir-usuarios-3.png)

Una vez finalizado este proceso podremos comprobar desde Administración del sitio >> Usuarios >> Examinar lista de usuarios que se han incorporado correctamente en nuestra plataforma Aeducar. 
