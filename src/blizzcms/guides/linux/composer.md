---
title: How to Install Composer
icon: bx bx-radio-circle-marked
order: 3
---

The following guide will explain the installation of  **Composer** a necessary requirement to run BlizzCMS.

## Prerequisites

Before you get started, ensure you have the following:

- An instance with **Linux OS**
- A root user or sudo user configured
- PHP package installed

Now let's start :nerd_face:

## Installation

First of all, download the latest version of the PHP Composer installation script by running the following command:

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
```

After downloading the script, run the following command to verify its signature and ensure that the file is not corrupt.

```bash
php -r "if (hash_file('sha384', 'composer-setup.php') === 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```

::: info
The signature hash **(SHA-384)** is changed in each new version, so make sure you have the current signature on this [page](https://composer.github.io/pubkeys.html).
:::

When the script verification is done, proceed to install composer globally by running the following command:

```bash
php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

Then to delete the installer we will execute the following command:

```bash
php -r "unlink('composer-setup.php');"
```

Lastly, to verify that composer works, run the following command:

```bash
composer
```
