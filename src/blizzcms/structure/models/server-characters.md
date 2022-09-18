---
title: Server Characters Model
icon: bx bx-radio-circle-marked
order: 2
---

The server characters model is an essential model for connecting to the characters database of the server. On this page, you can find documentation of the available functions of this model.

## connect

`$this->server_characters_model->connect()` — _Connect to characters DB_

```php
$this->server_characters_model->connect($realm): object
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$realm** | int | Realm id |

#### Return Values

Return an **object** to connect to character database.

#### Examples

```php
$characters = $this->server_characters_model->connect(1);

// Returns the number of characters whose race is human
$count = $characters->from('characters')
    ->where('race', 1)
    ->count_all_results();
```

## character

`$this->server_characters_model->character()` — _Get character_

```php
$this->server_characters_model->character($realm, $guid): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$realm** | int | Realm id |
| **$guid** | int | Guid id |

#### Return Values

Returns an **object** with all the data of the character or **null** if not exist.

#### Examples

```php
$character = $this->server_characters_model->character(1, 1);
```

## character_guid

`$this->server_characters_model->character_guid()` — _Get character guid_

```php
$this->server_characters_model->character_guid($realm, $name): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$realm** | int | Realm id |
| **$name** | string | Character name |

#### Return Values

Returns the **guid** of the character or **null** if not exist.

#### Examples

```php
$guid = $this->server_characters_model->character_guid(1, 'Naeri');
```

## character_name

`$this->server_characters_model->character_name()` — _Get character name_

```php
$this->server_characters_model->character_name($realm, $guid): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$realm** | int | Realm id |
| **$guid** | int | Guid id |

#### Return Values

Returns the **name** of the character or **null** if not exist.

#### Examples

```php
$name = $this->server_characters_model->character_name(1, 1);
```

## character_class

`$this->server_characters_model->character_class()` — _Get character class_

```php
$this->server_characters_model->character_class($realm, $guid): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$realm** | int | Realm id |
| **$guid** | int | Guid id |

#### Return Values

Returns the **class** of the character or **null** if not exist.

#### Examples

```php
$class = $this->server_characters_model->character_class(1, 1);
```

## character_race

`$this->server_characters_model->character_race()` — _Get character race_

```php
$this->server_characters_model->character_race($realm, $guid): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$realm** | int | Realm id |
| **$guid** | int | Guid id |

#### Return Values

Returns the **race** of the character or **null** if not exist.

#### Examples

```php
$race = $this->server_characters_model->character_race(1, 1);
```

## character_money

`$this->server_characters_model->character_money()` — _Get character money_

```php
$this->server_characters_model->character_money($realm, $guid): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$realm** | int | Realm id |
| **$guid** | int | Guid id |

#### Return Values

Returns the amount of **money** that the character has or **null** if not exist.

#### Examples

```php
$money = $this->server_characters_model->character_money(1, 1);
```

## character_exists

`$this->server_characters_model->character_exists()` — _Check if the character exists_

```php
$this->server_characters_model->character_exists($realm, $guid): bool
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$realm** | int | Realm id |
| **$guid** | int | Guid id |

#### Return Values

Returns **true** if the character exists or **false** on failure.

#### Examples

```php
if ($this->server_characters_model->character_exists(1, 1))
{
    echo 'In the realm 1, the character with guid 1 exists';
}
```

## character_linked

`$this->server_characters_model->character_linked()` — _Check if the character is linked to the account_

```php
$this->server_characters_model->character_linked($realm, $guid, $account): bool
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$realm** | int | Realm id |
| **$guid** | int | Guid id |
| **$account** | int | Account id |

#### Return Values

Returns **true** if the character is linked to the account or **false** on failure.

#### Examples

```php
if ($this->server_characters_model->character_linked(1, 1, 1))
{
    echo 'In the realm 1, the character with guid 1 is linked to account 1';
}
```

## characters_online

`$this->server_characters_model->characters_online()` — _Count characters online_

```php
$this->server_characters_model->characters_online($realm, $faction = null): int
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$realm** | int | Realm id |
| **$faction** | int | Faction type |

**Faction types:**

- `alliance`
- `horde`
- `null` _(both)_

#### Return Values

Return the **number** of characters online depending on the faction.

#### Examples

```php
$online = $this->server_characters_model->characters_online(1, 'horde');
```

## all_characters

`$this->server_characters_model->all_characters()` — _Get all account characters_

```php
$this->server_characters_model->all_characters($realm, $account): array
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$realm** | int | Realm id |
| **$account** | int | Account id |

#### Return Values

Returns an **array** with all the characters of an account in a realm.

#### Examples

```php
$characters = $this->server_characters_model->all_characters(1, 1);
```
