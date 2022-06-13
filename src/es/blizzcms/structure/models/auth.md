---
title: Modelo Auth
icon: bx bx-radio-circle-marked
order: 1
---

El modelo auth es un modelo esencial para conectarse a la base de datos auth del servidor. En esta página, puede encontrar documentación de las funciones disponibles de este modelo.

## connect

`$this->auth->connect()` — _Conectarse a la base de datos auth_

```php
$this->auth->connect(): object
```

#### Parámetros

Esta función no tiene parámetros.

#### Valores Devueltos

Devuelve un **object** para conectarse a la base de datos auth.

#### Ejemplos

```php
$auth = $this->auth->connect();

// Devuelve la cantidad de baneos activos
$count = $auth->from('account_banned')
    ->where('active', 1)
    ->count_all_results();
```

## account

`$this->auth->account()` — _Obtener cuenta_

```php
$this->auth->account($id): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$id** | int | Id de cuenta |

#### Valores Devueltos

Devuelve un **object** con todos los datos de la cuenta o **null** si no existe.

#### Ejemplos

```php
// Devuelve los datos de la cuenta si existe el id '1'
$account = $this->auth->account(1);
```

## account_id

`$this->auth->account_id()` — _Obtener el id de la cuenta buscando un valor en una columna_

```php
$this->auth->account_id($value, $column = 'username'): int
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$value** | string | Valor buscado en la columna |
| **$column** | string | Nombre de columna en la tabla `account` |

**Allowed column names:**

- `username`
- `email`

#### Valores Devueltos

Devuelve **id** de cuenta o **0** si no se encuentra el valor buscado.

#### Ejemplos

```php
// Devuelve el id de la cuenta si existe el nombre de usuario 'nick'
$id = $this->auth->account_id('nick');

// Devuelve el id de la cuenta si existe el correo electrónico 'example@domain.tld'
$id = $this->auth->account_id('example@domain.tld', 'email');
```

## account_exists

`$this->auth->account_exists()` — _Comprobar si existe una cuenta con un valor de columna_

```php
$this->auth->account_exists($value, $column = 'username'): bool
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$value** | string | Valor buscado en la columna |
| **$column** | string | Nombre de columna en la tabla `account` |

**Nombres de columna permitidos:**

- `username`
- `email`

#### Valores Devueltos

Devuelve **true** si el valor de la columna existe o **false** en caso de error.

#### Ejemplos

```php
if ($this->auth->account_exists('emina'))
{
    echo 'La cuenta con el nombre de usuario emina existe';
}
```

## account_gmlevel

`$this->auth->account_gmlevel()` — _Obtener el gmlevel de una cuenta_

```php
$this->auth->account_gmlevel($id = null): int
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$id** | int\|null | Id de cuenta |

#### Valores Devueltos

Devuelve el **gmlevel** de una cuenta o **0** si no tiene asignado.

#### Ejemplos

```php
// Devuelve el gmlevel de su cuenta si ha iniciado sesión
$gmlevel = $this->auth->account_gmlevel();

// Devuelve el gmlevel de la cuenta '1'
$gmlevel = $this->auth->account_gmlevel(1);
```

## is_banned

`$this->auth->is_banned()` — _Comprobar si una cuenta está baneada_

```php
$this->auth->is_banned($id = null): bool
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$id** | int\|null | Id de cuenta |

#### Valores Devueltos

Devuelve **true** si la cuenta está baneada o **false** en caso de error.

#### Ejemplos

```php
if ($this->auth->is_banned())
{
    echo 'Tu cuenta está baneada';
}

if ($this->auth->is_banned(1))
{
    echo 'La cuenta 1 está baneada';
}
```
