---
title: Cómo instalar Composer
icon: bx bx-radio-circle-marked
order: 3
---

La siguiente guía explicará la instalación de **Composer**, un requisito necesario para ejecutar BlizzCMS.

## Requisitos Previos

Antes de comenzar, asegúrese de tener lo siguiente:

- Una instancia con **Linux OS**
- Un usuario root o usuario sudo configurado
- Paquete PHP instalado

Ahora comencemos :nerd_face:

## Instalación

En primer lugar, descargue la última versión del script de instalación de PHP Composer ejecutando el siguiente comando:

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
```

Después de descargar el script, ejecute el siguiente comando para verificar su firma y asegurarse de que el archivo no esté dañado.

```bash
php -r "if (hash_file('sha384', 'composer-setup.php') === 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```

::: info
El hash de la firma **(SHA-384)** cambia en cada nueva versión, así que asegúrese de tener la firma actual en esta [página](https://composer.github.io/pubkeys.html).
:::

Cuando finalice la verificación del script, proceda a instalar composer globalmente ejecutando el siguiente comando:

```bash
php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

Luego para eliminar el instalador ejecutaremos el siguiente comando:

```bash
php -r "unlink('composer-setup.php');"
```

Por último, para verificar que composer funciona, ejecute el siguiente comando:

```bash
composer
```
