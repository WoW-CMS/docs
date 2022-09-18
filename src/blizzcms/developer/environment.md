---
title: Environment
icon: bx bxs-info-square
order: 1
---

By default, the CMS has its environment set to **"production"**, which is very different from past versions. Due to this, in order to develop modules or some new characteristic for the CMS and to be able to see the possible **errors when developing**, you will have to modify this parameter depending on the webserver.

## How to change the environment parameter in Apache?

If you installed the CMS in **Apache**, look in your main folder for the `.htaccess` file and edit it by adding the following line at the end of the file:

```apacheconf
SetEnv CI_ENV development
```

::: warning NOTICES
Remember to remove this line when using the CMS in production environments.
:::

## How to change the environment parameter in Nginx?

If you installed the CMS in **Nginx**, on your **server block** (virtual host) edit it by adding the following line:

```nginx{3}
server {
    location ~ \.php$ {
        fastcgi_param CI_ENV "development";
    }
}
```

::: warning NOTICES
Remember to remove this line when using the CMS in production environments.
:::
