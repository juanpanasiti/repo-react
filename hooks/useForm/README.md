# Custom Hook: _useForm_

Este hook sirve para realizar faciliar el uso de formularios, recibe por parámetro un objeto con el estado inicial de los campos del formulario, pero si no lo recibe, por defecto es un objeto vacío.

## `return`

retorna un objeto con los atributos `values`, `handleInputChange` y `reset`.

### `values`

Es un objeto donde los atributos son los nombres de los campos del formulario, y los valores son los que se hayan cargado en cada campo.

### `handleInputChange`

Es una función que recibe el evento del `onChange` de cada campo y setea el estado correspondiente en `values`.

### `reset`

Es una función que no recibe ningún parámetro y vuelve los valores de cada campo (objeto `values`) al valor inicial.

## Ejemplo de uso:

Uso en un formulario de datos personales:

```javascript
const initialForm = {
  nombre: '',
  apellido: '',
  email: ''
}
const { values, handleInputChange, reset } = useForm(initialForm);
```
