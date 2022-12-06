---
title: Getting Started
icon: bx bxs-book-open
order: 2
---

Welcome, we are glad that you are interested in installing BlizzCMS. For this, you will be guided on how to install the CMS with different methods depending on the familiarity you have with them.

## Prerequisites

Before you get started, ensure you have the following:

- Web Server (**Apache**/**Nginx**)
    - Enable modules: mod_headers - mod_rewrite
- **MySQL 5.7+** or **MariaDB 10.6+**
- **PHP 7.4** or newer recommended
    - Enable extensions: bcmath - curl - gd - gmp - mbstring - mysqli - openssl - soap - zip
- **Composer 2.4+**

::: info INFORMATION
The CMS requires that you have a wow server pre-installed with its respective databases.
:::

::: danger WARNING
You must have **strict mode** disabled in MySQL/MariaDB to the values `NO_ZERO_IN_DATE`, `NO_ZERO_DATE` and `STRICT_TRANS_TABLES`. To check and disable it, you can follow the guide below [How to disable strict mode](../blizzcms/guides/database/disable-strict-mode.md)
:::

If you still do not have the prerequisites installed, you can see the following guides to install them:

### Guides for Linux

- [How to Install LAMP Stack](../blizzcms/guides/linux/lamp-stack.md)
- [How to Install LEMP Stack](../blizzcms/guides/linux/lemp-stack.md)
- [How to Install Composer](../blizzcms/guides/linux/composer.md)

## Installation

Choose one of the following forms in which you can install the CMS:

::: tabs#installations

@tab:active Manual

First, download the [latest version](https://github.com/WoW-CMS/BlizzCMS/releases) and extract it to the folder where the root of your site will be.

Then, inside your site root directory, use the following command to install the dependencies:

```bash
composer install --no-plugins --no-scripts
```

Lastly, set the `755` permission for all folders and the `644` permission for files.

:tada: Now you can open the browser with your **IP/Domain** to continue the installation process.

@tab Git

First, clone the CMS repository with the following command:

```bash
git clone https://github.com/WoW-CMS/BlizzCMS.git
```

Then, inside the newly created directory we will use the following command to install dependencies:

```bash
composer install --no-plugins --no-scripts
```

Lastly, set the `755` permission for all folders and the `644` permission for files.

:tada: Now you can open the browser with your **IP/Domain** to continue the installation process.

@tab Docker

First, clone the CMS repository with the following command:

```bash
git clone https://github.com/WoW-CMS/BlizzCMS.git
```

Then, inside the newly created directory edit the `.env.example` file with your data and rename it to `.env`

```
APP_NAME=blizzcms
APP_PORT=<Webserver port>
APP_DB_ADMIN_PORT=<PHPMyAdmin port>
DB_PORT=<MariaDB port>

MYSQL_ROOT_PASS=<Root password>
MYSQL_USER=<New user>
MYSQL_PASS=<User password>
MYSQL_DB=<Database name>
```

Next, build the docker image with the command:

```bash
docker-compose build
```

After you finish building the image, start the container with the following command:

```bash
docker-compose up -d
```

Lastly, to install the dependencies use the following command:

```bash
docker exec -d blizzcms-webserver composer install --no-plugins --no-scripts --no-interaction --no-progress
```

:tada: Now you can open the browser with your **IP/Domain** to continue the installation process.

:::
