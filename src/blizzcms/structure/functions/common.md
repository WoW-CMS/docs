---
title: Common Functions
icon: bx bx-radio-circle-marked
order: 1
---

At the base of the CMS are functions that are important to all of its components called common functions. On this page, will find what they are and detailed information about them.

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
if (is_logged_in()) {
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
user_id($value, $column = 'username'): int
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

Returns user **id**, or **0** if the searched value is not found.

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

::: note
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
