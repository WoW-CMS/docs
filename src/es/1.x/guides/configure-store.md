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

![Crear categoría](/assets/images/create-category-v1.png)

| Campo | Descripción |
| ------- | ------- |
| **name** | Nombre de la categoría (p.ej, monturas) |
| **realm** | Reino relacionado con la categoría/subcategoría |
| **type** | Tipo de elemento en el menú de la tienda |
| **child menu** | ID de una categoría relacionada si es una subcategoría |
| **route** | Nombre utilizado en la URL (p.ej, monturas) |

### Crear un item

Como último paso procederemos a crear un item, por lo que en la ruta de items seleccionamos el botón con el icono de un bolígrafo que te redirigirá a este formulario:

![Crear item](/assets/images/create-item-v1.png)

| Campo | Descripción |
| ------- | ------- |
| **name** | Nombre del item |
| **description** | Información sobre el item |
| **category** | Categoría a la que pertenecerá el item |
| **type** | Tipo de item (objeto, dinero, nivel, renombrar, personalizar, cambiar de facción, cambiar de raza) |
| **icon name** | Nombre del icono utilizado en el item |
| **price type** | Tipo de precio (puntos de donación, puntos de votación o ambos) |
| **dp price** | Cantidad de puntos de donación requeridos |
| **vp price** | Cantidad de puntos de votación requeridos |
| **command** | Información requerida según el tipo de item |

::: tabs#commands

@tab:active objeto

Si está creando un item con **type: objeto**, debe indicar `id:cantidad` en el campo de comando.

```bash
// Si solo quieres enviar un objeto
12345:1

// Si quieres enviar varios objetos, deberá dejar un espacio entre ellos
12345:1 54321:2
```

@tab Dinero

Si estás creando un item con **type: dinero**, debes indicar `cantidad` de dinero en cobre en el campo de comando.

```bash
// Si quieres enviar 1 oro
10000
```

@tab Nivel

Si está creando un item con **type: nivel**, debe indicar `nivel` en el campo de comando.

```bash
// Si quieres establecer el nivel 80
80
```

:::
