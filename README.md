primer paso:
primero crear la base de datos llamada: "veterinaria" y su esquema llamado "public"


segundo paso:
ejecutar el comando "npm install"

crear el archivo .env y copiar y pegar lo siguiente en el archivo:
JWT_SECRET="your_jwt_secret_key"


para poder usar el sistema ingrese el usuario siguiente de forma manual en el gestor de base de datos.

INSERT INTO public.usuario
(nombre, usuario, contraseña, esta_activo)
VALUES('Jorge Arturo', 'jorge123', '$2b$10$iqH36EON95qwFHaq0rbN6uI4oaDW0vcPpigbwaBrNhuOzJhJ2BwO6', true);

para poder correrlo todo de una les deje un archivo .sql

y el backend corre con este comando:

npm run start:dev