---
title: How to configure the store
icon: bx bx-radio-circle-marked
order: 2
---

The following guide will explain how to **configure the store** to sell items in BlizzCMS Plus.

## Prerequisites

Before you get started, ensure you have the following:

- A [realm](../guides/create-realm.md) in the **Admin Panel**

Now let's start :nerd_face:

## Configuration

Before starting with the steps, go to the **Admin Panel** and in the menu select the store option, within you will find a submenu that contains the paths for categories, items, logs, etc.

### Create a category

As a first step, we will proceed to create a category, so in the category path we select the button with the icon of a pen that will redirect you to this form:

![Create Category](/assets/images/create-category-v1.png)

| Field | Description |
| ------- | ------- |
| **name** | Name of the category (e.g., mounts) |
| **realm** | Realm related to the category/subcategory |
| **type** | Type of element in the store menu |
| **child menu** | ID of a related category if it is a subcategory |
| **route** | Name used in the URL (e.g., mounts) |

### Create an item

As a last step, we will proceed to create an item, so in the items path we select the button with the icon of a pen that will redirect you to this form:

![Create Item](/assets/images/create-item-v1.png)

| Field | Description |
| ------- | ------- |
| **name** | Name of the item |
| **description** | Information about the item |
| **category** | Category where the item will belong |
| **type** | Type of item (item, money, level, rename, customize, change faction, change race) |
| **icon name** | Name of the icon used in the item |
| **price type** | Type of price (donation points, vote points or both) |
| **dp price** | Amount of donation points required |
| **vp price** | Amount of vote points required |
| **command** | Information required depending on the type of item |

::: tabs#commands

@tab:active Item

If you are creating an item with **type: item**, you should indicate `id:quantity` in the command field.

```bash
// If you only want to send an item
12345:1

// If you want to send multiple items, you will need to leave a space between them
12345:1 54321:2
```

@tab Money

If you are creating an item with **type: money**, you should indicate `amount` of money in copper in the command field.

```bash
// If you want to send 1 gold
1000
```

@tab Level

If you are creating an item with **type: level**, you should indicate `level` in the command field.

```bash
// If you want to set level 80
80
```

:::
