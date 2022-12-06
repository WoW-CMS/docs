---
title: Base de datos
icon: bx bxs-data
order: 2
---

## bans

`bans` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| type | enum('email','ip','user') |  |  | NO |  |  |
| value | varchar(255) |  |  | NO |  |  |
| reason | mediumtext |  |  | NO |  |  |
| start_at | datetime |  |  | NO | 0000-00-00 00:00:00 |  |
| end_at | datetime |  |  | NO | 0000-00-00 00:00:00 |  |

## logs

`logs` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| user_id | bigint(20) | unsigned |  | NO |  |  |
| ip | varchar(255) |  |  | NO |  |  |
| status | enum('failed','succeeded') |  |  | NO | succeeded |  |
| object | varchar(255) |  |  | NO |  |  |
| event | varchar(255) |  |  | NO |  |  |
| message | text |  |  | NO |  |  |
| data | mediumtext |  |  | NO |  |  |
| uri | varchar(255) |  |  | NO |  |  |
| created_at | datetime |  |  | YES | NULL |  |

## menus

`menus` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| name | varchar(255) |  | UNI | NO |  |  |
| description | varchar(255) |  |  | NO |  |  |

## menus_items

`menus_items` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| menu_id | bigint(20) | unsigned |  | NO |  |  |
| name | varchar(255) |  |  | NO |  |  |
| url | varchar(255) |  |  | NO |  |  |
| target | enum('\_self','\_blank') |  |  | NO | \_self |  |
| icon | varchar(255) |  |  | NO |  |  |
| type | enum('link','dropdown') |  |  | NO | link |  |
| parent | bigint(20) | unsigned |  | NO | 0 |  |
| sort | bigint(20) | unsigned |  | NO | 0 |  |

## modules

`modules` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| module | varchar(255) |  | PRI | NO |  |  |
| version | varchar(255) |  |  | NO |  |  |

## news

`news` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| title | varchar(255) |  |  | NO |  |  |
| summary | text |  |  | NO |  |  |
| content | mediumtext |  |  | NO |  |  |
| slug | varchar(255) |  |  | NO |  |  |
| image | varchar(255) |  |  | NO |  |  |
| comments | bigint(20) | unsigned |  | NO | 0 |  |
| views | bigint(20) | unsigned |  | NO | 0 |  |
| meta_description | varchar(255) |  |  | NO | '' |  |
| meta_robots | varchar(255) |  |  | NO | index, follow |  |
| discuss | tinyint(1) | unsigned |  | NO | 0 |  |
| created_at | datetime |  |  | YES | NULL |  |
| updated_at | datetime |  |  | YES | NULL |  |

## news_comments

`news_comments` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| news_id | bigint(20) | unsigned |  | NO |  |  |
| user_id | bigint(20) | unsigned |  | NO |  |  |
| comment_content | mediumtext |  |  | NO |  |  |
| created_at | datetime |  |  | YES | NULL |  |
| updated_at | datetime |  |  | YES | NULL |  |

## pages

`pages` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| title | varchar(255) |  |  | NO |  |  |
| content | mediumtext |  |  | NO |  |  |
| slug | varchar(255) |  | UNI | NO |  |  |
| views | bigint(20) | unsigned |  | NO | 0 |  |
| meta_description | varchar(255) |  |  | NO | '' |  |
| meta_robots | varchar(255) |  |  | NO | index, follow |  |
| created_at | datetime |  |  | YES | NULL |  |
| updated_at | datetime |  |  | YES | NULL |  |

## pageviews

`permissions` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| ip | varchar(255) |  |  | NO |  |  |
| uri | varchar(255) |  |  | NO |  |  |
| platform | varchar(255) |  |  | NO |  |  |
| browser | varchar(255) |  |  | NO |  |  |
| is_mobile | tinyint(1) | unsigned |  | NO | 0 |  |
| created_at | datetime |  |  | YES | NULL |  |

## permissions

`permissions` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| key | varchar(255) |  |  | NO |  |  |
| module | varchar(255) |  |  | NO |  |  |
| description | text |  |  | NO |  |  |

## realms

`realms` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| realm_name | varchar(255) |  |  | NO |  |  |
| realm_capacity | int(10) | unsigned |  | NO | 100 |  |
| char_hostname | varchar(255) |  |  | NO | 127.0.0.1 |  |
| char_username | varchar(255) |  |  | NO |  |  |
| char_password | text |  |  | NO |  |  |
| char_database | varchar(255) |  |  | NO | characters |  |
| char_port | smallint(6) | unsigned |  | NO | 3306 |  |
| console_hostname | varchar(255) |  |  | NO |  |  |
| console_username | varchar(255) |  |  | NO |  |  |
| console_password | text |  |  | NO |  |  |
| console_port | smallint(6) | unsigned |  | NO | 7878 |  |
| realm_hostname | varchar(255) |  |  | NO |  |  |
| realm_port | smallint(6) | unsigned |  | NO | 8085 |  |

## roles

`roles` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| name | varchar(255) |  | UNI | NO |  |  |
| description | varchar(255) |  |  | NO |  |  |

## roles_permissions

`roles_permissions` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| role_id | bigint(20) | unsigned | PRI | NO |  |  |
| permission_id | bigint(20) |  | PRI | NO |  |  |

## slides

`slides` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| title | varchar(255) |  |  | NO |  |  |
| description | text |  |  | NO |  |  |
| type | enum('image','video','iframe') |  |  | NO | image |  |
| path | text |  |  | NO |  |  |
| sort | bigint(20) | unsigned |  | NO | 0 |  |

## throttle

`throttle` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| ip | varchar(255) |  | PRI | NO |  |  |
| attempts | tinyint(4) | unsigned |  | NO | 0 |  |
| reset_at | datetime |  |  | YES | NULL |  |
| unlock_at | datetime |  |  | YES | NULL |  |

## users

`users` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| nickname | varchar(255) |  | UNI | NO |  |  |
| username | varchar(255) |  | UNI | NO |  |  |
| email | varchar(255) |  | UNI | NO |  |  |
| role | int(10) | unsigned |  | NO | 0 |  |
| dp | int(10) | unsigned |  | NO | 0 |  |
| vp | int(10) | unsigned |  | NO | 0 |  |
| avatar | varchar(255) |  |  | NO | '' |  |
| language | varchar(255) |  |  | NO | english |  |
| created_at | datetime |  |  | YES | NULL |  |

## users_tokens

`users_tokens` — _Información de la tabla en la base de datos_

#### Estructura

| Campo | Tipo | Atributos | Clave | Nulo | Predeterminado | Comentario |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| user_id | bigint(20) | unsigned |  | NO |  |  |
| chooser | varchar(255) |  |  | NO |  |  |
| hash | varchar(255) |  |  | NO |  |  |
| type | enum('confirmation','password','remember') |  |  | NO |  |  |
| data | mediumtext |  |  | NO |  |  |
| created_at | datetime |  |  | YES | NULL |  |
| expired_at | datetime |  |  | YES | NULL |  |
