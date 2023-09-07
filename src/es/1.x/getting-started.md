---
title: Empezando
icon: bx bxs-book-open
order: 2
---

Bienvenido, nos alegra que esté interesado en instalar BlizzCMS Plus. Para esto, se le guiará sobre cómo instalar el CMS con diferentes métodos dependiendo de la familiaridad que tenga con ellos.

## Requisitos Previos

Antes de comenzar, asegúrese de tener lo siguiente:

- Servidor web (**Apache**/**Nginx**)
    - Habilitar módulos: mod_headers - mod_rewrite - mod_expires
- **MySQL 5.7+** o **MariaDB 10.6+**
- **PHP 7.4** o más reciente recomendado
    - Habilitar extensiones: curl - gd - gmp - mbstring - mysqli - openssl - soap

::: note
El CMS requiere que tengas preinstalado un servidor de World of Wacraft con sus respectivas bases de datos.
:::

## Instalación Manual

1. Descargue la [última versión v1.x](https://github.com/WoW-CMS/BlizzCMS/releases), y extráigala donde estará la raíz de su sitio.

2. Por último, establezca el permiso `755` para todas las carpetas y el permiso `644` para todos los archivos en la raíz de su sitio

:tada: Ahora abra una pestaña del navegador con su **IP/Dominio** para continuar el proceso de instalación

## Instalación con Git

1. Abra un shell y ejecute los siguientes comandos para clonar el repositorio

    ```bash
    cd directorio-del-sitio

    git clone -b 1.x https://github.com/WoW-CMS/BlizzCMS.git
    ```

2. Por último, establezca el permiso `755` para todas las carpetas y el permiso `644` para todos los archivos en la raíz de su sitio

:tada: Ahora abra una pestaña del navegador con su **IP/Dominio** para continuar el proceso de instalación
