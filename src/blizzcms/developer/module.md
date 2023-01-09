---
title: Writing a Module
icon: bx bxs-extension
order: 2
---

The following guide will explain in detail the structure of a module and how to make a new module **step by step** depending on the difficulty.

## Structure of a module

```
📂 Module folder
|── 📂 config
|    |── 🗒️ migration.php
|    |── 🗒️ module.php
|    └── 🗒️ routes.php
|── 📂 controllers
|    └── 🗒️ Module.php
|── 📂 language
|    └── 📂 english
|        └── 🗒️ module_lang.php
|── 📂 migrations
|    └── 🗒️ 20220511000000_create_table.php
|── 📂 models
|    └── 🗒️ Module_model.php
└── 📂 views
     └── 🗒️ index.php
```

- 📂 **config:** Container folder of configs.
  - 🗒️ **migration.php:** Configuration file for migrations.
  - 🗒️ **module.php:** Configuration file that provides module information.
  - 🗒️ **routes.php:** Configuration file for URI routing.
- 📂 **controllers:** Container folder of controllers.
- 📂 **language:** Container folder of subfolders of language.
- 📂 **migrations:** Container folder of database modifier files.
- 📂 **models:** Container folder of models.
- 📂 **views:** Container folder of view files.

::: note
The structure provided here may vary depending on the developer and the number of elements used.
:::

## How to create a basic module?

To start this guide we will create a module with the name `example`, the main focus of this module will be to display a simple message. To do this we will create the following structure:

```
📂 example
|── 📂 config
|    └── 🗒️ migration.php
|    └── 🗒️ module.php
|    └── 🗒️ routes.php
|── 📂 controllers
|    └── 🗒️ Example.php
|── 📂 language
|── 📂 migrations
|── 📂 models
└── 📂 views
     └── 🗒️ index.php
```

::: note
The name **"example"** of the module you can change to whatever you want but keep in mind that you will have to change the name in different parts of the module to match it **_(remember to capitalize the first letter in the controller name)_**.
:::

### Step 1: Module config file

Once we have created the structure mentioned above, we will find and edit the file `module.php` in which we will write the following:

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

return [
    'name'        => 'Example',
    'description' => 'A simple basic module',
    'version'     => '1.0.0',
    'author'      => [
        'name'    => 'WoW-CMS',
        'website' => 'https://wow-cms.com'
    ],
    'dashboard'   => ''
];
```

This file contains important information about the module which is then used in the CMS.

| Parameter | Description |
| ------- | ------- |
| **name** | Module name |
| **description** | Brief description of the module |
| **version** | Module version |
| **author name** | Author name |
| **author website** | Author website |
| **dashboard** | Route to the admin panel of the module |

::: warning
Remember to change the data provided in the example to your own.
:::

### Step 2: Migration config file

At the end of the previous step, we will find and edit the file `migration.php` in which we will write the following:

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
|--------------------------------------------------------------------------
| Migrations Status
|--------------------------------------------------------------------------
|
| Status of the module's migration functionality. 
| Disabled by default for security reasons.
|
*/
$config['migration_enabled'] = false;

/*
|--------------------------------------------------------------------------
| Migrations Version
|--------------------------------------------------------------------------
|
| Parameter set as the maximum limit to proceed with the
| migration in the module.
| The version use timestamp format: YYYYMMDDHHIISS
|
*/
$config['migration_version'] = 0;

/*
|--------------------------------------------------------------------------
| Migrations Path
|--------------------------------------------------------------------------
|
| Path to the module migrations folder.
|
*/
$config['migration_path'] = '../migrations/';
```
This configuration file is necessary when the module requires among its functions to create/modify in the database, but for this guide, we will not use it, so we will continue with the steps.

### Step 3: Routes config file

Now we will find and edit the last config file `routes.php` in which we will write the following:

```php{4}
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['example']['get'] = 'example/index';
```

This configuration file has as purpose of redirecting the requests to the functions of the controller. so you can limit them to a specific type of request or rename them depending on what you need.

### Step 4: Controller file

Having finished preparing the files in the config folder we will proceed to find and edit the file `Example.php` in the controller's folder in which we will write the following:

```php{10,13,15-17,19}
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Example extends BS_Controller
{
    public function __construct()
    {
        parent::__construct();

        is_module_installed('example', true);
    }

    public function index()
    {
        $data = [
            'message' => 'Hello world!'
        ];

        $this->template->build('index', $data);
    }
}
```

This file is in charge of determining how HTTP requests should be handled. In the example, you can see that several lines have been marked to explain its functionality:

- **_Line 10_:** Line located inside the \__construct() function is a function to check if the module is installed, if not it will return a 404 page.
- **_Line 13_:** The main function of the controller that will process the request.
- **_Lines 15 to 17_:** A set of lines that mark an associative array of data where is the message we want to show.
- **_Line 19_:** Function of the template library that takes the view file **(index.php)** and passes the data with an associative array **$data**.

### Step 5: View file

As a final step in this guide of a basic module, we will proceed to find and edit the file `index.php` in the views folder in which we will write the following:

```php{3}
<section class="uk-section uk-section-small primary-bg-section" uk-height-viewport="expand: true">
  <div class="uk-container">
    <h3><?= $message ?></h3>
  </div>
</section>
```

This file will display the information to the user. In the example, we use HTML with classes from UIKit 3 and we mark a single line **(Line 3)** which is where our **'Hello World!'** will be shown.

**Now you have your first basic module!** now first enter the admin panel, then in the modules section look for its name and install it. To proceed to see it go to `yourdomain.tld/example` :tada:

## How to create an advanced module?

::: warning
Before starting, if you have not yet read the guide on [how to create a basic module?](../developer/module.md#how-to-create-a-basic-module), we recommend that you read it to proceed with this advanced guide.
:::
