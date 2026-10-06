-- ============================================================
-- Configuración inicial - Veterinaria
-- Base de datos: veterinaria
-- ============================================================

-- 1. Crear la base de datos
CREATE DATABASE veterinaria;

-- IMPORTANTE:
-- Después de crear la base de datos, conéctate a "veterinaria"
-- antes de ejecutar las siguientes instrucciones.
--
-- En psql puedes usar:
-- \connect veterinaria


-- 2. Crear el esquema public si no existe
CREATE SCHEMA IF NOT EXISTS public;


-- 3. Insertar el usuario inicial del sistema
-- La tabla public.usuario debe existir antes de ejecutar este INSERT.

INSERT INTO public.usuario
    (nombre, usuario, "contraseña", esta_activo)
VALUES
    (
        'Jorge Arturo',
        'jorge123',
        '$2b$10$iqH36EON95qwFHaq0rbN6uI4oaDW0vcPpigbwaBrNhuOzJhJ2BwO6',
        true
    );
