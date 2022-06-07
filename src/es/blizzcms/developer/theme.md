---
title: Escribir un tema
icon: bx bxs-palette
order: 3
---

La siguiente guía explicará en detalle la estructura de un tema y cómo crear un nuevo tema **paso a paso**.

## Estructura de un tema

```
📂 Carpeta del tema
|── 📂 assets
|    |── 📂 css
|    |    └── 🗒️ theme.css
|    |── 📂 images
|    └── 📂 js
|── 📂 modules
|    └── 📂 module
|         └── 🗒️ view.php
|── 📂 views
|    └── 📂 layouts
|         └── 🗒️ layout.php
└── 🗒️ theme.php
```

- 📂 **assets:** Carpeta contenedora de todos los elementos necesarios que componen un tema.
- 📂 **modules:** Carpeta contenedora de subcarpetas con los nombres de los módulos y sus respectivos archivos de vista para anular los valores predeterminados.
- 📂 **views:** Carpeta contenedora de subcarpetas y archivos que anulan las vistas generales y los layouts.
- 🗒️ **theme.php:** Archivo de configuración que proporciona información del tema.

::: note NOTA
La estructura proporcionada aquí puede variar según el desarrollador y la cantidad de elementos utilizados.
:::

## Cómo crear un tema?

Para comenzar esta guía, crearemos un tema con el nombre **"example"**, el objetivo principal de este tema será anular el diseño predeterminado y la vista principal del módulo del usuario. Para ello crearemos la siguiente estructura:

```
example
|── 📂 assets
|    └── 📂 css
|         └── 🗒️ example.css  <--- Nuevo archivo vacío
|── 📂 modules
|    └── 📂 user
|         └── 🗒️ index.php  <--- Nuevo archivo vacío
|── 📂 views
|     └── 📂 layouts
|          └── 🗒️ layout.php  <--- Nuevo archivo vacío
└── 🗒️ theme.php  <--- Nuevo archivo vacío
```

::: info INFORMATION
Puedes cambiar el nombre **"example"** del tema por el que quieras, pero ten en cuenta que tendrás que cambiar el nombre en diferentes partes del tema para que coincida.
:::

### Paso 1: Archivo de configuración del tema

Una vez que hayamos creado la estructura mencionada anteriormente, buscaremos y editaremos el archivo `theme.php` en el que escribiremos lo siguiente:

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

return [
    'name'    => 'Example',
    'version' => '1.0.0',
    'preview' => '',
    'author'  => [
        'name'    => 'WoW-CMS',
        'website' => 'https://wow-cms.com'
    ]
];
```

Este archivo contiene información importante sobre el tema que luego se utiliza en el CMS.

| Parámetro | Descripción |
| ------- | ------- |
| **name** | Nombre del tema |
| **version** | Versión del tema |
| **preview** | Ruta de la imagen de vista previa del tema |
| **author name** | Nombre del autor |
| **author website** | Sitio web del autor |

::: warning AVISO
Recuerda cambiar los datos proporcionados en el ejemplo por los tuyos.
:::

### Paso 2: Archivo CSS

El archivo CSS para el tema puede contener la estructura de su tema desde cero o también puede considerarse una anulación del tema predeterminado para que pueda modificarlo como desee.

Para este tema, solo aplicaremos una anulación simple a los botones del tema predeterminado. Para ello buscaremos y editaremos el archivo `example.css` en el que escribiremos lo siguiente:

```css
.uk-button-default {
  background: #d84500;
  border: 1px solid #ff5200;
  color: #fff;
}

.uk-button-default:hover {
  background: #ff5200;
  border-color: #ff5200;
  color: #fff;
}

.uk-button-default.uk-active,
.uk-button-default:active {
  background: #ff5200;
  border-color: #ff5200;
  color: #fff;
}
```

::: info INFORMATION
Las clases que provienen del tema predeterminado consisten principalmente de UIKit 3, aunque también tiene partes creadas por nosotros, por lo que puede consultar el archivo en `assets/css/default.css` para tener una mejor idea si planea hacer una anulación.
:::

### Paso 3: Archivo layout

Siguiendo con la creación de nuestro tema ahora nos centraremos en la parte principal, el archivo llamado layout. Este archivo tiene una estructura que se repetirá a lo largo de todas las páginas. Sabiendo esto buscaremos y editaremos el archivo `layout.php` donde escribiremos lo siguiente que se explicará en detalle más adelante.

```php{6-17,21,23-24}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $template['title'] ?></title>
    <link rel="icon" type="image/x-icon" href="<?= $template['location'].'assets/img/favicon.ico' ?>">
    <link rel="stylesheet" href="<?= $template['assets'].'css/uikit.min.css' ?>">
    <link rel="stylesheet" href="<?= $template['assets'].'css/tom-select.uikit.css' ?>">
    <link rel="stylesheet" href="<?= $template['assets'].'css/default.css' ?>">
    <link rel="stylesheet" href="<?= $template['location'].'assets/css/example.css' ?>">
    <script src="<?= $template['assets'].'js/uikit.min.js' ?>"></script>
    <script src="<?= $template['assets'].'js/uikit-icons.min.js' ?>"></script>
    <script src="<?= $template['assets'].'js/purecounter.js' ?>"></script>
    <script src="<?= $template['assets'].'js/tom-select.complete.min.js' ?>"></script>
    <script src="<?= $template['assets'].'fontawesome/js/all.min.js' ?>" defer></script>
    <?= $template['head_tags'] ?>
  </head>
  <body>

    <?= $template['body'] ?>

    <script src="<?= $template['assets'].'js/global.js' ?>"></script>
    <?= $template['body_tags'] ?>
  </body>
</html>
```

Como puede ver en el archivo, las líneas utilizadas son etiquetas HTML presentes en todas las páginas y su cambio es mínimo, por lo que el diseño las contiene, también puede ver lo siguiente:

- **_Línea 6_:** Línea para definir el título de la página.
- **_Línea 7_:** Línea para definir el icono de la página.
- **_Líneas 8, 9 y 12 a 16_:** Un conjunto de líneas con recursos generales del tema (UI/Iconos/Etc)
- **_Línea 10_:** Línea que contiene el CSS del tema predeterminado.
- **_Línea 11_:** Línea que contiene nuestro CSS del tema "ejemplo" para anular el predeterminado.
- **_Línea 17_:** Línea utilizada por la librería template para agregar etiquetas al head (meta/scripts/links).
- **_Línea 21_:** Línea utilizada por la librería template para agregar la vista parcial.
- **_Línea 23_:** Línea que contiene el script global.js (Este archivo inicializa tom-select y purecounter).
- **_Línea 24_:** Línea utilizada por la librería template para agregar etiquetas al body (scripts).

::: info INFORMACIÓN
Para obtener más información sobre la librería template, puede ir [aquí](../structure/libraries/template.md).
:::

### Paso 4: Archivo de vista de módulo

Por último, buscaremos y editaremos el archivo de vista `index.php` en la carpeta `user`, que contendrá los nuevos cambios que difieren del predeterminado. Para ello escribiremos lo siguiente:

```php
<section class="uk-section uk-section-small primary-bg-section" uk-height-viewport="expand: true">
  <div class="uk-container">
    <h1 class="uk-h1">Esto es un ejemplo</h1>
  </div>
</section>
```

**¡Ahora tienes tu primer tema!** ahora primero ingresa al panel de admin, luego en la sección de apariencia busca su nombre e instálalo. Para proceder a verlo ve a `tudominio.tld` :tada:
