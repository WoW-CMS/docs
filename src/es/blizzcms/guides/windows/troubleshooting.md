---
title: Solución de problemas
icon: bx bx-question-mark
order: 1
---

En la siguiente sección, encontrará una lista de los problemas más comunes y su solución en instancias con el sistema operativo Windows.

## No se puede actualizar el CMS desde el panel

Si tienes este problema mencionado anteriormente, lo más probable es que tu problema esté relacionado con la falta de configuración de certificados en tu servidor web para poder ejecutar cURL. Para solucionarlo, sigue estos pasos:

### Paso 1: Descargar Certificado CA

Primero, descargue la última versión de `cacert.pem` desde [aquí](https://curl.se/docs/caextract.html) y mueva el archivo a la carpeta de instalación del servidor web que tiene instalado, para este ejemplo se utilizará la siguiente ruta `C:/wamp64/extras/cacert.pem` (ref: WampServer).

### Paso 2: Editar Archivo php.ini

Luego de haber descargado y movido el archivo a la ruta, ubicaremos el archivo `php.ini` dependiendo de la versión de PHP utilizada y buscaremos las siguientes líneas:

```
;curl.cainfo=
;openssl.cafile=
```

Ahora reemplázalo con lo siguiente:

```
curl.cainfo = "C:/wamp64/extras/cacert.pem"
openssl.cafile = "C:/wamp64/extras/cacert.pem"
```

Finalmente, guarda los cambios y reinicia el servidor web para que se apliquen los cambios realizados.
