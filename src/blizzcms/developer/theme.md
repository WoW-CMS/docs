---
title: Writing a Theme
icon: bx bxs-palette
order: 3
---

The following guide will explain in detail the structure of a theme and how to make a new theme **step by step**.

## Structure of a theme

```
📂 Theme folder
|── 📂 assets
|    |── 📂 css
|    |    └── 🗒️ theme.css
|    |── 📂 images
|    └── 📂 js
|── 📂 modules
|    └── 📂 module
|         └── 🗒️ view.php
|── 📂 views
|    └── 📂 layouts
|         └── 🗒️ layout.php
└── 🗒️ theme.php
```

- 📂 **assets:** Container folder of all the necessary elements that compose a theme.
- 📂 **modules:** Container folder of subfolders with the names of the modules and their respective view files to override the defaults.
- 📂 **views:** Container folder of subfolders and files that override the general views and the layouts.
- 🗒️ **theme.php:** Configuration file that provides theme information.

::: note NOTE
The structure provided here may vary depending on the developer and the number of elements used.
:::

## How to create a theme?

To start this guide we will create a theme with the name **"example"**, the main focus of this theme will be to override the default layout and the main view of the user's module. To do this we will create the following structure:

```
example
|── 📂 assets
|    └── 📂 css
|         └── 🗒️ example.css  <--- New empty file
|── 📂 modules
|    └── 📂 user
|         └── 🗒️ index.php  <--- New empty file
|── 📂 views
|     └── 📂 layouts
|          └── 🗒️ layout.php  <--- New empty file
└── 🗒️ theme.php  <--- New empty file
```

::: info INFORMATION
The name **"example"** of the theme you can change to whatever you want but keep in mind that you will have to change the name in different parts of the theme to match it.
:::

### Step 1: Theme config file

Once we have created the structure mentioned above, we will find and edit the file `theme.php` in which we will write the following:

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

return [
    'name'    => 'Example',
    'version' => '1.0.0',
    'preview' => '',
    'author'  => [
        'name'    => 'WoW-CMS',
        'website' => 'https://wow-cms.com'
    ]
];
```

This file contains important information about the theme which is then used in the CMS.

| Parameter | Description |
| ------- | ------- |
| **name** | Theme name |
| **version** | Theme version |
| **preview** | Theme preview image path |
| **author name** | Author name |
| **author website** | Author website |

::: warning NOTICES
Remember to change the data provided in the example to your own.
:::

### Step 2: CSS file

The CSS file for the theme can contain the structure of your theme from scratch or it can also just be considered an override of the default theme so you can modify it to whatever you like.

For this theme, we will only apply a simple override to buttons from the default theme. To do this we will find and edit the file `example.css` in which we will write the following:

```css
.uk-button-default {
  background: #d84500;
  border: 1px solid #ff5200;
  color: #fff;
}

.uk-button-default:hover {
  background: #ff5200;
  border-color: #ff5200;
  color: #fff;
}

.uk-button-default.uk-active,
.uk-button-default:active {
  background: #ff5200;
  border-color: #ff5200;
  color: #fff;
}
```

::: info INFORMATION
The classes coming from the default theme mostly consist of UIKit 3, although it also has parts created by us so you can check the file in `assets/css/default.css` to get a better idea if you plan to do an override.
:::

### Step 3: Layout file

Continuing with the creation of our theme we will now focus on the main part, the file called layout. This file has a structure that will be repeated throughout all the pages. Knowing this, we will find and edit the file `layout.php` where we will write the following which will be explained in detail later.

```php{6-17,21,23-24}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $template['title'] ?></title>
    <link rel="icon" type="image/x-icon" href="<?= $template['location'].'assets/img/favicon.ico' ?>">
    <link rel="stylesheet" href="<?= $template['assets'].'css/uikit.min.css' ?>">
    <link rel="stylesheet" href="<?= $template['assets'].'css/tom-select.uikit.css' ?>">
    <link rel="stylesheet" href="<?= $template['assets'].'css/default.css' ?>">
    <link rel="stylesheet" href="<?= $template['location'].'assets/css/example.css' ?>">
    <script src="<?= $template['assets'].'js/uikit.min.js' ?>"></script>
    <script src="<?= $template['assets'].'js/uikit-icons.min.js' ?>"></script>
    <script src="<?= $template['assets'].'js/purecounter.js' ?>"></script>
    <script src="<?= $template['assets'].'js/tom-select.complete.min.js' ?>"></script>
    <script src="<?= $template['assets'].'fontawesome/js/all.min.js' ?>" defer></script>
    <?= $template['head_tags'] ?>
  </head>
  <body>

    <?= $template['body'] ?>

    <script src="<?= $template['assets'].'js/global.js' ?>"></script>
    <?= $template['body_tags'] ?>
  </body>
</html>
```

As you can see in the file, the lines used are HTML tags present in all the pages and their change is minimal so the layout contains them, you can also see the following:

- **_Line 6_:** Line to define the title of the page.
- **_Line 7_:** Line to define the icon of the page.
- **_Lines 8, 9 and 12 to 16_:** A set of lines with general resources of the theme (UI/Icons/Etc)
- **_Line 10_:** Line containing the default theme CSS.
- **_Line 11_:** Line containing our "example" theme CSS to override the default.
- **_Line 17_:** Line used by the template library to add tags to the head (meta/scripts/links).
- **_Line 21_:** Line used by the template library to add the partial view.
- **_Line 23_:** Line containing the script global.js (This file initializes tom-select and purecounter).
- **_Line 24_:** Line used by the template library to add tags to the body (scripts).

::: info INFORMATION
To find out more about the template library you can go [here](../structure/libraries/template.md).
:::

### Step 4: Module view file

Lastly, we will find and edit the view file `index.php` in the folder `user`, which will contain the new changes that differ from the default one. To do this we will write the following:

```php
<section class="uk-section uk-section-small primary-bg-section" uk-height-viewport="expand: true">
  <div class="uk-container">
    <h1 class="uk-h1">This is an example</h1>
  </div>
</section>
```

**Now you have your first theme!** now first enter the admin panel, then in the appearance section look for its name and install it. To proceed to see it go to `yourdomain.tld` :tada:
