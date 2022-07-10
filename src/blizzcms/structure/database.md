---
title: Database
icon: bx bxs-data
order: 2
---

## bans

`bans` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| user_id | bigint(20) | unsigned |  | NO |  |  |
| banned_by | bigint(20) | unsigned |  | NO |  |  |
| reason | mediumtext |  |  | YES | NULL |  |
| revoked_by | bigint(20) | unsigned |  | NO | 0 |  |
| created_at | datetime |  |  | YES | NULL |  |
| unban_at | datetime |  |  | YES | NULL |  |

## logs

`logs` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| user_id | bigint(20) | unsigned |  | NO |  |  |
| ip | varchar(255) |  |  | YES | NULL |  |
| module | varchar(255) |  |  | YES | NULL |  |
| action | varchar(255) |  |  | NO |  |  |
| message | mediumtext |  |  | YES | NULL |  |
| data | mediumtext |  |  | YES | NULL |  |
| created_at | datetime |  |  | YES | NULL |  |

## menus

`menus` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| name | varchar(255) |  | UNI | NO |  |  |
| description | varchar(255) |  |  | YES | NULL |  |

## menus_items

`menus_items` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| menu_id | bigint(20) | unsigned |  | NO |  |  |
| name | varchar(255) |  |  | NO |  |  |
| url | varchar(255) |  |  | YES | NULL |  |
| target | enum('\_self','\_blank') |  |  | NO | \_self |  |
| icon | varchar(255) |  |  | YES | NULL |  |
| type | enum('link','dropdown') |  |  | NO | link |  |
| parent | bigint(20) | unsigned |  | NO | 0 |  |
| sort | bigint(20) | unsigned |  | NO | 0 |  |

## modules

`modules` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| module | varchar(255) |  | PRI | NO |  |  |
| version | varchar(255) |  |  | NO |  |  |

## news

`news` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| title | varchar(255) |  |  | YES | NULL |  |
| content | mediumtext |  |  | YES | NULL |  |
| slug | varchar(255) |  |  | NO |  |  |
| image | varchar(255) |  |  | YES | NULL |  |
| comments | bigint(20) | unsigned |  | NO | 0 |  |
| views | bigint(20) | unsigned |  | NO | 0 |  |
| meta_description | varchar(255) |  |  | YES |  |  |
| meta_robots | varchar(255) |  |  | YES |  |  |
| discuss | tinyint(1) | unsigned |  | NO | 0 |  |
| created_at | datetime |  |  | YES | NULL |  |

## news_comments

`news_comments` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| news_id | bigint(20) | unsigned |  | NO |  |  |
| user_id | bigint(20) | unsigned |  | NO |  |  |
| content | mediumtext |  |  | NO |  |  |
| created_at | datetime |  |  | YES | NULL |  |
| created_at | datetime |  |  | YES | NULL |  |

## pages

`pages` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| title | varchar(255) |  |  | YES | NULL |  |
| content | mediumtext |  |  | YES | NULL |  |
| slug | varchar(255) |  | UNI | NO |  |  |
| views | bigint(20) | unsigned |  | NO | 0 |  |
| meta_description | varchar(255) |  |  | YES | NULL |  |
| meta_robots | varchar(255) |  |  | YES | NULL |  |
| created_at | datetime |  |  | YES | NULL |  |
| updated_at | datetime |  |  | YES | NULL |  |

## permissions

`permissions` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| key | varchar(255) |  |  | NO |  |  |
| module | varchar(255) |  |  | NO |  |  |
| description | text |  |  | YES | NULL |  |
| created_at | datetime |  |  | YES | NULL |  |
| updated_at | datetime |  |  | YES | NULL |  |

## realms

`realms` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| name | varchar(255) |  |  | NO |  |  |
| max_cap | int(10) | unsigned |  | NO | 100 |  |
| char_hostname | varchar(255) |  |  | NO | 127.0.0.1 |  |
| char_username | varchar(255) |  |  | YES | NULL |  |
| char_password | text |  |  | YES | NULL |  |
| char_database | varchar(255) |  |  | NO | characters |  |
| char_port | smallint(6) | unsigned |  | NO | 3306 |  |
| console_hostname | varchar(255) |  |  | NO |  |  |
| console_username | varchar(255) |  |  | NO |  |  |
| console_password | text |  |  | NO |  |  |
| console_port | smallint(6) | unsigned |  | NO | 7878 |  |
| realm_hostname | varchar(255) |  |  | NO |  |  |
| realm_port | smallint(6) | unsigned |  | NO | 8085 |  |

## roles

`roles` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| name | varchar(255) |  | UNI | NO |  |  |
| description | varchar(255) |  |  | YES | NULL |  |
| created_at | datetime |  |  | YES | NULL |  |
| updated_at | datetime |  |  | YES | NULL |  |

## roles_permissions

`roles_permissions` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| role_id | bigint(20) | unsigned | PRI | NO |  |  |
| permission_id | bigint(20) |  | PRI | NO |  |  |

## slides

`slides` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| title | varchar(255) |  |  | NO |  |  |
| description | text |  |  | YES | NULL |  |
| type | enum('image','video','iframe') |  |  | NO | image |  |
| path | text |  |  | NO |  |  |
| sort | bigint(20) | unsigned |  | NO | 0 |  |

## throttle

`throttle` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| ip | varchar(255) |  | PRI | NO |  |  |
| attempts | tinyint(4) | unsigned |  | NO | 0 |  |
| expires_at | datetime |  |  | YES | NULL |  |

## users

`users` — _Information of the table in the DB_

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
| joined_at | datetime |  |  | YES | NULL |  |

## users_tokens

`users_tokens` — _Information of the table in the DB_

#### Structure

| Field | Type | Attributes | Key | Null | Default | Comment |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| id | bigint(20) | unsigned | PRI | NO | AUTO_INCREMENT |  |
| user_id | bigint(20) | unsigned |  | NO |  |  |
| chooser | varchar(255) |  |  | NO |  |  |
| hash | varchar(255) |  |  | NO |  |  |
| type | enum('confirmation','password','remember') |  |  | NO | confirmation |  |
| data | mediumtext |  |  | YES | NULL |  |
| created_at | datetime |  |  | YES | NULL |  |
| expired_at | datetime |  |  | YES | NULL |  |
