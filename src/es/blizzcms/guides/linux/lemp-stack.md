---
title: Cómo instalar LEMP Stack
icon: bx bx-radio-circle-marked
order: 2
---

La siguiente guía explicará paso a paso la instalación del stack **LEMP** con los requisitos necesarios para ejecutar BlizzCMS.

## Requisitos Previos

Antes de comenzar, asegúrese de tener lo siguiente:

- Una instancia con **Linux OS** (Debian/Ubuntu/Rocky)
- Un usuario root o usuario sudo configurado

Ahora comencemos :nerd_face:

## Paso 1: Instalar Nginx

Comenzaremos con la instalación del paquete para Nginx que es la característica sobresaliente de este stack, por lo que dependiendo de tu sistema operativo ejecuta el siguiente comando:

::: tabs#os

@tab:active Debian

```bash
sudo apt install nginx
```

@tab Rocky

```bash
sudo dnf install nginx
```

:::

Una vez instalado, lo habilitaremos para que se inicie automáticamente al reiniciar con:

::: tabs#os

@tab:active Debian

```bash
sudo systemctl enable nginx
```

@tab Rocky

```bash
sudo systemctl enable nginx --now
```

:::

Por último, comprobaremos que el servicio activado no tiene errores con:

::: tabs#os

@tab:active Debian

```bash
sudo systemctl status nginx
```

@tab Rocky

```bash
sudo systemctl status nginx
```

:::

**Para una doble verificación**, puede abrir su navegador y usar la IP de su instancia con la que se mostrará una página predeterminada.

```
http://tu-direccion-ip
```

## Paso 2: Instalar MariaDB

Ahora procederemos con la instalación de MariaDB ejecutando lo siguiente:

::: tabs#os

@tab:active Debian

```bash
sudo apt install mariadb-server
```

@tab Rocky

```bash
sudo dnf install mariadb-server
```

:::

Una vez instalado, lo habilitaremos para que se inicie automáticamente al reiniciar con:

::: tabs#os

@tab:active Debian

```bash
sudo systemctl enable mariadb
```

@tab Rocky

```bash
sudo systemctl enable mariadb
```

:::

Luego verificaremos que el servicio activado no tenga errores con:

::: tabs#os

@tab:active Debian

```bash
sudo systemctl status mariadb
```

@tab Rocky

```bash
sudo systemctl status mariadb
```

:::

### Mejorar la seguridad

Para aumentar la seguridad de nuestra instalación de MariaDB ejecutaremos lo siguiente:

```bash
sudo mysql_secure_installation
```

El script le pedirá que configure la contraseña para el usuario root, elimine el usuario anónimo, restrinja el acceso del usuario root a la máquina local y elimine la base de datos de prueba. Al final, la secuencia de comandos volverá a cargar las tablas de privilegios para garantizar que todos los cambios surtan efecto de inmediato.

::: tip CONSEJO
Todos los pasos se explican en detalle y se recomienda responder "Y" (yes) a todas las preguntas.
:::

### Crear una base de datos

Después de terminar con la instalación y mejora de la seguridad de MariaDB vamos a crear una base de datos para el CMS. Para crear la base de datos iniciaremos sesión en MariaDB con:

```bash
mysql -u root -p
```

Ahora debe ejecutar esta instrucción SQL para crear la base de datos.

```sql
CREATE DATABASE mycms_db;
```

::: warning AVISO
Recuerde cambiar **mycms_db** por el nombre que desee.
:::

### Crear un usuario y otorgar permisos

Una vez finalizada la creación de la base de datos, necesitamos acceder a ella, por lo que crearemos un usuario que solo tendrá acceso a través de localhost.

Para eso, primero crearemos el usuario con la siguiente sentencia SQL:

```sql
CREATE USER 'new-user'@'localhost' IDENTIFIED BY 'password';
```

::: warning AVISO
Recuerda cambiar **new-user** y **password** a lo que quieras.
:::

Luego otorgaremos los permisos al usuario sobre la base de datos con la siguiente instrucción SQL:

```sql
GRANT ALL ON mycms_db.* TO 'new-user'@'localhost' IDENTIFIED BY 'password';
```

::: warning AVISO
Recuerde cambiar **mycms_db**, **new-user** y **password** por los elegidos anteriormente.
:::

Por último, para que los datos recién añadidos surtan efecto, ejecutaremos las siguientes sentencias:

```sql
FLUSH PRIVILEGES;
exit;
```

## Paso 3: Instalar PHP

Como último paso, instalaremos PHP. Por lo que ejecutaremos los siguientes comandos para instalar todas las extensiones necesarias:

::: tabs#os

@tab:active Debian

```bash
sudo apt install -y php php7.4-{fpm,bcmath,cli,curl,gd,gmp,intl,json,mbstring,mysqlnd,openssl,soap,xml,zip}
```

@tab Rocky

```bash
sudo dnf install -y php php-{fpm,bcmath,cli,curl,gd,gmp,intl,json,mbstring,mysqlnd,openssl,soap,xml,zip}
```

:::
