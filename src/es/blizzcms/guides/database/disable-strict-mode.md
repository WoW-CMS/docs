---
title: Cómo deshabilitar el modo estricto
icon: bx bx-radio-circle-marked
order: 1
---

La siguiente guía explicará paso a paso cómo verificar el **modo estricto** en MySQL/MariaDB y cómo deshabilitar los valores necesarios para ejecutar BlizzCMS.

## Requisitos Previos

Antes de comenzar, asegúrese de tener lo siguiente:

- Una instancia con **MySQL/MariaDB**

## Paso 1: Verificar el modo estricto

De manera predeterminada MySQL/MariaDB tiene habilitado el modo estricto, por lo que debemos verificar si existen los valores `NO_ZERO_IN_DATE`, `NO_ZERO_DATE` y `STRICT_TRANS_TABLES`. Para ello ejecutaremos la siguiente sentencia SQL:

```sql
SHOW VARIABLES LIKE 'sql_mode';
```

Si esos valores **no existen**, continúe con la instalación del CMS; de lo contrario, continúe con el próximo paso de esta guía.

## Paso 2: Cambiar el modo estricto

Para eliminar los valores en el modo estricto, busque el archivo `my.ini` o `my.cnf` y las siguientes líneas dentro de él:

```
[mysqld]
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
```

::: tip CONSEJO
Las ubicaciones más comunes para el archivo my.ini o my.cnf son:

Windows:

- %PROGRAMDATA%\MySQL\MySQL Server X.X\my.ini or my.cnf

Linux:

- /etc/my.cnf
- /etc/mysql/my.cnf

:::

Elimine los valores `NO_ZERO_IN_DATE`, `NO_ZERO_DATE` y `STRICT_TRANS_TABLES` de la línea y guárdelo.

```
[mysqld]
sql_mode=ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
```

Finalmente reinicie su MySQL/MariaDB y continúe con la instalación.

::: warning AVISO
Si la línea `sql_mode=` debajo de **[mysqld]** no existe, agréguela.
:::
