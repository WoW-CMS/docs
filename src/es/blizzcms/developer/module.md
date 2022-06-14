---
title: Escribir un módulo
icon: bx bxs-extension
order: 2
---

La siguiente guía explicará en detalle la estructura de un módulo y cómo hacer un nuevo módulo **paso a paso** dependiendo de la dificultad.

## Estructura de un módulo

```
📂 Carpeta del módulo
|── 📂 config
|    |── 🗒️ migration.php
|    |── 🗒️ module.php
|    └── 🗒️ routes.php
|── 📂 controllers
|    └── 🗒️ Module.php
|── 📂 language
|    └── 📂 english
|        └── 🗒️ module_lang.php
|── 📂 migrations
|    └── 🗒️ 20220511000000_create_table.php
|── 📂 models
|    └── 🗒️ Module_model.php
└── 📂 views
     └── 🗒️ index.php
```

- 📂 **config:** Carpeta contenedora de configuraciones.
  - 🗒️ **migration.php:** Archivo de configuración para migraciones.
  - 🗒️ **module.php:** Archivo de configuración que proporciona información del módulo.
  - 🗒️ **routes.php:** Archivo de configuración para enrutamiento URI.
- 📂 **controllers:** Carpeta contenedora de controladores.
- 📂 **language:** Carpeta contenedora de subcarpetas de idioma.
- 📂 **migrations:** Carpeta contenedora de archivos modificadores de base de datos.
- 📂 **models:** Carpeta contenedora de modelos.
- 📂 **views:** Carpeta contenedora de archivos de vista.

::: note NOTE
La estructura proporcionada aquí puede variar según el desarrollador y la cantidad de elementos utilizados.
:::

## Cómo crear un módulo básico?

Para comenzar esta guía, crearemos un módulo con el nombre `example`, el enfoque principal de este módulo será mostrar un mensaje simple. Para ello crearemos la siguiente estructura:

```
📂 example
|── 📂 config
|    └── 🗒️ migration.php  <--- Nuevo archivo vacío
|    └── 🗒️ module.php  <--- Nuevo archivo vacío
|    └── 🗒️ routes.php  <--- Nuevo archivo vacío
|── 📂 controllers
|    └── 🗒️ Example.php  <--- Nuevo archivo vacío
|── 📂 language
|── 📂 migrations
|── 📂 models
└── 📂 views
     └── 🗒️ index.php  <--- Nuevo archivo vacío
```

::: info INFORMACIÓN
El nombre **"example"** del módulo lo puedes cambiar por el que quieras pero ten en cuenta que tendrás que cambiar el nombre en diferentes partes del módulo para que coincida **_(recuerda poner en mayúscula la primera letra en el nombre del controlador)_**.
:::

### Paso 1: Archivo de configuración del módulo

Una vez que hayamos creado la estructura mencionada anteriormente, buscaremos y editaremos el archivo `module.php` en el que escribiremos lo siguiente:

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

return [
    'name'        => 'Example',
    'description' => 'Un módulo básico simple',
    'version'     => '1.0.0',
    'author'      => [
        'name'    => 'WoW-CMS',
        'website' => 'https://wow-cms.com'
    ],
    'dashboard'   => ''
];
```

Este archivo contiene información importante sobre el módulo que luego se utiliza en el CMS.

| Parámetro | Descripción |
| ------- | ------- |
| **name** | Nombre del módulo |
| **description** | Breve descripción del módulo. |
| **version** | Versión del módulo |
| **author name** | Nombre del autor |
| **author website** | Sitio web del autor |
| **dashboard** | Ruta al panel de administración del módulo |

::: warning AVISO
Recuerda cambiar los datos proporcionados en el ejemplo por los tuyos.
:::

### Paso 2: Archivo de configuración de migración

Al finalizar el paso anterior, buscaremos y editaremos el archivo `migration.php` en el cual escribiremos lo siguiente:

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
|--------------------------------------------------------------------------
| Migrations Status
|--------------------------------------------------------------------------
|
| Status of the module's migration functionality. 
| Disabled by default for security reasons.
|
*/
$config['migration_enabled'] = false;

/*
|--------------------------------------------------------------------------
| Migrations Version
|--------------------------------------------------------------------------
|
| Parameter set as the maximum limit to proceed with the
| migration in the module.
| The version use timestamp format: YYYYMMDDHHIISS
|
*/
$config['migration_version'] = 0;

/*
|--------------------------------------------------------------------------
| Migrations Path
|--------------------------------------------------------------------------
|
| Path to the module migrations folder.
|
*/
$config['migration_path'] = '../migrations/';
```
Este archivo de configuración es necesario cuando el módulo requiere entre sus funciones crear/modificar en la base de datos, pero para esta guía no lo utilizaremos, por lo que continuaremos con los pasos.

### Paso 3: Archivo de configuración de rutas

Ahora buscaremos y editaremos el último archivo de configuración `routes.php` en el que escribiremos lo siguiente:

```php{4}
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['example']['get'] = 'example/index';
```

Este archivo de configuración tiene como propósito redirigir las solicitudes a las funciones del controlador. por lo que puede limitarlos a un tipo específico de solicitud o cambiarles el nombre según lo que necesite.

### Paso 4: Archivo de controlador

Habiendo terminado de preparar los archivos en la carpeta config procederemos a buscar y editar el archivo `Example.php` en la carpeta controllers en el cual escribiremos lo siguiente:

```php{10,13,15-17,19}
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Example extends MX_Controller
{
    public function __construct()
    {
        parent::__construct();

        mod_located('example', true);
    }

    public function index()
    {
        $data = [
            'message' => 'Hello world!'
        ];

        $this->template->build('index', $data);
    }
}
```

Este archivo se encarga de determinar cómo deben manejarse las solicitudes HTTP. En el ejemplo, puedes ver que se han marcado varias líneas para explicar su funcionalidad:

- **_Línea 10_:** La línea ubicada dentro de la función \__construct() es una función para verificar si el módulo está instalado, si no, devolverá una página 404.
- **_Línea 13_:** La función principal del controlador que procesará la solicitud.
- **_Líneas 15 a 17_:** Un conjunto de líneas que marcan un array asociativo de datos donde está el mensaje que queremos mostrar.
- **_Línea 19_:** Función de la librería template que toma el archivo de vista **(index.php)** y pasa los datos con un array asociativo **$data**.

### Paso 5: Archivo de vista

Como paso final en esta guía de un módulo básico, procederemos a buscar y editar el archivo `index.php` en la carpeta views en el que escribiremos lo siguiente:

```php{3}
<section class="uk-section uk-section-small primary-bg-section" uk-height-viewport="expand: true">
  <div class="uk-container">
    <h3><?= $message ?></h3>
  </div>
</section>
```

Este archivo mostrará la información al usuario. En el ejemplo, usamos HTML con clases de UIKit 3 y marcamos una sola línea **(Línea 3)** que es donde se mostrará nuestro **'Hello world!'**.

**¡Ya tienes tu primer módulo básico!** Ahora primero ingresa al panel de admin, luego en la sección de módulos busca su nombre e instálalo. Para proceder a verlo ve a `tudominio.tld/example` :tada:

## Cómo crear un módulo avanzado?

::: warning AVISO
Antes de empezar, si aún no has leído la guía sobre [¿cómo crear un módulo básico?](../developer/module.md#como-crear-un-modulo-basico), te recomendamos que la leas para continuar con esta guía avanzada.
:::
