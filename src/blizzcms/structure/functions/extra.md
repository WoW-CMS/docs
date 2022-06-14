---
title: Extra Functions
icon: bx bx-radio-circle-marked
order: 2
---

In addition to the common functions, more functions have been added to create more complex components. On this page, can find detailed information about them.

## current_date

`current_date` — _Get the current date with a specific format_

```php
current_date($format = null, $timezone = null): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$format** | string\|null | Date format |
| **$timezone** | string\|null | Date timezone |

::: info INFORMATION
If **$format** is not set, the following will be used: `Y-m-d H:i:s`

If **$timezone** is not set, the following will be used: `UTC`
:::

#### Return Values

Returns a current formatted date.

#### Examples

```php
echo current_date();
```

## format_date

`format_date` — _Change a date string to another specific format_

```php
format_date($str, $format = null): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$str** | string | Date string |
| **$format** | string\|null | Date format |

::: info INFORMATION
If **$format** is not set, the following will be used: `Y-m-d`
:::

#### Return Values

Returns the changed format of the date string.

#### Examples

```php
// Returns '2022-05-17 21:11:44'
echo format_date('Tue, 17 May 2022 21:11:44 +0000', 'Y-m-d H:i:s');
```

## add_interval

`add_interval` — _Add an interval time to the current date_

```php
add_interval($interval, $format = null, $timezone = null): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$interval** | string | Interval |
| **$format** | string\|null | Date format |
| **$timezone** | string\|null | Date timezone |

::: info INFORMATION
If **$format** is not set, the following will be used: `Y-m-d H:i:s`

If **$timezone** is not set, the following will be used: `UTC`
:::

#### Return Values

Returns a date with the interval added.

#### Examples

```php
// Returns current datetime + 4 hours
echo add_interval('PT4H');
```

## remaining_minutes

`remaining_minutes` — _Get the number of minutes that remain in between two dates_

```php
remaining_minutes($date, $date_two, $timezone = null, $timezone_two = null): int
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$date** | string | First date string |
| **$date\_two** | string | Second date string |
| **$timezone** | string\|null | First date timezone |
| **$timezone\_two** | string\|null | Second date timezone |

::: info INFORMATION
If **$timezone**/**$timezone_two** is not set, the following will be used: `UTC`
:::

#### Return Values

Return the number of minutes that remain in between two dates **(can provide negative numbers)**.

#### Examples

```php
echo remaining_minutes('now', '2023-01-01 00:00:00');
```

## split_data

`split_data` — _Get a certain data type from a string_

```php
split_data($str, $type = 'letter', $key = null): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$str** | string |  |
| **$type** | string | Type of data to get |
| **$key** | int\|null | Array key |

**Types:**

- `letter`
- `number`

#### Return Values

Returns an array with the indicated data type or if the key parameter is used, it will select a single element of the array.

#### Examples

```php
// Returns ['h', 'm', 's']
echo split_data('4h20m30s');

// Returns 'h'
echo split_data('4h20m30s', 'letter', 0);

// Returns '20'
echo split_data('4h20m30s', 'number', 1);
```

## money_pieces

`money_pieces` — _Get the amount of copper/silver/gold pieces from a total amount of money_

```php
money_pieces($money, $type = 'g'): int
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$money** | string | Money amount |
| **$type** | string | Piece type |

**Piece type:**

- **Gold:** `gold` or `g`
- **Silver:** `silver` or `s`
- **Copper:** `copper` or `c`

#### Return Values

Returns the amount of specified piece.

#### Examples

```php
// Returns '11' (gold)
echo money_pieces('110340');

// Returns '3' (silver)
echo money_pieces('110340', 's');
```

## ordinal

`ordinal` — _Set ordinal suffix indicator to a number_

```php
ordinal($number): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$number** | int |  |

#### Return Values

Returns a number with an ordinal suffix indicator.

#### Examples

```php
// Returns '1st'
echo ordinal(1);
```

## initial_letter

`initial_letter` — _Get the first letter of the string_

```php
initial_letter($str): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$str** | string |  |

#### Return Values

Returns the first letter of the string in uppercase.

#### Examples

```php
// Returns 'N'
echo initial_letter('nick');
```

## encrypt

`encrypt` — _Encrypt a string_

```php
encrypt($str): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$str** | string |  |

#### Return Values

Returns an encrypted string.

#### Examples

```php
// Encrypt string
echo encrypt('This is a string');
```

## decrypt

`decrypt` — _Decrypt a string_

```php
decrypt($str): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$str** | string |  |

#### Return Values

Returns a decrypted string.

#### Examples

```php
$encrypt = encrypt('This is a string');

echo $encrypt;

// Decrypt string
$decrypt = decrypt($encrypt);

echo $decrypt;
```

## html_purify

`html_purify` — _Purify a string using the HTMLPurifier_

```php
html_purify($str, $type = null): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$str** | string |  |
| **$type** | string\|null | Type of content to purify |

**Types:**

- `comment`
- `content`
- `minimal`

#### Return Values

Returns a string with all unallowed HTML tags removed.

#### Examples

```php
$html = '<p><script>alert("xss");</script>Lorem ipsum dolor sit amet</p>';

// Returns '<p>Lorem ipsum dolor sit amet</p>'
echo html_purify($html, 'comment');
```

## is_json

`is_json` — _Check if the string has a valid JSON format_

```php
is_json($str): bool
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$str** | string |  |

#### Return Values

Returns **true** if the string has a valid JSON format or **false** on failure.

#### Examples

```php
$str = '{"name":"example"}';

if (is_json($str))
{
    echo 'This string has JSON format';
}
```

## class_name

`class_name` — _Get a class name_

```php
class_name($id): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$id** | int | Class id |

#### Return Values

Returns the **name** of the class or **unknown** if it does not exist.

#### Examples

```php
// Returns 'Death Knight'
echo class_name(6);
```

## race_name

`race_name` — _Get a race name_

```php
race_name($id): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$id** | int | Race id |

#### Return Values

Returns the **name** of the race or **unknown** if it does not exist.

#### Examples

```php
// Returns 'Undead'
echo race_name(5);
```

## faction_name

`faction_name` — _Get a faction name_

```php
faction_name($id): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$id** | int | Faction id |

#### Return Values

Returns the **name** of the faction or **unknown** if it does not exist.

#### Examples

```php
// Returns 'Alliance'
echo faction_name(1);
```

## zone_name

`zone_name` — _Get a zone name_

```php
zone_name($id): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$id** | int | Zone id |

#### Return Values

Returns the **name** of the zone or **unknown** if it does not exist.

#### Examples

```php
// Returns 'Deadwind Pass'
echo zone_name(41);
```
