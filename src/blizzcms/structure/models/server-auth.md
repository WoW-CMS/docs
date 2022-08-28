---
title: Server Auth Model
icon: bx bx-radio-circle-marked
order: 1
---

The server auth model is an essential model for connecting to the auth database of the server. On this page, you can find documentation of the available functions of this model.

## connect

`$this->server_auth->connect()` — _Connect to auth DB_

```php
$this->server_auth->connect(): object
```

#### Parameters

This function has no parameters.

#### Return Values

Return an **object** to connect to auth database.

#### Examples

```php
$auth = $this->server_auth->connect();

// Returns quantity of active bans
$count = $auth->from('account_banned')
    ->where('active', 1)
    ->count_all_results();
```

## account

`$this->server_auth->account()` — _Get account_

```php
$this->server_auth->account($id): mixed
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$id** | int | Account id |

#### Return Values

Returns an **object** with all the data of the account or **null** if not exist.

#### Examples

```php
// Returns account data if the id '1' exists
$account = $this->server_auth->account(1);
```

## account_id

`$this->server_auth->account_id()` — _Get the account id by searching a value in a column_

```php
$this->server_auth->account_id($value, $column = 'username'): int
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$value** | string | Value searched in the column |
| **$column** | string | Column name in the `account` table |

**Allowed column names:**

- `username`
- `email`

#### Return Values

Returns account **id**, or **0** if the searched value is not found.

#### Examples

```php
// Returns the account id if the username 'nick' exists
$id = $this->server_auth->account_id('nick');

// Returns the account id if the email 'example@domain.tld' exists
$id = $this->server_auth->account_id('example@domain.tld', 'email');
```

## account_exists

`$this->server_auth->account_exists()` — _Check if an account with a column value exists_

```php
$this->server_auth->account_exists($value, $column = 'username'): bool
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$value** | string | Value searched in the column |
| **$column** | string | Column name in the `account` table |

**Allowed column names:**

- `username`
- `email`

#### Return Values

Returns **true** if the column value exist or **false** on failure.

#### Examples

```php
if ($this->server_auth->account_exists('emina'))
{
    echo 'The account with the username emina exists';
}
```

## account_gmlevel

`$this->server_auth->account_gmlevel()` — _Get the gmlevel of an account_

```php
$this->server_auth->account_gmlevel($id = null): int
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$id** | int\|null | Account id |

#### Return Values

Return the **gmlevel** of an account or **0** if it doesn't have assigned.

#### Examples

```php
// Returns the gmlevel of your account if you are logged in
$gmlevel = $this->server_auth->account_gmlevel();

// Returns the gmlevel of account '1'
$gmlevel = $this->server_auth->account_gmlevel(1);
```

## is_banned

`$this->server_auth->is_banned()` — _Check if an account is banned_

```php
$this->server_auth->is_banned($id = null): bool
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$id** | int\|null | Account id |

#### Return Values

Returns **true** if the account is banned or **false** on failure.

#### Examples

```php
if ($this->server_auth->is_banned())
{
    echo 'Your account is banned';
}

if ($this->server_auth->is_banned(1))
{
    echo 'Account 1 is banned';
}
```
