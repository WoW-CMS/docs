---
title: How to Install Composer
icon: bx bx-radio-circle-marked
order: 3
---

In the following guide, we will explain the installation of  **Composer** a necessary requirement to run BlizzCMS.

## Prerequisites

Before you get started, ensure you have the following:

- An instance with **Linux OS**
- A root user or sudo user configured
- PHP package installed

Now let's start :nerd_face:

## Installing PHP Composer

First, we will download the latest version of the PHP Composer installation script by running the following command:

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
```

After downloading the script, we will run the following command to verify its signature and ensure that the file is not corrupt.

```bash
php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```

::: info INFORMATION
The signature hash **(SHA-384)** is changed in each new version, so make sure you have the current signature on this [page](https://composer.github.io/pubkeys.html).
:::

When we finish verifying the script, we will proceed to install composer globally by running the following command:

```bash
php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

Then we will delete the installer with the following command:

```bash
php -r "unlink('composer-setup.php');"
```

Lastly, to verify the operation we will execute the following command:

```bash
composer
```
