---
title: How to translate into another language
icon: bx bx-radio-circle-marked
order: 1
---

The following guide will explain how to translate the CMS into your own language if it is not on the list of supported languages.

## Step 1: Duplicate folder

The default language of the CMS is **English**, so you will have to make a copy of the folder of that language and translate the files inside it. The folder can be found in the following path `application/languages`.

Then you need to rename the copied folder with the new **language** name, this should **match** the names of the languages supported by CodeIgniter 3, for more information you can see the following list:

::: details List of supported language names
- arabic
- armenian
- azerbaijani
- basque
- bengali
- bosnian
- bulgarian
- catalan
- croatian
- czech
- danish
- dutch
- english
- filipino
- finnish
- french
- german
- greek
- gujarati
- hindi
- hungarian
- indonesian
- italian
- japanese
- khmer
- korean
- latvian
- lithuanian
- marathi
- norwegian
- persian
- polish
- portuguese
- portuguese-brazilian
- romanian
- russian
- serbian
- simplified-chinese
- slovak
- slovenian
- spanish
- swedish
- tamil
- thai
- traditional-chinese
- turkish
- ukrainian
- urdu
- vietnamese
:::

## Step 2: Edit language file

In order for the CMS to detect the new language, you will have to edit the file `language.php` inside of the new folder.

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

return [
    'locale' => 'en',
    'name'   => 'English'
];
```

You should change the parameters with those of the new language.

| Parameter | Description |
| ------- | ------- |
| **locale** | Language code (ISO 639) |
| **name** | Language name |

## Step 3: Translate other sections

To translate the other sections of the CMS such as the admin, user, or a custom module. you must go to the path `application/modules/<module>/languages` in which you should do the same as **Step 1**.
