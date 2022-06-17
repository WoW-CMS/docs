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
- **PHP 7.4** or higher recommended
    - Enable extensions: bcmath - curl - gd - gmp - intl - mbstring - mysqli - openssl - soap - zip
- **Composer 2.3+**

::: info INFORMATION
The CMS requires that you have a wow server pre-installed with its respective databases.
:::

If you still do not have the prerequisites installed, you can see the following guides to install them:

### Guides for Linux

- [How to Install LAMP Stack](../blizzcms/guides/linux/lamp-stack.md)
- [How to Install LEMP Stack](../blizzcms/guides/linux/lemp-stack.md)
- [How to Install Composer](../blizzcms/guides/linux/composer.md)

## Manual Installation

If you have chosen the manual option follow these simple steps:

### Step 1: Download CMS

Download the [latest version](https://github.com/WoW-CMS/BlizzCMS/releases), and extract it in the folder where the root of your website will be.

### Step 2: Install dependencies

Then in the root folder of your website, use the following command to install the dependencies:

```bash
composer install --no-plugins --no-scripts
```

### Step 3: Set file and folder permissions

We strongly recommend that you set permission `755` for all folders and permission `644` for files.

With this last step done, you can now open your browser with your **IP** or **Domain** to continue the installation process in the CMS.
