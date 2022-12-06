---
title: Database
icon: bx bxs-data
order: 2
---

## bans

`bans` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| type | enum('email','ip','user') |  |  | NO |  |  |
| value | varchar(255) |  |  | NO |  |  |
| reason | mediumtext |  |  | NO |  |  |
| start_at | datetime |  |  | NO | 0000-00-00 00:00:00 |  |
| end_at | datetime |  |  | NO | 0000-00-00 00:00:00 |  |

## logs

`logs` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
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

`menus` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| name | varchar(255) |  | UNI | NO |  |  |
| description | varchar(255) |  |  | NO |  |  |

## menus_items

`menus_items` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
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

`modules` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| module | varchar(255) |  | PRI | NO |  |  |
| version | varchar(255) |  |  | NO |  |  |

## news

`news` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
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
| meta_robots | varchar(255) |  |  | NO |  | index, follow |
| discuss | tinyint(1) | unsigned |  | NO | 0 |  |
| created_at | datetime |  |  | YES | NULL |  |
| updated_at | datetime |  |  | YES | NULL |  |

## news_comments

`news_comments` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| news_id | bigint(20) | unsigned |  | NO |  |  |
| user_id | bigint(20) | unsigned |  | NO |  |  |
| comment_content | mediumtext |  |  | NO |  |  |
| created_at | datetime |  |  | YES | NULL |  |
| created_at | datetime |  |  | YES | NULL |  |

## pages

`pages` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
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

`pageviews` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| ip | varchar(255) |  |  | NO |  |  |
| uri | varchar(255) |  |  | NO |  |  |
| platform | varchar(255) |  |  | NO |  |  |
| browser | varchar(255) |  |  | NO |  |  |
| is_mobile | tinyint(1) | unsigned |  | NO | 0 |  |
| created_at | datetime |  |  | YES | NULL |  |

## permissions

`permissions` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| key | varchar(255) |  |  | NO |  |  |
| module | varchar(255) |  |  | NO |  |  |
| description | text |  |  | NO |  |  |

## realms

`realms` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
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

`roles` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| name | varchar(255) |  | UNI | NO |  |  |
| description | varchar(255) |  |  | NO |  |  |

## roles_permissions

`roles_permissions` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| role_id | bigint(20) | unsigned | PRI | NO |  |  |
| permission_id | bigint(20) |  | PRI | NO |  |  |

## slides

`slides` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| title | varchar(255) |  |  | NO |  |  |
| description | text |  |  | NO |  |  |
| type | enum('image','video','iframe') |  |  | NO | image |  |
| path | text |  |  | NO |  |  |
| sort | bigint(20) | unsigned |  | NO | 0 |  |

## throttle

`throttle` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| ip | varchar(255) |  | PRI | NO |  |  |
| attempts | tinyint(4) | unsigned |  | NO | 0 |  |
| reset_at | datetime |  |  | YES | NULL |  |
| unlock_at | datetime |  |  | YES | NULL |  |

## users

`users` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
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

`users_tokens` — _Information of the table in the database_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| user_id | bigint(20) | unsigned |  | NO |  |  |
| chooser | varchar(255) |  |  | NO |  |  |
| hash | varchar(255) |  |  | NO |  |  |
| type | enum('confirmation','password','remember') |  |  | NO |  |  |
| data | mediumtext |  |  | NO |  |  |
| created_at | datetime |  |  | YES | NULL |  |
| expired_at | datetime |  |  | YES | NULL |  |
