---
title: BS_Model Documentation
icon: bx bx-database
order: 1
---

The `BS_Model` class is designed to enhance the capabilities of the CodeIgniter framework by providing streamlined database interaction methods. This documentation outlines the available functions and their usage within the `BS_Model` class.

## Properties

- `table`: Stores the name of the database table to interact with.
- `createdField`: Defines the name of the creation timestamp field.
- `setCreatedField`: A boolean flag indicating whether to auto-populate the creation timestamp field during insertion.
- `updatedField`: Defines the name of the update timestamp field.
- `setUpdatedField`: A boolean flag indicating whether to auto-populate the update timestamp field during update operations.

#### Examples usage

```php
class Category_model extends BS_Model
{
    protected $table = 'your_table';

    protected $setCreatedField = false;

    protected $setUpdatedField = false;
}
```

## insert

`$this->insert()` — _Inserts a new row into the table._

```php
$this->insert(array $set): bool
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$set** | array | An associative array containing data to be inserted. |

#### Return Values

Returns **true** if the insertion is successful, otherwise false.

#### Examples

```php
$uri = $this->insert(['name' => 'John Doe',
    'email' => 'john@example.com']);
```

## insert_batch

`$this->insert_batch()` — _Inserts multiple new rows into the table._

```php
$this->insert_batch(array $set): mixed
```

#### Parameters
| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$set** | array | A multidimensional array containing data for multiple rows. |

#### Return Values

Returns the result of the **batch insertion**.

#### Examples

```php
$batch_data = [
    ['name' => 'Alice', 'age' => 25],
    ['name' => 'Bob', 'age' => 30]
];

$result = $this->insert_batch($batch_data);
```


