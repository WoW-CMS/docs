---
title: Cómo instalar Composer
icon: bx bx-radio-circle-marked
order: 3
---

En la siguiente guía, explicaremos la instalación de **Composer**, un requisito necesario para ejecutar BlizzCMS.

## Requisitos Previos

Antes de comenzar, asegúrese de tener lo siguiente:

- Una instancia con **Linux OS**
- Un usuario root o usuario sudo configurado
- Paquete PHP instalado

Ahora comencemos :nerd_face:

## Instalando Composer PHP

Primero, descargaremos la última versión del script de instalación de PHP Composer ejecutando el siguiente comando:

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
```

Después de descargar el script, ejecutaremos el siguiente comando para verificar su firma y asegurarnos de que el archivo no esté dañado.

```bash
php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```

::: info INFORMACIÓN
El hash de la firma **(SHA-384)** cambia en cada nueva versión, así que asegúrese de tener la firma actual en esta [página](https://composer.github.io/pubkeys.html).
:::

Cuando terminemos de verificar el script, procederemos a instalar composer de forma global ejecutando el siguiente comando:

```bash
php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

Luego eliminaremos el instalador con el siguiente comando:

```bash
php -r "unlink('composer-setup.php');"
```

Por último, para verificar el funcionamiento ejecutaremos el siguiente comando:

```bash
composer
```
