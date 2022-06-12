---
title: Funciones Adicionales
icon: bx bx-radio-circle-marked
order: 2
---

Además de las funciones comunes, se han agregado más funciones para crear componentes más complejos. En esta página, puede encontrar información detallada sobre ellos.

## current_date

`current_date` — _Obtener la fecha actual con un formato específico_

```php
current_date($format = null, $timezone = null): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$format** | string\|null | Formato de la fecha |
| **$timezone** | string\|null | Zona horaria de la fecha |

::: info INFORMACIÓN
Si no se establece **$format**, se utilizará el siguiente: `Y-m-d H:i:s`

Si no se establece **$timezone**, se usará la configuración de CI predeterminada.
:::

#### Valores Devueltos

Devuelve una fecha actual con formato.

#### Ejemplos

```php
echo current_date();
```

## format_date

`format_date` — _Cambiar un string de fecha a otro formato específico_

```php
format_date($str, $format = null): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$str** | string | String de fecha |
| **$format** | string\|null | Formato de la fecha |

::: info INFORMACIÓN
Si no se establece **$format**, se utilizará el siguiente: `Y-m-d`
:::

#### Valores Devueltos

Devuelve el cambio de formato del string de fecha.

#### Ejemplos

```php
// Devuelve '2022-05-17 21:11:44'
echo format_date('Tue, 17 May 2022 21:11:44 +0000', 'Y-m-d H:i:s');
```

## add_interval

`add_interval` — _Agregar un intervalo de tiempo a la fecha actual_

```php
add_interval($interval, $format = null, $timezone = null): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$interval** | string | Intervalo |
| **$format** | string\|null | Formato de la fecha |
| **$timezone** | string\|null | Zona horaria de la fecha |

::: info INFORMACIÓN
Si no se establece **$format**, se utilizará el siguiente: `Y-m-d H:i:s`

Si no se establece **$timezone**, se usará la configuración de CI predeterminada.
:::

#### Valores Devueltos

Devuelve una fecha con el intervalo añadido.

#### Ejemplos

```php
// Devuelve la fecha y hora actual + 4 horas
echo add_interval('PT4H');
```

## remaining_minutes

`remaining_minutes` — _Obtener la cantidad de minutos que quedan entre dos fechas_

```php
remaining_minutes($date, $date_two, $timezone = null, $timezone_two = null): int
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$date** | string | String de la primera fecha |
| **$date\_two** | string | String de la segunda fecha |
| **$timezone** | string\|null | Zona horaria de la primera fecha |
| **$timezone\_two** | string\|null | Zona horaria de la segunda fecha |

