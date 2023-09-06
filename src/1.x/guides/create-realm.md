---
title: How to create a realm
icon: bx bx-radio-circle-marked
order: 1
---

The following guide will explain how to **create a realm** in BlizzCMS Plus.

## Prerequisites

Before you get started, ensure you have the following:

- CMS already installed
- An in-game account with **GM Level 3**

Now let's start :nerd_face:

## Creation

To start go to the **Admin Panel** and in the menu select the realms option, inside select the button with the icon of a pen that will redirect you to this form:

![Create Realm](/assets/images/create-realm-v1.png)

| Field | Description |
| ------- | ------- |
| **id** | ID of realm in auth database |
| **soap hostname** | IP or domain to connect to SOAP. For example: `127.0.0.1` or `yourdomain.com` |
| **soap port** | Port used by SOAP. For example: `7878` |
| **soap user** | In-game account which will execute the commands |
| **soap password** | Password related to in-game account |
| **character database hostname** | IP or domain to connect to the database |
| **character database name** | Name of the characters database. For example: `characters` |
| **character database user** | User who has permission on the database |
| **character database password** | Password related to database user |
| **emulator** | Type of emulator used |

## Configure/Check SOAP

If you haven't edited your emulator's SOAP configs yet, go to its folder and change the configs to the following:

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
To check that the SOAP configuration is working with the CMS, open a browser tab to the following URL `yourdomain.com/en/admin/checksoap` (replace the yourdomain.com with your domain or IP).
:::
