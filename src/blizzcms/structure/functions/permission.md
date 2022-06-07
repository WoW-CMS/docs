---
title: Permission Functions
icon: bx bx-radio-circle-marked
order: 3
---

Permission system integration now allows you to easily restrict sections/pages throughout the CMS. On this page, you will find documentation of the available functions to achieve this.

## has_permission

`has_permission` — _Check if the user has specific permission from the module_

```php
has_permission($key, $module, $id = null): bool
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$key** | string | Permission key |
| **$module** | string | Module name |
| **$id** | int\|null | User id |

#### Return Values

Returns **true** if the user has the permission or **false** on failure.

#### Examples

```php
if (has_permission('create_tags', 'example'))
{
    echo 'You have permission for creating tags';
}

if (has_permission('create_tags', 'example', 2))
{
    echo 'User 2 has permission for creating tags';
}
```

## require_permission

`require_permission` — _Require a user a permission_

```php
require_permission($key, $module = null, $id = null): void
```

#### Parameters

| Parameter | Type | Description |
| ------- | ------- | ------- |
| **$key** | string | Permission key |
| **$module** | string\|null | Module name |
| **$id** | int\|null | User id |

#### Return Values

Returns an **exception page** if the user does not have the permission.

#### Examples

```php
require_permission('create_news', 'example');
```

## Reserved Permissions

In order not to conflict with external modifications by developers, we have established in the CMS a range of reserved IDs in which new features or changes could be added, you can see it in the following table:

| Permission type | IDs range |
| ----------- | ---------- |
| Base permissions | -1 to -99 |
| Admin permissions | -100 to -1000 |
