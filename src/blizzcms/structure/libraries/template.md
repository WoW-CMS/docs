---
title: Template
icon: bx bxs-layout
order: 1
---

Template is one of the integrated libraries that helps to create complex views in the CMS. On this page, you can find documentation of the available functions of this library.

## title

`$this->template->title()` — _Set the title of the page_

```php
$this->template->title(): void
```

#### Parameters

This function has no parameters.

#### Return Values

This function has no returns.

#### Examples

```php
// The site will show "Blog — BlizzCMS" as the title
$this->template->title('Blog', 'BlizzCMS');
```

## add_meta

`$this->template->add_meta()` — _Include a meta in the header_

```php
$this->template->add_meta($name, $content, $type = 'name'): void
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$name** | string |  |
| **$content** | string |  |
| **$type** | string |  |

#### Return Values

This function has no returns.

#### Examples

```php
$this->template->add_meta('author', 'BlizzCMS');
```

## add_css

`$this->template->add_css()` — _Include a CSS file in the header_

```php
$this->template->add_css($href): void
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$href** | string |  |

#### Return Values

This function has no returns.

#### Examples

```php
$this->template->add_css('https://example.com/assets/css/example.css');
```

## add_js

`$this->template->add_js()` — _Include a JS file in the header/body_

```php
$this->template->add_js($src, $position = 'body'): void
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$src** | string\|array |  |
| **$position** | string | Position in the template in which the JS files will be added |

#### Return Values

This function has no returns.

#### Examples

```php
// Add a JS file inside <body>
$this->template->add_js('https://example.com/assets/js/example.js');

// Add a JS file with the attribute "defer" inside <head>
$this->template->add_js(['src' => 'https://example.com/assets/js/example.js', 'defer' => null], 'head');
```

## set_seo_metas

`$this->template->set_seo_metas()` — _Set SEO Metas of the page_

```php
$this->template->set_seo_metas($metas): void
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$metas** | array | Associative array of name/content for SEO tags |

**Available names:**

- `title`
- `description`
- `robots`
- `type` (Open Graph Tag)
- `url` (Open Graph Tag)
- `image` (Open Graph Tag)

#### Return Values

This function has no returns.

#### Examples

```php
$this->template->set_seo_metas([
    'title'       => 'New page',
    'description' => 'This is a page description',
    'robots'      => 'index, follow',
    'type'        => 'article',
    'url'         => 'https://example.com/'
]);
```

## set_partial

`$this->template->set_partial()` — _Set a view partial_

```php
$this->template->set_partial($name, $view, $data = []): void
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$name** | string | Unique name to call in views |
| **$view** | string | View name |
| **$data** | array | Associative array of data |

#### Return Values

This function has no returns.

#### Examples

```php
$this->template->set_partial('alerts', 'static/alerts');
```

## build

`$this->template->build()` — _Build the entire HTML combining partials, layouts and views_

```php
$this->template->build($view, $data = [], $return = false): void
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$view** | string | View name |
| **$data** | array | Associative array of data |
| **$return** | bool |  |

#### Return Values

This function has no returns.

#### Examples

```php
$data = [
    'message' => 'Hello!'
];

$this->template->build('index', $data);
```
