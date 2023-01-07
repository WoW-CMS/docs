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

::: note NOTE
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
format_date($date, $format = null): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$date** | string | Date string |
| **$format** | string\|null | Date format |

::: note NOTE
If **$format** is not set, the following will be used: `Y-m-d H:i:s`
:::

#### Return Values

Returns the changed format of the date string.

#### Examples

```php
// Returns '2022-05-17 21:11:44'
echo format_date('Tue, 17 May 2022 21:11:44 +0000');
```

## add_timespan

`add_timespan` — _Add timespan to a date_

```php
add_timespan($date, $interval, $format = null, $timezone = null): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$date** | string | Date string |
| **$interval** | string | Interval |
| **$format** | string\|null | Date format |
| **$timezone** | string\|null | Date timezone |

::: note NOTE
If **$format** is not set, the following will be used: `Y-m-d H:i:s`

If **$timezone** is not set, the following will be used: `UTC`
:::

#### Return Values

Returns a date with the interval added.

#### Examples

```php
// Returns current datetime + 4 hours
echo add_timespan('now', 'PT4H');
```

## remaining_minutes

`remaining_minutes` — _Get the number of minutes that remain in between two dates_

```php
remaining_minutes($date, $dateTwo, $timezone = null, $timezoneTwo = null): int
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$date** | string | First date string |
| **$dateTwo** | string | Second date string |
| **$timezone** | string\|null | First date timezone |
| **$timezoneTwo** | string\|null | Second date timezone |

::: note NOTE
If **$timezone**/**$timezoneTwo** is not set, the following will be used: `UTC`
:::

#### Return Values

Return the number of minutes that remain in between two dates **(can provide negative numbers)**.

#### Examples

```php
echo remaining_minutes('now', '2024-01-01 00:00:00');
```

## split_data

`split_data` — _Get a certain string type from the data_

```php
split_data($data, $type = 'not_digits', $key = null): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$data** | string |  |
| **$type** | string | String type |
| **$key** | int\|null | Array key |

**Types:**

- `digits`
- `not_digits`

#### Return Values

Returns an array with the indicated string type or if the key parameter is used, it will select a single element of the array.

#### Examples

```php
// Returns ['h', 'm', 's']
echo split_data('4h20m30s');

// Returns 'h'
echo split_data('4h20m30s', 'not_digits', 0);

// Returns '20'
echo split_data('4h20m30s', 'digits', 1);
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

- `gold` or `g`
- `silver` or `s`
- `copper` or `c`

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

`ordinal` — _Set ordinal suffix_

```php
ordinal($value): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$value** | int |  |

#### Return Values

Returns a string composed of the value and ordinal suffix.

#### Examples

```php
// Returns '1st'
echo ordinal(1);
```

## encrypt

`encrypt` — _Encrypt data_

```php
encrypt($data): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$data** | string |  |

#### Return Values

Returns a string with the encrypted data.

#### Examples

```php
echo encrypt('This is a string');
```

## decrypt

`decrypt` — _Decrypt data_

```php
decrypt($data): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$data** | string | Encrypted data |

#### Return Values

Returns a string with the decrypted data.

#### Examples

```php
$encrypt = encrypt('This is a string');

echo $encrypt;

// Decrypt data
$decrypt = decrypt($encrypt);

echo $decrypt;
```

## purify

`purify` — _Purify a content using the HTMLPurifier_

```php
purify($content, $type = null): string
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$content** | string |  |
| **$type** | string\|null | Type of content to purify |

**Types:**

- `article`
- `comment`

#### Return Values

Returns a string with all unallowed HTML tags removed.

#### Examples

```php
$html = '<p><script>alert("xss");</script>Lorem ipsum dolor sit amet</p>';

// Returns '<p>Lorem ipsum dolor sit amet</p>'
echo purify($html, 'comment');
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

if (is_json($str)) {
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
