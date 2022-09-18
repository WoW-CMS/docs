---
title: Troubleshooting
icon: bx bx-question-mark
order: 1
---

In the following section, you will find a list of the most common problems and their solution in instances with the Windows OS.

## Can't update CMS from the dashboard

If you have this problem mentioned above, it is most likely that your problem is related to the lack of configuration of certificates on your web server to be able to execute cURL. To solve it, follow these steps:

### Step 1: Download CA Cert

First, download the latest version of `cacert.pem` from [here](https://curl.se/docs/caextract.html) and move the file to the installation folder of the web server you have installed, for this example, the following path will be used `C:/wamp64/extras/cacert.pem` (ref: WampServer).

### Step 2: Edit File php.ini

After having downloaded and moved the file to the path, Look for the file `php.ini` depending on the PHP version installed and inside it find the following lines:

```
;curl.cainfo=
;openssl.cafile=
```

Now replace it with the following:

```
curl.cainfo = "C:/wamp64/extras/cacert.pem"
openssl.cafile = "C:/wamp64/extras/cacert.pem"
```

Finally, save the changes and restart the web server so that the changes made are applied.
