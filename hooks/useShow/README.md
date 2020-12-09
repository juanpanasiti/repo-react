# Custom Hook: _useShow_

Este hook sirve para manejar el estado de un componente que se deba mostrar u ocultar, como un modal o un dialog, recibe un booleano por valor inicial pero también tiene un valor por defecto **`false`** si no se le envía ninguno.

## return

Retorna un objeto con los atributos show, handleShow, handleClose y toggleShow

### `show`

Es un valor booleano para indicar si se debe o no mostrar el componente.

### `handleShow`

Función que no recibe ningún parámetro y setea el valor de `show` en `true`.

### `handleClose`

Función que no recibe ningún parámetro y setea el valor de `show` en `false`.

### `toggleShow`

Función que no recibe ningún parámetro e invierte el valor de `show` (en `true` si era `false` y en `false` si era `true`.

## Ejemplo de uso

Utilización para mostrar u ocultar un Modal y un botón para mostrarlo

```javascript
const { show, handleShow, handleClose } = useShow(false);

<Modal show={show} handleClose={handleClose} />

<Button onClick={handleShow}>Mostrar Modal</Button>

```
