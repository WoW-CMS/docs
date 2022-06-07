---
title: Template
icon: bx bxs-layout
order: 4
---

Template es una de las librerías integradas que ayuda a crear vistas complejas en el CMS. En esta página, puede encontrar documentación de las funciones disponibles de esta librería.

## title

`$this->template->title()` — _Establecer el título de la página._

```php
$this->template->title(): void
```

#### Parámetros

Esta función no tiene parámetros.

#### Valores Devueltos

Esta función no tiene retornos.

#### Ejemplos

```php
// Mostrará "Blog — BlizzCMS" en la pestaña del navegador
$this->template->title('Blog', 'BlizzCMS');
```

## head_tags

`$this->template->head_tags()` — _Inyectar etiquetas adicionales dentro de la etiqueta head_

```php
$this->template->head_tags($data): void
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$data** | array |  |

::: info INFORMATION
You can add each tag in the format `[tagname, [attributename => attributevalue]]`
:::

#### Valores Devueltos

Esta función no tiene retornos.

#### Ejemplos

```php
// Agregar la etiqueta script dentro de la etiqueta head
$this->template->head_tags([
    ['script', ['src' => '']]
]);

// Agregar la etiqueta link dentro de la etiqueta head
$this->template->head_tags([
    ['link', ['rel' => 'stylesheet', 'href' => '']]
]);

// Agregar la etiqueta meta dentro de la etiqueta head
$this->template->head_tags([
    ['meta', ['name' => 'author', 'content' => 'BlizzCMS']]
]);
```

## body_tags

`$this->template->body_tags()` — _Inyectar etiquetas adicionales dentro de la etiqueta body_

```php
$this->template->body_tags($data): void
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$data** | array |  |

::: info INFORMATION
You can add each tag in the format `[tagname, [attributename => attributevalue]]`
:::

#### Valores Devueltos

Esta función no tiene retornos.

#### Ejemplos

```php
// Agregar la etiqueta script dentro de la etiqueta body
$this->template->body_tags([
    ['script', ['src' => '']]
]);
```

## set_meta_tags

`$this->template->set_meta_tags()` — _Establecer etiquetas meta para SEO_

```php
$this->template->set_meta_tags($names, $default = false): void
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$data** | array | Array asociativo de nombres de etiquetas meta |
| **$default** | bool | Usar datos predeterminados |

#### Valores Devueltos

Esta función no tiene retornos.

#### Ejemplos

```php
// Establecer las metaetiquetas principales dentro de la etiqueta head
$this->template->set_meta_tags([
    'description' => 'This is a meta description',
    'robots'      => 'index, follow'
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
| **$name** | string | A unique name to call in views |
| **$view** | string | View name |
| **$data** | array | Associative array of data |

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
    'message' => 'Hello!'
];

$this->template->build('index', $data);
```
