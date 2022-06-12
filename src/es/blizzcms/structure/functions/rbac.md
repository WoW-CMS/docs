---
title: Funciones RBAC
icon: bx bx-radio-circle-marked
order: 3
---

La integración del sistema RBAC en la base ahora permite restringir fácilmente secciones/páginas en todo el CMS. En esta página encontrará documentación de las funciones disponibles para lograrlo.

## has_permission

`has_permission` — _Comprobar si el rol de usuario tiene un permiso específico del módulo_

```php
has_permission($key, $module, $id = null): bool
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$key** | string | Clave de permiso |
| **$module** | string | Nombre del módulo |
| **$id** | int\|null | Id de usuario |

#### Valores Devueltos

Devuelve **true** si el usuario tiene el permiso o **false** en caso de error.

#### Ejemplos

```php
if (has_permission('create_tags', 'example'))
{
    echo 'Tienes permiso para crear etiquetas';
}

if (has_permission('create_tags', 'example', 2))
{
    echo 'El usuario 2 tiene permiso para crear etiquetas';
}
```

## require_permission

`require_permission` — _Requerir a un usuario un permiso_

```php
require_permission($key, $module = null, $id = null): void
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$key** | string | Clave de permiso |
| **$module** | string\|null | Nombre del módulo |
| **$id** | int\|null | Id de usuario |

#### Valores Devueltos

Devuelve una **página de excepción** si el usuario no tiene el permiso.

#### Ejemplos

```php
require_permission('create_news', 'example');
```

## Permisos reservados

Para no entrar en conflicto con las modificaciones externas por parte de los desarrolladores, hemos establecido en el CMS un rango de ID reservados en los que se podrían agregar nuevas funciones o cambios, puede verlo en la siguiente tabla:

| Tipo de permiso | Rango de IDs |
| ----------- | ---------- |
| Permisos base | -1 a -99 |
| Permisos de admin | -100 a -1000 |
