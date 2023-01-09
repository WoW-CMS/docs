---
title: How to Install LEMP Stack
icon: bx bx-radio-circle-marked
order: 2
---

The following guide will explain step by step the installation of the **LEMP** stack with the necessary requirements to run BlizzCMS.

## Prerequisites

Before you get started, ensure you have the following:

- An instance with **Linux OS** (Debian/Rocky)
- A root user or sudo user configured

Now let's start :nerd_face:

## Step 1: Install Nginx

We will start with the installation of the package for Nginx which is the outstanding feature of this stack, so depending on your operating system follow the instructions below:

::: tabs#os

@tab:active Debian

First of all, we will install the Nginx package with the command:

```bash
sudo apt install nginx
```

Once installed, We will enable it to automatically start on reboot with:

```bash
sudo systemctl enable nginx
```

Lastly, we will verify that the activated service has no errors with:

```bash
sudo systemctl status nginx
```

@tab Rocky

First of all, we will install the Nginx package with the command:

```bash
sudo dnf install nginx
```

Once installed, We will enable it to automatically start on reboot with:

```bash
sudo systemctl enable nginx
```

Lastly, we will verify that the activated service has no errors with:

```bash
sudo systemctl status nginx
```

:::

**For a double verification**, you can open your browser and use the IP of your instance with which a default page will be displayed.

```
http://your-ip-address
```

## Step 2: Install MariaDB

Now we will continue with the installation of MariaDB. To do this, follow the instructions below depending on your operating system.

::: tabs#os

@tab:active Debian

First of all, we will install the MariaDB package with the command:

```bash
sudo apt install mariadb-server
```

Once installed, We will enable it to automatically start on reboot with:

```bash
sudo systemctl enable mariadb
```

Next, we will verify that the activated service has no errors with:

```bash
sudo systemctl status mariadb
```

@tab Rocky

First of all, we will install the MariaDB package with the command:

```bash
sudo dnf install mariadb-server
```

Once installed, We will enable it to automatically start on reboot with:

```bash
sudo systemctl enable mariadb
```

Next, we will verify that the activated service has no errors with:

```bash
sudo systemctl status mariadb
```

:::

### Improve security

To increase the security of our MariaDB installation we will run the following:

```bash
sudo mysql_secure_installation
```

The script will ask you to set the password for the root user, remove the anonymous user, restrict the root user's access to the local machine, and remove the test database. In the end, the script will reload the privilege tables ensuring that all changes take effect immediately.

::: tip
All steps are explained in detail and it is recommended to answer "Y" (yes) to all questions.
:::

### Create a Database

After finishing with the installation and security improvement for MariaDB we are going to create a database for the CMS. To create the database we will log in to MariaDB with:

```bash
mysql -u root -p
```

Now you should run this SQL statement to create the database.

```sql
CREATE DATABASE mycms_db;
```

::: warning
Remember to change **mycms_db** to whatever name you want.
:::

### Create a User and Grant Permissions

Once the creation of the database is finished, we need access to it, so we will create a user who will only have access through **localhost**.

For that, we will first create the user with the following SQL statement:

```sql
CREATE USER 'new-user'@'localhost' IDENTIFIED BY 'password';
```

::: warning
Remember to change **new-user** and **password** to whatever you want.
:::

Next, we will grant the permissions to the user on the database with the following SQL statement:

```sql
GRANT ALL PRIVILEGES ON mycms_db.* TO 'new-user'@'localhost';
```

::: warning
Remember to change **mycms_db**, **new-user** and **password** for those chosen above.
:::

Lastly, for the newly added data to take effect, we will execute the following statements:

```sql
FLUSH PRIVILEGES;
exit;
```

## Step 3: Install PHP

As the last step, we will install PHP. To do this, follow the instructions below depending on your operating system.

::: tabs#os

@tab:active Debian

First of all, we will install the required dependencies with the command:

```bash
sudo apt install -y lsb-release apt-transport-https ca-certificates
```

Once installed, we download the necessary GPG key for the repository of PHP packages:

```bash
wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
```

Next, we will add the repository for PHP packages to the server:

```bash
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/php.list
```

We make sure that the operating system recognizes the addition of the repository and is up to date:

```bash
sudo apt update
```

Lastly, we will install PHP with the necessary extensions:

```bash
sudo apt install -y php8.0 php8.0-{fpm,bcmath,cli,curl,gd,gmp,json,mbstring,mysqlnd,openssl,soap,xml,zip}
```

@tab Rocky

First of all, we will add the EPEL and Remi repositories for PHP 8 packages with the following commands:

```bash
sudo dnf install epel-release -y
sudo dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
```

We make sure that the operating system recognizes the addition of the repositories and is up to date:

```bash
sudo apt update
```

Next, we will reset PHP from its default module to enable PHP packages from the Remi repository:

```bash
sudo dnf module reset php
```

We enable PHP from the Remi repository:

```bash
sudo dnf module enable php:remi-8.0
```

Lastly, we will install PHP with the necessary extensions:

```bash
sudo dnf install -y php php-{fpm,bcmath,cli,curl,gd,gmp,json,mbstring,mysqlnd,openssl,soap,xml,zip}
```

:::
