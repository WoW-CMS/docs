---
title: Escribir un tema
icon: bx bxs-palette
order: 3
---

La siguiente guรญa explicarรก en detalle la estructura de un tema y cรณmo crear un nuevo tema **paso a paso**.

## Estructura de un tema

```
๐ Carpeta del tema
|โโ ๐ assets
|    |โโ ๐ css
|    |    โโโ ๐๏ธ theme.css
|    |โโ ๐ images
|    โโโ ๐ js
|โโ ๐ modules
|    โโโ ๐ module
|         โโโ ๐๏ธ view.php
|โโ ๐ views
|    โโโ ๐ layouts
|         โโโ ๐๏ธ layout.php
โโโ ๐๏ธ theme.php
```

- ๐ **assets:** Carpeta contenedora de todos los elementos necesarios que componen un tema.
- ๐ **modules:** Carpeta contenedora de subcarpetas con los nombres de los mรณdulos y sus respectivos archivos de vista para anular los valores predeterminados.
- ๐ **views:** Carpeta contenedora de subcarpetas y archivos que anulan las vistas generales y los layouts.
- ๐๏ธ **theme.php:** Archivo de configuraciรณn que proporciona informaciรณn del tema.

::: note NOTA
La estructura proporcionada aquรญ puede variar segรบn el desarrollador y la cantidad de elementos utilizados.
:::

## Cรณmo crear un tema?

Para comenzar esta guรญa, crearemos un tema con el nombre `example`, el objetivo principal de este tema serรก anular el diseรฑo predeterminado y la vista principal del mรณdulo del usuario. Para ello crearemos la siguiente estructura:

```
example
|โโ ๐ assets
|    โโโ ๐ css
|         โโโ ๐๏ธ example.css  <--- Nuevo archivo vacรญo
|โโ ๐ modules
|    โโโ ๐ user
|         โโโ ๐๏ธ index.php  <--- Nuevo archivo vacรญo
|โโ ๐ views
|     โโโ ๐ layouts
|          โโโ ๐๏ธ layout.php  <--- Nuevo archivo vacรญo
โโโ ๐๏ธ theme.php  <--- Nuevo archivo vacรญo
```

::: info INFORMATION
Puedes cambiar el nombre **"example"** del tema por el que quieras, pero ten en cuenta que tendrรกs que cambiar el nombre en diferentes partes del tema para que coincida.
:::

### Paso 1: Archivo de configuraciรณn del tema

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

Este archivo contiene informaciรณn importante sobre el tema que luego se utiliza en el CMS.

| Parรกmetro | Descripciรณn |
| ------- | ------- |
| **name** | Nombre del tema |
| **version** | Versiรณn del tema |
| **preview** | Ruta de la imagen de vista previa del tema |
| **author name** | Nombre del autor |
| **author website** | Sitio web del autor |

::: warning AVISO
Recuerda cambiar los datos proporcionados en el ejemplo por los tuyos.
:::

### Paso 2: Archivo CSS

El archivo CSS para el tema puede contener la estructura de su tema desde cero o tambiรฉn puede considerarse una anulaciรณn del tema predeterminado para que pueda modificarlo como desee.

Para este tema, solo aplicaremos una anulaciรณn simple a los botones del tema predeterminado. Para ello buscaremos y editaremos el archivo `example.css` en el que escribiremos lo siguiente:

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
Las clases que provienen del tema predeterminado consisten principalmente de UIKit 3, aunque tambiรฉn tiene partes creadas por nosotros, por lo que puede consultar el archivo en `assets/css/default.css` para tener una mejor idea si planea hacer una anulaciรณn.
:::

### Paso 3: Archivo layout

Siguiendo con la creaciรณn de nuestro tema ahora nos centraremos en la parte principal, el archivo llamado layout. Este archivo tiene una estructura que se repetirรก a lo largo de todas las pรกginas. Sabiendo esto buscaremos y editaremos el archivo `layout.php` donde escribiremos lo siguiente que se explicarรก en detalle mรกs adelante.

```php{6-17,21,23-24}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $template['title'] ?></title>
    <link rel="icon" type="image/x-icon" href="<?= $template['location'].'assets/img/favicon.ico' ?>">
    <link rel="stylesheet" href="<?= $template['assets'].'css/uikit.min.css' ?>">
    <link rel="stylesheet" href="<?= $template['assets'].'css/tom-select.uikit.min.css' ?>">
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

Como puede ver en el archivo, las lรญneas utilizadas son etiquetas HTML presentes en todas las pรกginas y su cambio es mรญnimo, por lo que el diseรฑo las contiene, tambiรฉn puede ver lo siguiente:

- **_Lรญnea 6_:** Lรญnea para definir el tรญtulo de la pรกgina.
- **_Lรญnea 7_:** Lรญnea para definir el icono de la pรกgina.
- **_Lรญneas 8, 9 y 12 a 16_:** Un conjunto de lรญneas con recursos generales del tema (UI/Iconos/Etc)
- **_Lรญnea 10_:** Lรญnea que contiene el CSS del tema predeterminado.
- **_Lรญnea 11_:** Lรญnea que contiene nuestro CSS del tema "ejemplo" para anular el predeterminado.
- **_Lรญnea 17_:** Lรญnea utilizada por la librerรญa template para agregar etiquetas al head (meta/scripts/links).
- **_Lรญnea 21_:** Lรญnea utilizada por la librerรญa template para agregar la vista parcial.
- **_Lรญnea 23_:** Lรญnea que contiene el script global.js (Este archivo inicializa tom-select y purecounter).
- **_Lรญnea 24_:** Lรญnea utilizada por la librerรญa template para agregar etiquetas al body (scripts).

::: info INFORMACIรN
Para obtener mรกs informaciรณn sobre la librerรญa template, puede ir [aquรญ](../structure/libraries/template.md).
:::

### Paso 4: Archivo de vista de mรณdulo

Por รบltimo, buscaremos y editaremos el archivo de vista `index.php` en la carpeta `user`, que contendrรก los nuevos cambios que difieren del predeterminado. Para ello escribiremos lo siguiente:

```php
<section class="uk-section uk-section-small primary-bg-section" uk-height-viewport="expand: true">
  <div class="uk-container">
    <h1 class="uk-h1">Esto es un ejemplo</h1>
  </div>
</section>
```

**ยกAhora tienes tu primer tema!** ahora primero ingresa al panel de admin, luego en la secciรณn de apariencia busca su nombre e instรกlalo. Para proceder a verlo ve a `tudominio.tld` :tada:
