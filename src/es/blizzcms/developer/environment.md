---
title: Entorno
icon: bx bxs-info-square
order: 1
---

De forma predeterminada, el CMS tiene su entorno configurado en **"production"**, que es muy diferente de las versiones anteriores. Debido a esto, para poder desarrollar módulos o alguna característica nueva para el CMS y poder ver los posibles **errores al desarrollar**, deberás modificar este parámetro dependiendo del servidor web.

## ¿Cómo cambiar el parámetro de entorno en Apache?

Si instaló el CMS en **Apache**, busque en su carpeta principal el archivo `.htaccess` y edítelo agregando la siguiente línea al final del archivo:

```apacheconf
SetEnv CI_ENV development
```

::: warning
Recuerde eliminar esta línea cuando utilice el CMS en entornos de producción.
:::

## ¿Cómo cambiar el parámetro del entorno en Nginx?

Si instaló el CMS en **Nginx**, en su **bloque de servidor** (host virtual) edítelo agregando la siguiente línea:

```nginx{3}
server {
    location ~ \.php$ {
        fastcgi_param CI_ENV "development";
    }
}
```

::: warning
Recuerde eliminar esta línea cuando utilice el CMS en entornos de producción.
:::
