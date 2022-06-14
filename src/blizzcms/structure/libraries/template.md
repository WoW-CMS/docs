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
// Will show "Blog — BlizzCMS" in the browser tab
$this->template->title('Blog', 'BlizzCMS');
```

## head_tags

`$this->template->head_tags()` — _Inject additional tags inside the head tag_

```php
$this->template->head_tags($data): void
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$data** | array |  |

::: info INFORMATION
You can add each tag using the format `[tagname, [attributename => attributevalue]]`
:::

#### Return Values

This function has no returns.

#### Examples

```php
// add the script tag inside the head tag
$this->template->head_tags([
    ['script', ['src' => '']]
]);

// add the link tag inside the head tag
$this->template->head_tags([
    ['link', ['rel' => 'stylesheet', 'href' => '']]
]);

// add the meta tag inside the head tag
$this->template->head_tags([
    ['meta', ['name' => 'author', 'content' => 'BlizzCMS']]
]);
```

## body_tags

`$this->template->body_tags()` — _Inject additional tags inside the body tag_

```php
$this->template->body_tags($data): void
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$data** | array |  |

::: info INFORMATION
You can add each tag using the format `[tagname, [attributename => attributevalue]]`
:::

#### Return Values

This function has no returns.

#### Examples

```php
// Add the script tag inside the body tag
$this->template->body_tags([
    ['script', ['src' => '']]
]);
```

## set_meta_tags

`$this->template->set_meta_tags()` — _Set meta tags for SEO_

```php
$this->template->set_meta_tags($names, $default = false): void
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$data** | array | Associative array of meta tag names |
| **$default** | bool | Use default data |

#### Return Values

This function has no returns.

#### Examples

```php
// Set the main meta tags to the head
$this->template->set_meta_tags([
    'description' => 'This is a meta description',
    'robots'      => 'index, follow'
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
| **$name** | string | A unique name to call in views |
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
