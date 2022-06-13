---
title: Characters Model
icon: bx bx-radio-circle-marked
order: 2
---

The characters model is an essential model for connecting to the characters database of the server. On this page, you can find documentation of the available functions of this model.

## connect

`$this->characters->connect()` — _Connect to characters DB_

```php
$this->characters->connect($realm): object
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$realm** | int | Realm id |

#### Return Values

Return an **object** to connect to character database.

#### Examples

```php
$characters = $this->characters->connect(1);

// Returns the number of characters whose race is human
$count = $characters->from('characters')
    ->where('race', 1)
    ->count_all_results();
```

## character

`$this->characters->character()` — _Get character_

```php
$this->characters->character($realm, $guid): mixed
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
$character = $this->characters->character(1, 1);
```

## character_guid

`$this->characters->character_guid()` — _Get character guid_

```php
$this->characters->character_guid($realm, $name): mixed
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
$guid = $this->characters->character_guid(1, 'Naeri');
```

## character_name

`$this->characters->character_name()` — _Get character name_

```php
$this->characters->character_name($realm, $guid): mixed
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
$name = $this->characters->character_name(1, 1);
```

## character_class

`$this->characters->character_class()` — _Get character class_

```php
$this->characters->character_class($realm, $guid): mixed
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
$class = $this->characters->character_class(1, 1);
```

## character_race

`$this->characters->character_race()` — _Get character race_

```php
$this->characters->character_race($realm, $guid): mixed
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
$race = $this->characters->character_race(1, 1);
```

## character_money

`$this->characters->character_money()` — _Get character money_

```php
$this->characters->character_money($realm, $guid): mixed
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
$money = $this->characters->character_money(1, 1);
```

## character_exists

`$this->characters->character_exists()` — _Check if the character exists_

```php
$this->characters->character_exists($realm, $guid): bool
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
if ($this->characters->character_exists(1, 1))
{
    echo 'In the realm 1, the character with guid 1 exists';
}
```

## character_linked

`$this->characters->character_linked()` — _Check if the character is linked to the account_

```php
$this->characters->character_linked($realm, $guid, $account): bool
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
if ($this->characters->character_linked(1, 1, 1))
{
    echo 'In the realm 1, the character with guid 1 is linked to account 1';
}
```

## characters_online

`$this->characters->characters_online()` — _Count characters online_

```php
$this->characters->characters_online($realm, $faction = null): int
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
$online = $this->characters->characters_online(1, 'horde');
```

## all_characters

`$this->characters->all_characters()` — _Get all account characters_

```php
$this->characters->all_characters($realm, $account): array
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
$characters = $this->characters->all_characters(1, 1);
```
