---
title: Cómo configurar la tienda
icon: bx bx-radio-circle-marked
order: 2
---

La siguiente guía explicará cómo **configurar la tienda** para vender items en BlizzCMS Plus.

## Requisitos Previos

Antes de comenzar, asegúrese de tener lo siguiente:

- Un [reino](../guides/create-realm.md) en el **Panel de Administración**

Ahora comencemos :nerd_face:

## Configuración

Antes de comenzar con los pasos, ve al **Panel de Administración** y en el menú selecciona la opción tienda, dentro encontrarás un submenú que contiene las rutas para categorías, artículos, registros, etc.

### Crear una categoría

Como primer paso procederemos a crear una categoría, por lo que en la ruta de categorías seleccionamos el botón con el icono de un bolígrafo que te redireccionará a este formulario:

![Crear categoria](/assets/images/create-category-v1.png)

- **Name:** Nombre de la categoría (e.g., monturas)
- **Realm:** Seleccione uno de los reinos disponibles creados previamente
- **Type:** Seleccione una de las opciones relacionadas con un tipo de elemento en el menú.
- **Child Menu:** Si se trata de una subcategoría, escriba el ID de la categoría relacionada
- **Route:** Nombre utilizado en la URL de la categoría (e.g., monturas)

### Crear un item

Como último paso procederemos a crear un item, por lo que en la ruta de items seleccionamos el botón con el icono de un bolígrafo que te redirigirá a este formulario:

![Crear item](/assets/images/create-item-v1.png)

- **Name:** Nombre del item
- **Description:** Información sobre el item
- **Category:** Seleccione la categoría a la que pertenecerá el item.
- **Type:** Seleccione el tipo de item (objeto, dinero, nivel, renombrar, personalizar, cambiar de facción, cambiar de raza)
- **Icon Name:** Nombre del ícono usado en el item, puedes conseguirlo en Wowhead
- **Price Type:** Seleccione el tipo de precio del item (puntos de donación, puntos de votación o ambos)
- **DP Price:** Cantidad de puntos de donación
- **VP Price:** Cantidad de puntos de voto
- **Command:** No debes escribir un comando, solo es necesario si el tipo de item lo requiere

::: tabs#commands

@tab:active objeto

Si está creando un item con **type: objeto**, debe indicar `id:cantidad` en el campo de comando.

```bash
// Si solo quieres enviar un objeto.
12345:1

// Si quieres enviar varios objetos, deberá dejar un espacio entre ellos.
12345:1 54321:2
```

@tab Dinero

Si estás creando un item con **type: dinero**, debes indicar `cantidad` de dinero en cobre en el campo de comando.

```bash
// Si quieres enviar 1 oro.
1000
```

@tab Nivel

Si está creando un item con **type: nivel**, debe indicar `nivel` en el campo de comando.

```bash
// Si desea establecer el nivel 80.
80
```

:::
