---
title: Template
icon: bx bxs-layout
order: 1
---

Template es una de las librerías integradas que ayuda a crear vistas complejas en el CMS. En esta página, puede encontrar documentación de las funciones disponibles de esta librería.

## title

`$this->template->title()` — _Establecer el título de la página_

```php
$this->template->title(): void
```

#### Parámetros

Esta función no tiene parámetros.

#### Valores Devueltos

Esta función no tiene retornos.

#### Ejemplos

```php
// El sitio mostrará "Blog — BlizzCMS" como título
$this->template->title('Blog', 'BlizzCMS');
```

## add_meta

`$this->template->add_meta()` — _Incluir un meta en el header_

```php
$this->template->add_meta($name, $content, $type = 'name'): void
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$name** | string |  |
| **$content** | string |  |
| **$type** | string |  |

#### Valores Devueltos

Esta función no tiene retornos.

#### Ejemplos

```php
$this->template->add_meta('author', 'BlizzCMS');
```

## add_css

`$this->template->add_css()` — _Incluir un archivo CSS en el header_

```php
$this->template->add_css($href): void
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$href** | string |  |

#### Valores Devueltos

Esta función no tiene retornos.

#### Ejemplos

```php
$this->template->add_css('https://example.com/assets/css/example.css');
```

## add_js

`$this->template->add_js()` — _Incluir un archivo JS en el header/body_

```php
$this->template->add_js($src, $position = 'body'): void
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$src** | string\|array |  |
| **$position** | string | Posición en la plantilla en la que se agregarán los archivos JS |

#### Valores Devueltos

Esta función no tiene retornos.

#### Ejemplos

```php
// Agregar un archivo JS dentro del <body>
$this->template->add_js('https://example.com/assets/js/example.js');

// Agregar un archivo JS con el atributo "defer" dentro de <head>
$this->template->add_js(['src' => 'https://example.com/assets/js/example.js', 'defer' => null], 'head');
```

## set_seo_metas

`$this->template->set_seo_metas()` — _Establecer Metas SEO de la página_

```php
$this->template->set_seo_metas($metas): void
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$metas** | array | Array asociativo de nombre/contenido para etiquetas SEO |

**Nombres disponibles:**

- `title`
- `description`
- `robots`
- `type` (Etiqueta de Open Graph)
- `url` (Etiqueta de Open Graph)
- `image` (Etiqueta de Open Graph)

#### Valores Devueltos

Esta función no tiene retornos.

#### Ejemplos

```php
$this->template->set_seo_metas([
    'title'       => 'Nueva pagina',
    'description' => 'Esta es una descripción de la página.',
    'robots'      => 'index, follow',
    'type'        => 'article',
    'url'         => 'https://example.com/'
]);
```

## set_partial

`$this->template->set_partial()` — _Establecer una vista parcial_

```php
$this->template->set_partial($name, $view, $data = []): void
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$name** | string | Nombre único para llamar en las vistas |
| **$view** | string | Nombre de la vista |
| **$data** | array | Array asociativo de datos |

#### Valores Devueltos

Esta función no tiene retornos.

#### Ejemplos

```php
$this->template->set_partial('alerts', 'static/alerts');
```

## build

`$this->template->build()` — _Construir todo el HTML combinando partials, layouts y views_

```php
$this->template->build($view, $data = [], $return = false): void
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$view** | string | Nombre de la vista |
| **$data** | array | Array asociativo de datos |
| **$return** | bool |  |

#### Valores Devueltos

Esta función no tiene retornos.

#### Ejemplos

```php
$data = [
    'message' => 'Hola!'
];

$this->template->build('index', $data);
```
