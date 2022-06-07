---
title: Common Functions
icon: bx bx-radio-circle-marked
order: 1
---

In the creation of the CMS, very important functions were defined for its global operation, which is called common functions. On this page, you can find detailed documentation about it.

## is_logged_in

`is_logged_in` — _Check if the user has logged in_

```php
is_logged_in(): bool
```

#### Parameters

This function has no parameters.

#### Return Values

Returns **true** if the user has logged in or **false** on failure.

#### Examples

```php
if (is_logged_in())
{
    echo 'The user is already logged in';
}
```

## user

`user` — _Get all user data or a specific one_

```php
user($column = null, $id = null): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$column** | string\|null | Column name in the `users` table |
| **$id** | int\|null | User id |

#### Return Values

Returns the **column value** if a column is specified, **null** if the user is not found, or **object** with all user data.

#### Examples

```php
// Returns your nickname if you are logged in
$user = user('nickname');

// Returns an object with all your data if you are logged in
$user = user();

// Returns the DP of user '2' if it exists
$user = user('dp', 2);

// Returns an object with all data of user '2' if it exists
$user = user(null, 2);
```

## user_id

`user_id` — _Get the user id by searching a value in a column_

```php
user_id($value, $column = 'username'): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$value** | string | Value searched in the column |
| **$column** | string | Column name in the `users` table |

**Allowed column names:**

- `nickname`
- `username`
- `email`

#### Return Values

Returns user **id**, or **null** if the searched value is not found.

#### Examples

```php
// Returns the user id if the username 'nick' exists
$id = user_id('nick');

// Returns the user id if the email 'example@domain.tld' exists
$id = user_id('example@domain.tld', 'email');
```

## user_avatar

`user_avatar` — _Get the avatar image of a user_

```php
user_avatar($id = null): string
```

::: note NOTE
The difference between getting the avatar with `user('avatar')` or `user_avatar()` is that the latter caches the avatar data.
:::

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$id** | int\|null | User id |

#### Return Values

Returns the user **avatar**, or an **empty** string if not found.

#### Examples

```php
// Returns your avatar if you are logged in
echo user_avatar();

// Returns the avatar of user '2' if it exists
echo user_avatar(2);
```

## activity_log

`activity_log` — _Create a new activity log_

```php
activity_log($action, $message, $data = [], $module = null): bool
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$action** | string | Action |
| **$message** | string | Message |
| **$data** | array | Associative array of data |
| **$module** | string\|null | Module name |

#### Return Values

Returns **true** if the log is created or **false** on failure.

#### Examples

```php
activity_log('create', 'Added a comment');
```

## require_login

`require_login` — _Require user to be logged in_

```php
require_login(): void
```

#### Parameters

This function has no parameters.

#### Return Values

Returns an **exception page** if the user is **not** logged in yet.

#### Examples

```php
require_login();
```

## require_guest

`require_guest` — _Require that the user is not logged in_

```php
require_guest(): void
```

#### Parameters

This function has no parameters.

#### Return Values

Returns an **exception page** if the user already is logged in.

#### Examples

```php
require_guest();
```
