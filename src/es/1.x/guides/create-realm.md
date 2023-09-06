---
title: Cómo crear un reino
icon: bx bx-radio-circle-marked
order: 1
---

La siguiente guía explicará cómo **crear un reino** en BlizzCMS Plus.

## Requisitos Previos

Antes de comenzar, asegúrese de tener lo siguiente:

- CMS ya instalado
- Una cuenta en el juego con **GM Level 3**

Ahora comencemos :nerd_face:

## Creación

Para comenzar ve al **Panel de Administración** y en el menú selecciona la opción reinos, dentro selecciona el botón con el ícono de un bolígrafo que te redirigirá a este formulario:

![Crear reino](/assets/images/create-realm-v1.png)

| Campo | Descripción |
| ------- | ------- |
| **id** | ID del reino en la base de datos de autenticación |
| **soap hostname** | IP o dominio para conectarse al SOAP. Por ejemplo: `127.0.0.1` or `tudominio.com` |
| **soap port** | Puerto utilizado por el SOAP. Por ejemplo: `7878` |
| **soap user** | Cuenta en el juego que ejecutará los comandos |
| **soap password** | Contraseña relacionada con la cuenta del juego |
| **character database hostname** | IP o dominio para conectarse a la base de datos |
| **character database name** | Nombre de la base de datos de personajes. Por ejemplo: `characters` |
| **character database user** | Usuario que tiene permiso en la base de datos |
| **character database password** | Contraseña relacionada con el usuario de la base de datos |
| **emulator** | Tipo de emulador utilizado |

## Configurar/Comprobar SOAP

Si aún no has editado las configuraciones SOAP de tu emulador, ve a su carpeta y cambia las configuraciones a lo siguiente:

```
#
#    SOAP.Enable
#        Description: Enable soap service
#        Default:     0 - (Disabled)
#                     1 - (Enabled)

SOAP.Enabled = 1

#
#    SOAP.IP
#        Description: Bind SOAP service to IP/hostname
#        Default:     "127.0.0.1" - (Bind to localhost)

SOAP.IP = "127.0.0.1"

#
#    SOAP.Port
#        Description: TCP port to reach the SOAP service.
#        Default:     7878

SOAP.Port = 7878
```

::: tip
Para comprobar que la configuración del SOAP funciona con el CMS, abra una pestaña del navegador en la siguiente URL `tudominio.com/en/admin/checksoap` (reemplace tudominio.com con su dominio o IP).
:::
