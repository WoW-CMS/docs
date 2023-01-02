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
Si no se establece **$format**, se utilizará lo siguiente: `Y-m-d H:i:s`

Si no se establece **$timezone**, se utilizará lo siguiente: `UTC`
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
format_date($date, $format = null): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$date** | string | String de fecha |
| **$format** | string\|null | Formato de la fecha |

::: info INFORMACIÓN
Si no se establece **$format**, se utilizará lo siguiente: `Y-m-d H:i:s`
:::

#### Valores Devueltos

Devuelve el cambio de formato del string de fecha.

#### Ejemplos

```php
// Devuelve '2022-05-17 21:11:44'
echo format_date('Tue, 17 May 2022 21:11:44 +0000');
```

## add_timespan

`add_timespan` — _Agregar intervalo de tiempo a una fecha_

```php
add_timespan($date, $interval, $format = null, $timezone = null): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$date** | string | String de fecha |
| **$interval** | string | Intervalo |
| **$format** | string\|null | Formato de la fecha |
| **$timezone** | string\|null | Zona horaria de la fecha |

::: info INFORMACIÓN
Si no se establece **$format**, se utilizará lo siguiente: `Y-m-d H:i:s`

Si no se establece **$timezone**, se utilizará lo siguiente: `UTC`
:::

#### Valores Devueltos

Devuelve una fecha con el intervalo añadido.

#### Ejemplos

```php
// Devuelve la fecha y hora actual + 4 horas
echo add_timespan('now', 'PT4H');
```

## remaining_minutes

`remaining_minutes` — _Obtener la cantidad de minutos que quedan entre dos fechas_

```php
remaining_minutes($date, $dateTwo, $timezone = null, $timezoneTwo = null): int
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$date** | string | String de la primera fecha |
| **$dateTwo** | string | String de la segunda fecha |
| **$timezone** | string\|null | Zona horaria de la primera fecha |
| **$timezoneTwo** | string\|null | Zona horaria de la segunda fecha |

::: info INFORMACIÓN
Si no se establece **$timezone**/**$timezoneTwo**, se utilizará lo siguiente: `UTC`
:::

#### Valores Devueltos

Devuelve el número de minutos que quedan entre dos fechas **(puede proporcionar números negativos)**.

#### Ejemplos

```php
echo remaining_minutes('now', '2024-01-01 00:00:00');
```

## split_data

`split_data` — _Obtener un determinado tipo de string de los datos_

```php
split_data($data, $type = 'not_digits', $key = null): mixed
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$data** | string |  |
| **$type** | string | Tipo de string |
| **$key** | int\|null | Clave del array |

**Tipos:**

- `digits`
- `not_digits`

#### Valores Devueltos

Devuelve un array con el tipo de string indicado o si se usa el parámetro key, seleccionará un solo elemento del array.

#### Ejemplos

```php
// Devuelve ['h', 'm', 's']
echo split_data('4h20m30s');

// Devuelve 'h'
echo split_data('4h20m30s', 'not_digits', 0);

// Devuelve '20'
echo split_data('4h20m30s', 'digits', 1);
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

- `gold` o `g`
- `silver` o `s`
- `copper` o `c`

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

`ordinal` — _Establecer sufijo ordinal_

```php
ordinal($value): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$value** | int |  |

#### Valores Devueltos

Devuelve un string compuesto por el valor y el sufijo ordinal.

#### Ejemplos

```php
// Devuelve '1st'
echo ordinal(1);
```

## encrypt

`encrypt` — _Cifrar datos_

```php
encrypt($data): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$data** | string |  |

#### Valores Devueltos

Devuelve un string con los datos cifrados.

#### Ejemplos

```php
echo encrypt('Esto es un string');
```

## decrypt

`decrypt` — _Descifrar datos_

```php
decrypt($data): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$data** | string | Datos encriptados |

#### Valores Devueltos

Devuelve un string con los datos descifrados.

#### Ejemplos

```php
$encrypt = encrypt('Esto es un string');

echo $encrypt;

// Descifrar datos
$decrypt = decrypt($encrypt);

echo $decrypt;
```

## purify

`purify` — _Purificar un contenido usando HTMLPurifier_

```php
purify($content, $type = null): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$content** | string |  |
| **$type** | string\|null | Tipo de contenido a purificar |

**Tipos:**

- `article`
- `comment`

#### Valores Devueltos

Devuelve un string con todas las etiquetas HTML no permitidas eliminadas.

#### Ejemplos

```php
$html = '<p><script>alert("xss");</script>Lorem ipsum dolor sit amet</p>';

// Devuelve '<p>Lorem ipsum dolor sit amet</p>'
echo purify($html, 'comment');
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

if (is_json($str)) {
    echo 'Este string tiene formato JSON';
}
```

## class_name

`class_name` — _Obtener un nombre de clase_

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

`race_name` — _Obtener un nombre de raza_

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

`faction_name` — _Obtener un nombre de facción_

```php
faction_name($id): string
```

#### Parámetros

| Parámetro | Tipo | Descripción |
| ------- | ------- | ------- |
| **$id** | int | Id de facción |

#### Valores Devueltos

Devuelve el **nombre** de la facción o **desconocido** si no existe.

#### Ejemplos

```php
// Devuelve 'Alianza'
echo faction_name(1);
```

## zone_name

`zone_name` — _Obtener un nombre de zona_

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
