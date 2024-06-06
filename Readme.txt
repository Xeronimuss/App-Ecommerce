Introducción
Este proyecto es una aplicación de e-commerce que permite a los usuarios navegar por diferentes categorías de productos, añadir productos al carrito y gestionar su cuenta. La aplicación está construida utilizando React y Tailwind CSS, y se integra con una API falsa (fakestoreapi.com) para obtener los datos de los productos. Además, se utiliza MongoDB para almacenar la información de autenticación del usuario.

En la carpeta de frontend guardo la aplicación de react, todo lo que es visible para el usuario esta ahí.
En la carpeta de backend manejo la gestión de los usuarios, almacenar su información, definición del modelo de usuario (user.js), 
las rutas de autenticación que manejan las solicitudes de inicio de sesión (auth.js)
Y el servidor (server.js) configura la conexión a MongoDB y define las rutas de la api.

Dependencias
Las siguientes dependencias son necesarias para ejecutar este proyecto:

React: Biblioteca de JavaScript para construir interfaces de usuario.
React Router: Utilizado para la navegación dentro de la aplicación.
Tailwind CSS: Framework de CSS para diseñar la interfaz de usuario.
Axios: Cliente HTTP para realizar solicitudes a la API.
React Icons: Biblioteca de íconos para mejorar la UI.
React Context: Para manejar la autenticación del usuario.
MongoDB: Base de datos NoSQL utilizada para almacenar la información de autenticación.
Express: Framework de Node.js para construir el servidor backend.
Mongoose: Biblioteca de modelado de datos de MongoDB para Node.js.
bcrypt: Biblioteca para el hashing de contraseñas.
jsonwebtoken: Biblioteca para la autenticación basada en tokens.

Configuración de Tailwind CSS
El proyecto utiliza Tailwind CSS para los estilos. La configuración se encuentra en el archivo tailwind.config.js y postcss.config.js. Para personalizar los estilos, puedes modificar estos archivos según tus necesidades.

Autenticación
La autenticación de usuario se maneja utilizando el contexto de React (AuthContext). Este contexto proporciona el estado de autenticación y funciones para iniciar y cerrar sesión. Los datos de autenticación se almacenan en MongoDB.

Instalaciones
Para empezar a trabajar con el proyecto, asegúrate de tener Node.js y npm instalados. Luego, clona el repositorio y ejecuta los siguientes comandos para instalar las dependencias:

git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
npm install


Para conectar con la base de datos de MongoDB se hace lo siguiente:

cd backend
node server

Para iniciar la aplicacion de react:

cd frontend
npm run dev

Cómo Usar la Aplicación
Inicio de Sesión: El usuario debe iniciar sesión para acceder a la tienda o bien registrarse.
Navegar por Categorías: Utiliza la barra de navegación para acceder a las diferentes categorías de productos.
Agregar al Carrito: Los productos pueden ser añadidos al carrito desde las páginas de categoría.
Cerrar Sesión: El usuario puede cerrar sesión utilizando el botón de logout en la barra de navegación.

Conclusión
Este proyecto de e-commerce proporciona una base sólida para construir una tienda en línea con React, Tailwind CSS, y MongoDB. 
Con una estructura clara y una funcionalidad básica implementada, es fácilmente extensible para agregar más características y personalizar según las necesidades del negocio.

