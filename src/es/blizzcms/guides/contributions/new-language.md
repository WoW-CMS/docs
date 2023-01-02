---
title: Cómo traducir el CMS a otro idioma
icon: bx bxs-user-voice
order: 1
---

La siguiente guía explicará cómo traducir el CMS a su propio idioma si no está en la lista de idiomas soportados.

## Paso 1: Hacer una copia de carpeta y cambiarle el nombre

El idioma predeterminado del CMS es el **English**, por lo que tendrás que hacer una copia de la carpeta de ese idioma y traducir los archivos que contiene. La carpeta se puede encontrar en la siguiente ruta `application/languages`.

Luego debes renombrar la carpeta copiada con el nombre del **nuevo idioma**, este debe **coincidir** con los idiomas soportados por CodeIgniter 3, para más información puedes ver la siguiente lista de nombres:

::: details Nombres de idiomas soportados por CodeIgniter 3
- arabic
- armenian
- azerbaijani
- basque
- bengali
- bosnian
- bulgarian
- catalan
- croatian
- czech
- danish
- dutch
- english
- filipino
- finnish
- french
- german
- greek
- gujarati
- hindi
- hungarian
- indonesian
- italian
- japanese
- khmer
- korean
- latvian
- lithuanian
- marathi
- norwegian
- persian
- polish
- portuguese
- portuguese-brazilian
- romanian
- russian
- serbian
- simplified-chinese
- slovak
- slovenian
- spanish
- swedish
- tamil
- thai
- traditional-chinese
- turkish
- ukrainian
- urdu
- vietnamese
:::

## Paso 2: Edite el archivo de configuración de idioma

Para que el CMS detecte el nuevo idioma, deberá editar el archivo `language.php` dentro de la carpeta del nuevo idioma.

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

return [
    'locale' => 'en',
    'name'   => 'English'
];
```

Debe cambiar los parámetros con los del nuevo idioma que desea agregar.

| Parámetro | Descripción |
| ------- | ------- |
| **locale** | Código de lenguaje (ISO 639) |
| **name** | Nombre del lenguaje |

## Paso 3: Traducir otras partes del CMS

Para traducir las otras partes del CMS, como el administrador, el usuario o un módulo personalizado. debes ir a la ruta `application/modules/<module>/languages` en la cual deberás hacer lo mismo que en el **Paso 1**.
