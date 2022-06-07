---
title: Funciones Comunes
icon: bx bx-radio-circle-marked
order: 1
---

En la creación del CMS se definieron funciones muy importantes para su funcionamiento global, lo que se denomina funciones comunes. En esta página, puede encontrar documentación detallada al respecto.

## is_logged_in

`is_logged_in` — _Comprobar si el usuario ha iniciado sesión_

```php
is_logged_in(): bool
```

#### Parámetros

Esta función no tiene parámetros.

#### Valores Devueltos

Devuelve **true** si el usuario ha iniciado sesión o **false** en caso de error.

#### Ejemplos

```php
if (is_logged_in())
{
    echo 'El usuario ya está logueado';
}
```

## user

`user` — _Obtener todos los datos del usuario o uno específico_

```php
user($column = null, $id = null): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$column** | string\|null | Nombre de columna en la tabla `users` |
| **$id** | int\|null | Id de usuario |

#### Valores Devueltos

Devuelve el **valor de la columna** si se especifica una columna, **null** si no se encuentra el usuario u **object** con todos los datos del usuario.

#### Ejemplos

```php
// Devuelve tu apodo si has iniciado sesión
$user = user('nickname');

// Devuelve un objeto con todos tus datos si estás logueado
$user = user();

// Devuelve el DP del usuario '2' si existe
$user = user('dp', 2);

// Devuelve un objeto con todos los datos del usuario '2' si existe
$user = user(null, 2);
```

## user_id

`user_id` — _Obtener el id del usuario buscando un valor en una columna_

```php
user_id($value, $column = 'username'): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$value** | string | Valor buscado en la columna |
| **$column** | string | Nombre de columna en la tabla `users` |

**Nombres de columna permitidos:**

- `nickname`
- `username`
- `email`

#### Valores Devueltos

Devuelve el **id** del usuario o **null** si no se encuentra el valor buscado.

#### Ejemplos

```php
// Devuelve el id del usuario si existe el username 'nick'
$id = user_id('nick');

// Devuelve el id del usuario si existe el email 'example@domain.tld'
$id = user_id('example@domain.tld', 'email');
```

## user_avatar

`user_avatar` — _Obtener la imagen de avatar de un usuario_

```php
user_avatar($id = null): string
```

::: note NOTA
La diferencia entre obtener el avatar con `user('avatar')` o `user_avatar()` es que este último almacena en caché los datos del avatar.
:::

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$id** | int\|null | Id de usuario |

#### Valores Devueltos

Devuelve el **avatar** del usuario o un string **vacío** si no se encuentra.

#### Ejemplos

```php
// Devuelve tu avatar si estás conectado
echo user_avatar();

// Devuelve el avatar del usuario '2' si existe
echo user_avatar(2);
```

## activity_log

`activity_log` — _Crear un nuevo registro de actividad_

```php
activity_log($action, $message, $data = [], $module = null): bool
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$action** | string | Acción |
| **$message** | string | Mensaje |
| **$data** | array | Array asociativo de datos |
| **$module** | string\|null | Nombre del módulo |

#### Valores Devueltos

Devuelve **true** si se crea el registro o **false** en caso de error.

#### Ejemplos

```php
activity_log('create', 'Added a comment');
```

## require_login

`require_login` — _Requerir que el usuario inicie sesión_

```php
require_login(): void
```

#### Parámetros

Esta función no tiene parámetros.

#### Valores Devueltos

Devuelve una **página de excepción** si el usuario **no** ha iniciado sesión todavía.

#### Ejemplos

```php
require_login();
```

## require_guest

`require_guest` — _Requerir que el usuario no haya iniciado sesión_

```php
require_guest(): void
```

#### Parámetros

Esta función no tiene parámetros.

#### Valores Devueltos

Devuelve una **página de excepción** si el usuario ya inició sesión.

#### Ejemplos

```php
require_guest();
```
