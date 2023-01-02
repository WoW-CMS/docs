---
title: Cómo traducir a otro idioma
icon: bx bx-radio-circle-marked
order: 1
---

La siguiente guía explicará cómo traducir el CMS a su propio idioma si no está en la lista de idiomas soportados.

## Paso 1: Duplicar carpeta

El idioma predeterminado del CMS es **Inglés** (English), por lo que tendrás que hacer una copia de la carpeta de ese idioma y traducir los archivos que contiene. La carpeta se puede encontrar en la siguiente ruta `application/languages`.

Luego, debe cambiar el nombre de la carpeta copiada con el nuevo nombre de **idioma**, este debe **coincidir** con los nombres de los idiomas soportados por CodeIgniter 3, para obtener más información puede ver la siguiente lista:

::: details Lista de nombres de idiomas soportados
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

## Paso 2: Editar archivo language

Para que el CMS detecte el nuevo idioma, deberá editar el archivo `language.php` dentro de la nueva carpeta.

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

return [
    'locale' => 'en',
    'name'   => 'English'
];
```

Deberás cambiar los parámetros con los del nuevo idioma.

| Parámetro | Descripción |
| ------- | ------- |
| **locale** | Código de lenguaje (ISO 639) |
| **name** | Nombre del lenguaje |

## Paso 3: Traducir otras secciones

Para traducir las otras secciones del CMS, como el administrador, el usuario o un módulo custom. debes ir a la ruta `application/modules/<module>/languages` en la cual deberás hacer lo mismo que en el **Paso 1**.
