---
title: How to Install LAMP Stack
icon: bx bx-radio-circle-marked
order: 1
---

The following guide will explain step by step the installation of the **LAMP** stack with the necessary requirements to run BlizzCMS.

## Prerequisites

Before you get started, ensure you have the following:

- An instance with **Linux OS** (Debian/Ubuntu/Rocky)
- A root user or sudo user configured

Now let's start :nerd_face:

## Step 1: Install Apache

We will start with the installation of the package for Apache, so depending on your operating system run the following command:

::: tabs#os

@tab:active Debian

```bash
sudo apt install apache2
```

@tab Rocky

```bash
sudo dnf install httpd
```

:::

Once installed, We will enable it to automatically start on reboot with:

::: tabs#os

@tab:active Debian

```bash
sudo systemctl enable apache2
```

@tab Rocky

```bash
sudo systemctl enable httpd --now
```

:::

Lastly, we will verify that the activated service has no errors with:

::: tabs#os

@tab:active Debian

```bash
sudo systemctl status apache2
```

@tab Rocky

```bash
sudo systemctl status httpd
```

:::

**For a double verification**, you can open your browser and use the IP of your instance with which a default page will be displayed.

```
http://your-ip-address
```

## Step 2: Install MariaDB

Now we will proceed with the installation of MariaDB by running the following:

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

Once installed, We will enable it to automatically start on reboot with:

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

Then we will verify that the activated service has no errors with:

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

### Improve security

To increase the security of our MariaDB installation we will run the following:

```bash
sudo mysql_secure_installation
```

The script will ask you to set the password for the root user, remove the anonymous user, restrict the root user's access to the local machine, and remove the test database. In the end, the script will reload the privilege tables ensuring that all changes take effect immediately.

::: tip TIP
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

::: warning NOTICES
Remember to change **mycms_db** to whatever name you want.
:::

### Create a User and Grant Permissions

Once the creation of the database is finished, we need access to it, so we will create a user who will only have access through localhost.

For that, we will first create the user with the following SQL statement:

```sql
CREATE USER 'new-user'@'localhost' IDENTIFIED BY 'password';
```

::: warning NOTICES
Remember to change **new-user** and **password** to whatever you want.
:::

Then we will grant the permissions to the user on the database with the following SQL statement:

```sql
GRANT ALL ON mycms_db.* TO 'new-user'@'localhost' IDENTIFIED BY 'password';
```

::: warning NOTICES
Remember to change **mycms_db**, **new-user** and **password** for those chosen above.
:::

Lastly, for the newly added data to take effect, we will execute the following statements:

```sql
FLUSH PRIVILEGES;
exit;
```

## Step 3: Install PHP

As the last step, we will install PHP. so we will run the following commands to install all the necessary extensions:

::: tabs#os

@tab:active Debian

```bash
sudo apt install -y php php7.4-{bcmath,cli,curl,gd,gmp,intl,json,mbstring,mysqlnd,openssl,soap,xml,zip}
```

@tab Rocky

```bash
sudo dnf install -y php php-{bcmath,cli,curl,gd,gmp,intl,json,mbstring,mysqlnd,openssl,soap,xml,zip}
```

:::
