---
title: How to disable strict mode
icon: bx bx-radio-circle-marked
order: 1
---

The following guide will explain step by step how to check **strict mode** in MySQL/MariaDB and how to disable the values needed to run BlizzCMS.

## Prerequisites

Before you get started, ensure you have the following:

- An instance with **MySQL/MariaDB**

## Step 1: Check strict mode

By default MySQL/MariaDB has strict mode enabled, so we need to check if the values `NO_ZERO_IN_DATE` and `NO_ZERO_DATE` exist. To do this we will execute the following SQL statement:

```sql
SHOW VARIABLES LIKE 'sql_mode';
```

If those values **don't exist**, continue with the CMS installation; otherwise, continue to the next step in this guide.

## Step 2: Change strict mode

To remove the values in the strict mode, find the file my.ini or my.cnf and the following lines inside it:

```
[mysqld]
sql_mode=NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
```

::: tip TIP
The most common locations for my.ini or my.cnf file are:

Windows:

- %PROGRAMDATA%\MySQL\MySQL Server X.X\my.ini or my.cnf

Linux:

- /etc/my.cnf
- /etc/mysql/my.cnf

:::

Remove the `NO_ZERO_IN_DATE` and `NO_ZERO_DATE` values in the line and save it.

```
[mysqld]
sql_mode=ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
```

Finally restart your MySQL/MariaDB and proceed the installation.

::: warning NOTICES
If the `sql_mode=` line under **[mysqld]** does not exist, add it.
:::