::: info INFORMACIÓN
Si no se establece **$timezone**/**$timezone_two**, se usará la configuración de CI predeterminada.
:::

#### Valores Devueltos

Devuelve el número de minutos que quedan entre dos fechas **(puede proporcionar números negativos)**.

#### Ejemplos

```php
echo remaining_minutes('now', '2023-01-01 00:00:00');
```

## split_data

`split_data` — _Obtener un determinado tipo de datos de un string_

```php
split_data($str, $type = 'letter', $key = null): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$str** | string |  |
| **$type** | string | Tipo de datos a obtener |
| **$key** | int\|null | Clave del array |

**Tipos:**

- `letter`
- `number`

#### Valores Devueltos

Devuelve un array con el tipo de dato indicado o si se usa el parámetro key, seleccionará un solo elemento del array.

#### Ejemplos

```php
// Devuelve ['h', 'm', 's']
echo split_data('4h20m30s');

// Devuelve 'h'
echo split_data('4h20m30s', 'letter', 0);

// Devuelve '20'
echo split_data('4h20m30s', 'number', 1);
```

## money_pieces

`money_pieces` — _Obtener la cantidad de piezas de cobre/plata/oro de una cantidad total de dinero_

```php
money_pieces($money, $type = 'g'): int
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$money** | string | Cantidad de dinero |
| **$type** | string | Tipo de pieza |

**Tipo de pieza:**

- **Oro:** `gold` o `g`
- **Plata:** `silver` o `s`
- **Cobre:** `copper` o `c`

#### Valores Devueltos

Devuelve la cantidad de la pieza especificada.

#### Ejemplos

```php
// Devuelve '11' (gold)
echo money_pieces('110340');

// Devuelve '3' (silver)
echo money_pieces('110340', 's');
```

## ordinal

`ordinal` — _Establecer el indicador de sufijo ordinal en un número_

```php
ordinal($number): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$number** | int |  |

#### Valores Devueltos

Devuelve un número con un indicador de sufijo ordinal.

#### Ejemplos

```php
// Devuelve '1st'
echo ordinal(1);
```

## initial_letter

`initial_letter` — _Obtener la primera letra del string_

```php
initial_letter($str): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$str** | string |  |

#### Valores Devueltos

Devuelve la primera letra del string en mayúsculas.

#### Ejemplos

```php
// Devuelve 'N'
echo initial_letter('nick');
```

## encrypt

`encrypt` — _Cifrar un string_

```php
encrypt($str): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$str** | string |  |

#### Valores Devueltos

Devuelve un string cifrado.

#### Ejemplos

```php
// Cifrar string
echo encrypt('Esto es un string');
```

## decrypt

`decrypt` — _Descifrar un string_

```php
decrypt($str): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$str** | string |  |

#### Valores Devueltos

Devuelve un string descifrado.

#### Ejemplos

```php
$encrypt = encrypt('Esto es un string');

echo $encrypt;

// Descifrar string
$decrypt = decrypt($encrypt);

echo $decrypt;
```

## html_purify

`html_purify` — _Purificar un string usando HTMLPurifier_

```php
html_purify($str, $type = null): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$str** | string |  |
| **$type** | string\|null | Tipo de contenido a purificar |

**Tipos:**

- `comment`
- `content`
- `minimal`

#### Valores Devueltos

Devuelve un string con todas las etiquetas HTML no permitidas eliminadas.

#### Ejemplos

```php
$html = '<p><script>alert("xss");</script>Lorem ipsum dolor sit amet</p>';

// Devuelve '<p>Lorem ipsum dolor sit amet</p>'
echo html_purify($html, 'comment');
```

## is_json

`is_json` — _Comprobar si el string tiene un formato JSON válido_

```php
is_json($str): bool
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$str** | string |  |

#### Valores Devueltos

Devuelve **true** si el string tiene un formato JSON válido o **false** en caso de error.

#### Ejemplos

```php
$str = '{"name":"example"}';

if (is_json($str))
{
    echo 'Este string tiene formato JSON';
}
```

## class_name

`class_name` — _Obtener el nombre de la clase del juego_

```php
class_name($id): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$id** | int | Id de clase |

#### Valores Devueltos

Devuelve el **nombre** de la clase o **desconocido** si no existe.

#### Ejemplos

```php
// Devuelve 'Caballero de la Muerte'
echo class_name(6);
```

## race_name

`race_name` — _Obtener el nombre de la raza del juego_

```php
race_name($id): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$id** | int | Id de raza |

#### Valores Devueltos

Devuelve el **nombre** de la raza o **desconocido** si no existe.

#### Ejemplos

```php
// Devuelve 'No-muerto'
echo race_name(5);
```

## faction_name

`faction_name` — _Obtener el nombre de la facción del juego a través del id de la raza_

```php
faction_name($id): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$id** | int | Id de raza |

#### Valores Devueltos

Devuelve el **nombre** de la faction o **desconocido** si no existe.

#### Ejemplos

```php
// Devuelve 'Alianza'
echo faction_name(1);
```

## zone_name

`zone_name` — _Obtener el nombre de la zona del juego_

```php
zone_name($id): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$id** | int | Id de zona |

#### Valores Devueltos

Devuelve el **nombre** de la zona o **desconocido** si no existe.

#### Ejemplos

```php
// Devuelve 'Paso de la Muerte'
echo zone_name(41);
```
