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
- **Composer 2.4+**

::: info INFORMACIÓN
El CMS requiere que tengas preinstalado un servidor wow con sus respectivas bases de datos.
:::

::: danger ADVERTENCIA
Debe tener el **modo estricto** deshabilitado en MySQL/MariaDB a los valores `NO_ZERO_IN_DATE`, `NO_ZERO_DATE` y `STRICT_TRANS_TABLES`. Para verificarlo y deshabilitarlo, puede seguir la siguiente guía [Cómo deshabilitar el modo estricto](../blizzcms/guides/database/disable-strict-mode.md)
:::

Si aún no tienes instalados los requisitos previos, puedes consultar las siguientes guías para instalarlos:

### Guías para Linux

- [Cómo instalar LAMP Stack](../blizzcms/guides/linux/lamp-stack.md)
- [Cómo instalar LEMP Stack](../blizzcms/guides/linux/lemp-stack.md)
- [Cómo instalar Composer](../blizzcms/guides/linux/composer.md)

## Instalación

Elija una de las siguientes formas en las que puede instalar el CMS:

::: tabs#installations

@tab:active Manual

Primero, descarga la [última versión](https://github.com/WoW-CMS/BlizzCMS/releases) y extráela en la carpeta donde estará la raíz de tu sitio.

Luego, dentro del directorio raíz de tu sitio, usa el siguiente comando para instalar las dependencias:

```bash
composer install --no-plugins --no-scripts
```

Por último, establezca el permiso `755` para todas las carpetas y el permiso `644` para los archivos.

:tada: Ahora puedes abrir el navegador con tu **IP/Dominio** para continuar con el proceso de instalación.

@tab Git

Primero, clone el repositorio del CMS con el siguiente comando:

```bash
git clone https://github.com/WoW-CMS/BlizzCMS.git
```

Luego, dentro del directorio recién creado usaremos el siguiente comando para instalar las dependencias:

```bash
composer install --no-plugins --no-scripts
```

Por último, establezca el permiso `755` para todas las carpetas y el permiso `644` para los archivos.

:tada: Ahora puedes abrir el navegador con tu **IP/Dominio** para continuar con el proceso de instalación.

@tab Docker

Primero, clone el repositorio del CMS con el siguiente comando:

```bash
git clone https://github.com/WoW-CMS/BlizzCMS.git
```

Luego, dentro del directorio recién creado, edite el archivo `.env.example` con sus datos y renómbrelo a `.env`

```
APP_NAME=blizzcms
APP_PORT=<Puerto del servidor web>
APP_DB_ADMIN_PORT=<Puerto PHPMyAdmin>
DB_PORT=<Puerto MariaDB>

MYSQL_ROOT_PASS=<Contraseña de root>
MYSQL_USER=<Nuevo usuario>
MYSQL_PASS=<Contraseña de usuario>
MYSQL_DB=<Nombre de la base de datos>
```

A continuación, crea la imagen de Docker con el comando:

```bash
docker-compose build
```

Después de terminar de construir la imagen, inicie el contenedor con el siguiente comando:

```bash
docker-compose up -d
```

Por último, para instalar las dependencias utilice el siguiente comando:

```bash
docker exec -d blizzcms-webserver composer install --no-plugins --no-scripts --no-interaction --no-progress
```

:tada: Ahora puedes abrir el navegador con tu **IP/Dominio** para continuar con el proceso de instalación.

:::
