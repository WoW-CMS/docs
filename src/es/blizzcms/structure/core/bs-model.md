---
title: Extends BS_Model
icon: bx bx-radio-circle-marked
order: 1
---

La clase `BS_Model` se creó para mejorar las capacidades del modelo de CodeIgniter al proporcionar métodos optimizados para interactuar con la base de datos. Esta documentación describe las funciones disponibles y su uso.

## Propiedades

- `table`: Nombre de la tabla utilizada en el modelo
- `createdField`: Nombre de campo utilizado para la columna de tiempo de creación en la tabla
- `setCreatedField`: Autocompletar con createField durante los métodos de inserción
- `updatedField`: Nombre de campo utilizado para la columna de tiempo de actualización en la tabla
- `setUpdatedField`: Autocompletar con updateField durante los métodos de actualización

#### Ejemplo de uso

```php
class Test_model extends BS_Model
{
    protected $table = 'your_table';

    protected $setCreatedField = false;

    protected $setUpdatedField = false;
}
```

## insert

`$this->insert()` — _Insertar una nueva fila en la tabla_

```php
$this->insert(array $set): bool
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$set** | array | Un array asociativo que contiene datos que se insertarán. |

#### Valores Devueltos

Devuelve **true** si la inserción se realiza correctamente, o **false** en caso de error.

#### Ejemplos

```php
$this->insert([
    'name'  => 'John Doe',
    'email' => 'john@example.com'
]);
```

## insert_batch

`$this->insert_batch()` — _Insertar varias filas nuevas en la tabla_

```php
$this->insert_batch(array $set): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$set** | array | Un array multidimensional que contiene datos para varias filas que se insertarán. |

#### Valores Devueltos

Devuelve el **número** de filas insertadas, o **false** en caso de error.

#### Ejemplos

```php
$data = [
    ['name' => 'Alice', 'age' => 25],
    ['name' => 'Bob', 'age' => 30]
];

$this->insert_batch($data);
```

## update

`$this->update()` — _Actualizar una fila en la tabla_

```php
$this->update(array $set, array $where): bool
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$set** | array | Un array asociativo que contiene datos que se actualizarán. |
| **$where** | array | Un array asociativo que contiene datos que se van a filtrar. |

#### Valores Devueltos

Devuelve **true** si la actualización se realiza correctamente, o **false** en caso de error.

#### Ejemplos

```php
$this->update([
    'email' => 'john@example.com'
], ['id' => 1]);
```

## update_batch

`$this->update_batch()` — _Actualizar varias filas en la tabla_

```php
$this->update_batch(array $set, string $index): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$set** | array | Un array multidimensional que contiene datos para varias filas que se actualizarán. |
| **$index** | string | Nombre del campo a filtrar en la tabla. |

#### Valores Devueltos

Devuelve el **número** de filas afectadas, o **false** en caso de error.

#### Ejemplos

```php
$data = [
    ['name' => 'Kristie', 'age' => 27],
    ['name' => 'Jarvis', 'age' => 35]
];

$this->update_batch($data, 'name');
```

## set

`$this->set()` — _Establecer datos en la fila de la tabla_

```php
$this->set(array $keys, array $where, $escape = null): bool
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$keys** | array | Un array asociativo que contiene datos a establecer. |
| **$where** | array | Un array asociativo que contiene datos que se van a filtrar. |
| **$escape** | bool\|null | Escape values and identifiers. |

#### Valores Devueltos

Devuelve **true** si la actualización se realiza correctamente, o **false** en caso de error.

#### Ejemplos

```php
$this->set([
    'name'  => 'John Doe'
], ['id' => 1]);
```

## delete

`$this->delete()` — _Eliminar una fila en la tabla_

```php
$this->delete(array $where): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$where** | array | Un array asociativo que contiene datos que se van a filtrar. |

#### Valores Devueltos

Devuelve **false** en caso de error.

#### Ejemplos

```php
$this->delete([
    'name' => 'Bob'
]);
```

## delete_in

`$this->delete_in()` — _Eliminar filas buscando valores en la tabla_

```php
$this->delete_in(string $key, array $values): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$key** | string | Nombre del campo a filtrar en la tabla. |
| **$values** | array | Un array asociativo que contiene valores que se van a filtrar. |

#### Valores Devueltos

Devuelve **false** en caso de error.

#### Ejemplos

```php
$this->delete_in('age', [25, 30]);
```

## find

`$this->find()` — _Encontrar una fila en la tabla_

```php
$this->find(array $where): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$where** | array | Un array asociativo que contiene datos que se van a filtrar. |

#### Valores Devueltos

Devuelve un **object**, o **null** si no se encuentra ninguna fila.

#### Ejemplos

```php
$result = $this->find([
    'name' => 'Alice'
]);
```

## find_all

`$this->find_all()` — _Encontrar todas las filas en la tabla_

```php
$this->find_all(array $where = [], $type = 'object'): array
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$where** | array | Un array asociativo que contiene datos que se van a filtrar. |
| **$type** | string | Tipo de devolución de resultado. |

#### Valores Devueltos

Devuelve un **array** con las filas encontradas.

#### Ejemplos

```php
$result = $this->find_all([
    'age' => 25
]);
```

## find_in

`$this->find_in()` — _Encontrar filas buscando valores en la tabla_

```php
$this->find_in(string $key, array $values, $type = 'object'): array
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$key** | string | Nombre del campo a filtrar en la tabla. |
| **$values** | array | Un array asociativo que contiene valores que se van a filtrar. |
| **$type** | string | Tipo de devolución de resultado. |

#### Valores Devueltos

Devuelve un **array** con las filas encontradas.

#### Ejemplos

```php
$result = $this->find_in('age', [25, 30]);
```

## count_all

`$this->count_all()` — _Contar todas las filas de la tabla_

```php
$this->count_all(array $where = []): int
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$where** | array | Un array asociativo que contiene datos que se van a filtrar. |

#### Valores Devueltos

Devuelve el resultado del **número** de filas.

#### Ejemplos

```php
$result = $this->count_all([
    'age' => 30,
]);
```
