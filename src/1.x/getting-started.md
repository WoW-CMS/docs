---
title: Getting Started
icon: bx bxs-book-open
order: 2
---

Welcome, we are glad that you are interested in installing BlizzCMS. For this, you will be guided on how to install the CMS with different methods depending on the familiarity you have with them.

## Prerequisites

Before you get started, ensure you have the following:

- Web Server (**Apache**/**Nginx**)
    - Enable modules: mod_headers - mod_rewrite - mod_expires
- **MySQL 5.7+** or **MariaDB 10.6+**
- **PHP 7.4** or newer recommended
    - Enable extensions: curl - gd - gmp - mbstring - mysqli - openssl - soap

::: note
The CMS requires that you have a World of Wacraft server pre-installed with its respective databases.
:::

## Manual Installation

1. Download the [latest version v1.x](https://github.com/WoW-CMS/BlizzCMS/releases), and extract it where the root of your site will be.

2. Lastly, set permission `755` for all folders and permission `644` for all files in your site root

:tada: Now open a browser tab with your **IP/Domain** to continue the installation process

## Installation with Git

1. Open a shell and execute the following commands to clone the repository

    ```bash
    cd <site directory>

    git clone -b 1.x https://github.com/WoW-CMS/BlizzCMS.git
    ```

2. Lastly, set permission `755` for all folders and permission `644` for all files in your site root

:tada: Now open a browser tab with your **IP/Domain** to continue the installation process
