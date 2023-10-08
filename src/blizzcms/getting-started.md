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
    - Enable extensions: bcmath - curl - gd - gmp - intl - mbstring - mysqli - openssl - soap - zip
- **Composer 2.6+**

::: note
The CMS requires that you have a World of Wacraft server pre-installed with its respective databases.
:::

::: warning
You must have **strict mode** disabled in MySQL/MariaDB to the values `NO_ZERO_IN_DATE`, `NO_ZERO_DATE` and `STRICT_TRANS_TABLES`. To check and disable it, you can follow the guide below [How to disable strict mode](../blizzcms/guides/database/disable-strict-mode.md)
:::

If you still do not have the prerequisites installed, you can see the following guides to install them:

### Guides for Linux

- [How to Install LAMP Stack](../blizzcms/guides/linux/lamp-stack.md)
- [How to Install LEMP Stack](../blizzcms/guides/linux/lemp-stack.md)
- [How to Install Composer](../blizzcms/guides/linux/composer.md)

## Manual Installation

1. Download the [latest version](https://github.com/WoW-CMS/BlizzCMS/releases), and extract it where the root of your site will be.

2. Open a shell and execute the following commands to install the dependencies

    ```bash
    cd site-directory

    composer install --no-plugins --no-scripts
    ```

3. Lastly, set permission `755` for all folders and permission `644` for all files in your site root

:tada: Now open a browser tab with your **IP/Domain** to continue the installation process

## Installation with Git

1. Open a shell and execute the following commands to clone the repository

    ```bash
    cd site-directory

    git clone https://github.com/WoW-CMS/BlizzCMS.git
    ```

2. Execute the following command to install the dependencies

    ```bash
    composer install --no-plugins --no-scripts
    ```

3. Lastly, set permission `755` for all folders and permission `644` for all files in your site root

:tada: Now open a browser tab with your **IP/Domain** to continue the installation process

## Installation with Docker

1. Open a shell and execute the following commands to clone the repository

    ```bash
    cd site-directory

    git clone https://github.com/WoW-CMS/BlizzCMS.git
    ```

2. Edit the file `.env.example` with your data and rename it to `.env`

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

3. Execute the following command to build the docker image

    ```bash
    docker-compose build
    ```

4. After finishing building the image, execute the following command to start the container

    ```bash
    docker-compose up -d
    ```

5. Lastly, execute the following command to install the dependencies

    ```bash
    docker exec -d blizzcms-webserver composer install --no-plugins --no-scripts --no-interaction --no-progress
    ```

:tada: Now open a browser tab with your **IP/Domain** to continue the installation process
