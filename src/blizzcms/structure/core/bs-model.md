---
title: Extends BS_Model
icon: bx bx-radio-circle-marked
order: 1
---

The `BS_Model` class was created to enhance CodeIgniter's model capabilities by providing optimized methods of interacting with the database. This documentation describes the available functions and their use.

## Properties

- `table`: Table name used in the model
- `createdField`: Field name used for the created time column in the table
- `setCreatedField`: Auto-fill with createdField during insert methods
- `updatedField`: Field name used for the updated time column in the table
- `setUpdatedField`: Auto-fill with updatedField during update methods

#### Usage example

```php
class Test_model extends BS_Model
{
    protected $table = 'your_table';

    protected $setCreatedField = false;

    protected $setUpdatedField = false;
}
```

## insert

`$this->insert()` — _Insert a new row in the table_

```php
$this->insert(array $set): bool
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$set** | array | An associative array containing data to be inserted. |

#### Return Values

Returns **true** if the insertion is successful, or **false** on failure.

#### Examples

```php
$this->insert([
    'name'  => 'John Doe',
    'email' => 'john@example.com'
]);
```

## insert_batch

`$this->insert_batch()` — _Insert multiple new rows in the table_

```php
$this->insert_batch(array $set): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$set** | array | A multidimensional array containing data for multiple rows to be inserted. |

#### Return Values

Returns the **number** of rows inserted, or **false** on failure.

#### Examples

```php
$data = [
    ['name' => 'Alice', 'age' => 25],
    ['name' => 'Bob', 'age' => 30]
];

$this->insert_batch($data);
```

## update

`$this->update()` — _Update a row in the table_

```php
$this->update(array $set, array $where): bool
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$set** | array | An associative array containing data to be updated. |
| **$where** | array | An associative array containing data to be filtered. |

#### Return Values

Returns **true** if the update is successful, or **false** on failure.

#### Examples

```php
$this->update([
    'email' => 'john@example.com'
], ['id' => 1]);
```

## update_batch

`$this->update_batch()` — _Update multiple rows in the table_

```php
$this->update_batch(array $set, string $index): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$set** | array | A multidimensional array containing data for multiple rows to be updated. |
| **$index** | string | Field name to filter in the table. |

#### Return Values

Returns the **number** of rows affected, or **false** on failure.

#### Examples

```php
$data = [
    ['name' => 'Kristie', 'age' => 27],
    ['name' => 'Jarvis', 'age' => 35]
];

$this->update_batch($data, 'name');
```

## set

`$this->set()` — _Set data in the row of the table_

```php
$this->set(array $keys, array $where, $escape = null): bool
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$keys** | array | An associative array containing data to be established. |
| **$where** | array | An associative array containing data to be filtered. |
| **$escape** | bool\|null | Escape values and identifiers. |

#### Return Values

Returns **true** if the update is successful, or **false** on failure.

#### Examples

```php
$this->set([
    'name'  => 'John Doe'
], ['id' => 1]);
```

## delete

`$this->delete()` — _Delete a row in the table_

```php
$this->delete(array $where): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$where** | array | An associative array containing data to be filtered. |

#### Return Values

Returns **false** on failure.

#### Examples

```php
$this->delete([
    'name' => 'Bob'
]);
```

## delete_in

`$this->delete_in()` — _Delete rows by searching for values in the table_

```php
$this->delete_in(string $key, array $values): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$key** | string | Field name to filter in the table. |
| **$values** | array | An associative array containing values to be filtered. |

#### Return Values

Returns **false** on failure.

#### Examples

```php
$this->delete_in('age', [25, 30]);
```

## find

`$this->find()` — _Find a row in the table_

```php
$this->find(array $where): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$where** | array | An associative array containing data to be filtered. |

#### Return Values

Returns a **object**, or **null** if no row is found.

#### Examples

```php
$result = $this->find([
    'name' => 'Alice'
]);
```

## find_all

`$this->find_all()` — _Find all rows in the table_

```php
$this->find_all(array $where = [], $type = 'object'): array
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$where** | array | An associative array containing data to be filtered. |
| **$type** | string | Result return type. |

#### Return Values

Returns an **array** with the rows found.

#### Examples

```php
$result = $this->find_all([
    'age' => 25
]);
```

## find_in

`$this->find_in()` — _Find rows by searching for values in the table_

```php
$this->find_in(string $key, array $values, $type = 'object'): array
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$key** | string | Field name to filter in the table. |
| **$values** | array | An associative array containing values to be filtered. |
| **$type** | string | Result return type. |

#### Return Values

Returns an **array** with the rows found.

#### Examples

```php
$result = $this->find_in('age', [25, 30]);
```

## count_all

`$this->count_all()` — _Count all rows in the table_

```php
$this->count_all(array $where = []): int
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$where** | array | An associative array containing data to be filtered. |

#### Return Values

Returns the result of the **number** of rows.

#### Examples

```php
$result = $this->count_all([
    'age' => 30
]);
```
