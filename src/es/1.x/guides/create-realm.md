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

- **ID:** ID del reino en la base de datos auth de tu emulador
- **Soap Hostname:** IP o dominio para conectarse al emulador. Por ejemplo: `127.0.0.1` o `tudominio.com`
- **Soap Port:** Puerto utilizado por SOAP. Por ejemplo: `7878`
- **Soap User:** Cuenta en el juego que ejecutará los comandos
- **Soap Password:** Contraseña relacionada con la cuenta del juego
- **Character Database Hostname:** IP o dominio para conectarse a la base de datos.
- **Character Database Name:** Nombre de la base de datos de personajes. Por ejemplo: `characters`
- **Character Database User:** Usuario de la base de datos que tiene permisos en la base de datos de personajes.
- **Character Database Password:** Contraseña relacionada con el usuario de la base de datos
- **Emulator:** Seleccione el emulador utilizado

## Configurar/comprobar SOAP

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

Para comprobar que la configuración SOAP funciona con el CMS, abra una pestaña del navegador en la siguiente URL `tudominio.com/en/admin/checksoap` (reemplace tudominio.com con su dominio o IP).
