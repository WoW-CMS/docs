---
title: El CMS no se puede actualizar
icon: bx bx-question-mark
order: 1
---

Si tienes este problema mencionado anteriormente, lo más probable es que tu problema esté relacionado con la falta de configuración de certificados en tu servidor web para poder ejecutar cURL. Para solucionarlo, sigue estos pasos dependiendo de tu OS:

::: tabs#os

@tab:active Windows

#### Descargar Certificado CA

En primer lugar, descargue la última versión de `cacert.pem` desde [aquí](https://curl.se/docs/caextract.html) y mueva el archivo a la carpeta de instalación del servidor web que tiene instalado, para este ejemplo se utilizará la siguiente ruta `C:/wamp64/extras/cacert.pem` (ref: WampServer).

#### Editar Archivo php.ini

Luego de haber descargado y movido el archivo a la ruta, ubicaremos el archivo `php.ini` dependiendo de la versión de PHP utilizada y buscaremos las siguientes líneas:

```
;curl.cainfo=
;openssl.cafile=
```

Ahora reemplázalo con lo siguiente:

```
curl.cainfo="C:/wamp64/extras/cacert.pem"
openssl.cafile="C:/wamp64/extras/cacert.pem"
```

Por último, guarda los cambios y reinicia el servidor web para que se apliquen los cambios realizados.

:::
