---
title: Cómo instalar LAMP Stack
icon: bx bx-radio-circle-marked
order: 1
---

La siguiente guía explicará paso a paso la instalación del stack **LAMP** con los requisitos necesarios para ejecutar BlizzCMS.

## Requisitos Previos

Antes de comenzar, asegúrese de tener lo siguiente:

- Una instancia con **Linux OS** (Debian/Rocky)
- Un usuario root o usuario sudo configurado

Ahora comencemos :nerd_face:

## Paso 1: Instalar Apache

Comenzaremos con la instalación del paquete para Apache, por lo que dependiendo de tu sistema operativo sigue las siguientes instrucciones:

::: tabs#os

@tab:active Debian

En primer lugar, instalaremos el paquete Apache con el comando:

```bash
sudo apt install apache2
```

Una vez instalado, lo habilitaremos para que se inicie automáticamente al reiniciar con:

```bash
sudo systemctl enable apache2
```

Por último, comprobaremos que el servicio activado no tiene errores con:

```bash
sudo systemctl status apache2
```

@tab Rocky

En primer lugar, instalaremos el paquete Apache con el comando:

```bash
sudo dnf install httpd
```

Una vez instalado, lo habilitaremos para que se inicie automáticamente al reiniciar con:

```bash
sudo systemctl enable httpd
```

Por último, comprobaremos que el servicio activado no tiene errores con:

```bash
sudo systemctl status httpd
```

:::

**Para una doble verificación**, puede abrir su navegador y usar la IP de su instancia con la que se mostrará una página predeterminada.

```
http://tu-direccion-ip
```

## Paso 2: Instalar MariaDB

Ahora continuaremos con la instalación de MariaDB. Para hacer esto, siga las instrucciones a continuación dependiendo de su sistema operativo.

::: tabs#os

@tab:active Debian

En primer lugar, instalaremos el paquete MariaDB con el comando:

```bash
sudo apt install mariadb-server
```

Una vez instalado, lo habilitaremos para que se inicie automáticamente al reiniciar con:

```bash
sudo systemctl enable mariadb
```

A continuación, verificaremos que el servicio activado no tenga errores con:

```bash
sudo systemctl status mariadb
```

@tab Rocky

En primer lugar, instalaremos el paquete MariaDB con el comando:

```bash
sudo dnf install mariadb-server
```

Una vez instalado, lo habilitaremos para que se inicie automáticamente al reiniciar con:

```bash
sudo systemctl enable mariadb
```

A continuación, verificaremos que el servicio activado no tenga errores con:

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

A continuación, otorgaremos los permisos al usuario sobre la base de datos con la siguiente instrucción SQL:

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

Como último paso, instalaremos PHP. Para hacer esto, siga las instrucciones a continuación dependiendo de su sistema operativo.

::: tabs#os

@tab:active Debian

En primer lugar, instalaremos las dependencias requeridas con el comando:

```bash
sudo apt install -y lsb-release apt-transport-https ca-certificates
```

Una vez instalado, descargamos la clave GPG necesaria para el repositorio de paquetes de PHP:

```bash
wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
```

A continuación, agregaremos el repositorio de paquetes PHP al servidor:

```bash
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/php.list
```

Nos aseguramos de que el sistema operativo reconozca la adición del repositorio y esté actualizado:

```bash
sudo apt update
```

Por último, instalaremos PHP con las extensiones necesarias:

```bash
sudo apt install -y php8.0 php8.0-{bcmath,cli,curl,gd,gmp,json,mbstring,mysqlnd,openssl,soap,xml,zip}
```

@tab Rocky

En primer lugar, Agregaremos los repositorios de EPEL y Remi para paquetes de PHP 8 con los siguientes comandos:

```bash
sudo dnf install epel-release -y
sudo dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
```

Nos aseguramos de que el sistema operativo reconozca la adición de los repositorios y esté actualizado:

```bash
sudo apt update
```

A continuación, restableceremos PHP desde su módulo predeterminado para habilitar los paquetes de PHP desde el repositorio de Remi:

```bash
sudo dnf module reset php
```

Habilitamos PHP desde el repositorio de Remi:

```bash
sudo dnf module enable php:remi-8.0
```

Por último, instalaremos PHP con las extensiones necesarias:

```bash
sudo dnf install -y php php-{bcmath,cli,curl,gd,gmp,json,mbstring,mysqlnd,openssl,soap,xml,zip}
```

:::
