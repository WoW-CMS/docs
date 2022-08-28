---
title: Modelo Server Characters
icon: bx bx-radio-circle-marked
order: 2
---

El modelo server characters es un modelo esencial para conectarse a la base de datos characters del servidor. En esta página, puede encontrar documentación de las funciones disponibles de este modelo.

## connect

`$this->server_characters->connect()` — _Conectarse a la base de datos characters_

```php
$this->server_characters->connect($realm): object
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$realm** | int | Id de reino |

#### Valores Devueltos

Devuelve un **object** para conectarse a la base de datos character.

#### Ejemplos

```php
$characters = $this->server_characters->connect(1);

// Devuelve el número de personajes cuya raza es humana
$count = $characters->from('characters')
    ->where('race', 1)
    ->count_all_results();
```

## character

`$this->server_characters->character()` — _Obtener personaje_

```php
$this->server_characters->character($realm, $guid): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$realm** | int | Id de reino |
| **$guid** | int | Id de guid |

#### Valores Devueltos

Devuelve un **object** con todos los datos del personaje o **null** si no existe.

#### Ejemplos

```php
$character = $this->server_characters->character(1, 1);
```

## character_guid

`$this->server_characters->character_guid()` — _Obtener guid de personaje_

```php
$this->server_characters->character_guid($realm, $name): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$realm** | int | Id de reino |
| **$name** | string | Nombre del personaje |

#### Valores Devueltos

Devuelve el **guid** del personaje o **null** si no existe.

#### Ejemplos

```php
$guid = $this->server_characters->character_guid(1, 'Naeri');
```

## character_name

`$this->server_characters->character_name()` — _Obtener el nombre del personaje_

```php
$this->server_characters->character_name($realm, $guid): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$realm** | int | Id de reino |
| **$guid** | int | Id de guid |

#### Valores Devueltos

Devuelve el **nombre** del personaje o **null** si no existe.

#### Ejemplos

```php
$name = $this->server_characters->character_name(1, 1);
```

## character_class

`$this->server_characters->character_class()` — _Obtener la clase del personaje_

```php
$this->server_characters->character_class($realm, $guid): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$realm** | int | Id de reino |
| **$guid** | int | Id de guid |

#### Valores Devueltos

Devuelve la **clase** del personaje o **null** si no existe.

#### Ejemplos

```php
$class = $this->server_characters->character_class(1, 1);
```

## character_race

`$this->server_characters->character_race()` — _Obtener la raza del personaje_

```php
$this->server_characters->character_race($realm, $guid): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$realm** | int | Id de reino |
| **$guid** | int | Id de guid |

#### Valores Devueltos

Devuelve la **raza** del personaje o **null** si no existe.

#### Ejemplos

```php
$race = $this->server_characters->character_race(1, 1);
```

## character_money

`$this->server_characters->character_money()` — _Obtener el dinero del personaje_

```php
$this->server_characters->character_money($realm, $guid): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$realm** | int | Id de reino |
| **$guid** | int | Id de guid |

#### Valores Devueltos

Devuelve la cantidad de **dinero** que tiene el personaje o **null** si no existe.

#### Ejemplos

```php
$money = $this->server_characters->character_money(1, 1);
```

## character_exists

`$this->server_characters->character_exists()` — _Comprobar si el personaje existe_

```php
$this->server_characters->character_exists($realm, $guid): bool
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$realm** | int | Id de reino |
| **$guid** | int | Id de guid |

#### Valores Devueltos

Devuelve **true** si el personaje existe o **false** en caso de error.

#### Ejemplos

```php
if ($this->server_characters->character_exists(1, 1))
{
    echo 'En el realm 1, existe el personaje con guid 1';
}
```

## character_linked

`$this->server_characters->character_linked()` — _Comprobar si el personaje está vinculado a la cuenta_

```php
$this->server_characters->character_linked($realm, $guid, $account): bool
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$realm** | int | Id de reino |
| **$guid** | int | Id de guid |
| **$account** | int | Id de cuenta |

#### Valores Devueltos

Devuelve **true** si el personaje está vinculado a la cuenta o **false** en caso de error.

#### Ejemplos

```php
if ($this->server_characters->character_linked(1, 1, 1))
{
    echo 'En el realm 1, el personaje con guid 1 está vinculado a la cuenta 1';
}
```

## characters_online

`$this->server_characters->characters_online()` — _Contar personajes en línea_

```php
$this->server_characters->characters_online($realm, $faction = null): int
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$realm** | int | Id de reino |
| **$faction** | int | Tipo de facción |

**Tipos de facción:**

- `alliance`
- `horde`
- `null` _(ambos)_

#### Valores Devueltos

Devuelve el **número** de personajes en línea según la facción.

#### Ejemplos

```php
$online = $this->server_characters->characters_online(1, 'horde');
```

## all_characters

`$this->server_characters->all_characters()` — _Obtener todos los personajes de la cuenta_

```php
$this->server_characters->all_characters($realm, $account): array
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$realm** | int | Id de reino |
| **$account** | int | Id de cuenta |

#### Valores Devueltos

devuelve un **array** con todos los personajes de una cuenta en un reino.

#### Ejemplos

```php
$characters = $this->server_characters->all_characters(1, 1);
```
