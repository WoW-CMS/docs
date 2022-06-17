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
- **PHP 7.4** o superior recomendado
    - Habilitar extensiones: bcmath - curl - gd - gmp - intl - mbstring - mysqli - openssl - soap - zip
- **Composer 2.3+**

::: info INFORMACIÓN
El CMS requiere que tengas preinstalado un servidor wow con sus respectivas bases de datos.
:::

Si aún no tienes instalados los requisitos previos, puedes consultar las siguientes guías para instalarlos:

### Guías para Linux

- [Cómo instalar LAMP Stack](../blizzcms/guides/linux/lamp-stack.md)
- [Cómo instalar LEMP Stack](../blizzcms/guides/linux/lemp-stack.md)
- [Cómo instalar Composer](../blizzcms/guides/linux/composer.md)

## Instalación Manual

Si has elegido la opción manual sigue estos sencillos pasos:

### Paso 1: Descargar CMS

Descargue la [última versión](https://github.com/WoW-CMS/BlizzCMS/releases), y extráigalo en la carpeta donde estará la raíz de su sitio web.

### Paso 2: Instalar dependencias

Luego, en la carpeta raíz de su sitio web, use el siguiente comando para instalar las dependencias:

```bash
composer install --no-plugins --no-scripts
```

### Paso 3: Establecer permisos de archivos y carpetas

Le recomendamos encarecidamente que establezca el permiso `755` para todas las carpetas y el permiso `644` para los archivos.

Con este último paso realizado, ahora puede abrir su navegador con su **IP** o **Dominio** para continuar con el proceso de instalación en el CMS.
