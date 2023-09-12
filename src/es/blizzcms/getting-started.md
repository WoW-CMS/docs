---
title: Empezando
icon: bx bxs-book-open
order: 2
---

Bienvenido, nos alegra que esté interesado en instalar BlizzCMS. Para esto, se le guiará sobre cómo instalar el CMS con diferentes métodos dependiendo de la familiaridad que tenga con ellos.

## Requisitos Previos

Antes de comenzar, asegúrese de tener lo siguiente:

- Servidor web (**Apache**/**Nginx**)
    - Habilitar módulos: mod_headers - mod_rewrite
- **MySQL 5.7+** o **MariaDB 10.6+**
- **PHP 7.4** o más reciente recomendado
    - Habilitar extensiones: bcmath - curl - gd - gmp - mbstring - mysqli - openssl - soap - zip
- **Composer 2.6+**

::: note
El CMS requiere que tengas preinstalado un servidor de World of Wacraft con sus respectivas bases de datos.
:::

::: warning
Debe tener el **modo estricto** deshabilitado en MySQL/MariaDB a los valores `NO_ZERO_IN_DATE`, `NO_ZERO_DATE` y `STRICT_TRANS_TABLES`. Para verificarlo y deshabilitarlo, puede seguir la siguiente guía [Cómo deshabilitar el modo estricto](../blizzcms/guides/database/disable-strict-mode.md)
:::

Si aún no tienes instalados los requisitos previos, puedes consultar las siguientes guías para instalarlos:

### Guías para Linux

- [Cómo instalar LAMP Stack](../blizzcms/guides/linux/lamp-stack.md)
- [Cómo instalar LEMP Stack](../blizzcms/guides/linux/lemp-stack.md)
- [Cómo instalar Composer](../blizzcms/guides/linux/composer.md)

## Instalación Manual

1. Descargue la [última versión](https://github.com/WoW-CMS/BlizzCMS/releases), y extráigala donde estará la raíz de su sitio.

2. Abra un shell y ejecute los siguientes comandos para instalar las dependencias

    ```bash
    cd directorio-del-sitio

    composer install --no-plugins --no-scripts
    ```

3. Por último, establezca el permiso `755` para todas las carpetas y el permiso `644` para todos los archivos en la raíz de su sitio

:tada: Ahora abra una pestaña del navegador con su **IP/Dominio** para continuar el proceso de instalación

## Instalación con Git

1. Abra un shell y ejecute los siguientes comandos para clonar el repositorio

    ```bash
    cd directorio-del-sitio

    git clone https://github.com/WoW-CMS/BlizzCMS.git
    ```

2. Ejecute el siguiente comando para instalar las dependencias

    ```bash
    composer install --no-plugins --no-scripts
    ```

3. Por último, establezca el permiso `755` para todas las carpetas y el permiso `644` para todos los archivos en la raíz de su sitio

:tada: Ahora abra una pestaña del navegador con su **IP/Dominio** para continuar el proceso de instalación

## Instalación con Docker

1. Abra un shell y ejecute los siguientes comandos para clonar el repositorio

    ```bash
    cd directorio-del-sitio

    git clone https://github.com/WoW-CMS/BlizzCMS.git
    ```

2. Edite el archivo `.env.example` con sus datos y renómbrelo a `.env`

    ```
    APP_NAME=blizzcms
    APP_PORT=<Puerto del servidor web>
    APP_DB_ADMIN_PORT=<Puerto de PHPMyAdmin>
    DB_PORT=<Puerto de MariaDB>

    MYSQL_ROOT_PASS=<Contraseña de root>
    MYSQL_USER=<Nuevo usuario>
    MYSQL_PASS=<Contraseña de usuario>
    MYSQL_DB=<Nombre de la base de datos>
    ```

3. Ejecute el siguiente comando para construir la imagen de docker

    ```bash
    docker-compose build
    ```

4. Después de terminar de construir la imagen, ejecute el siguiente comando para iniciar el contenedor

    ```bash
    docker-compose up -d
    ```

5. Por último, ejecute el siguiente comando para instalar las dependencias

    ```bash
    docker exec -d blizzcms-webserver composer install --no-plugins --no-scripts --no-interaction --no-progress
    ```

:tada: Ahora abra una pestaña del navegador con su **IP/Dominio** para continuar el proceso de instalación
