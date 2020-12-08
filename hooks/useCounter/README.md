# Custom Hook: _useCounter_

Este hook sirve para manejar el estado de un contador, recibe un valor por inicial pero también tiene un valor por defecto si no se le envía ninguno.

## return

Retorna un objeto con el estado del contador y 3 funciones para incrementar, decrementar y resetear el contador a su valor inicial.

### `counter`

Es el estado del contador y no es más que el valor numérico. El valor inicial por defecto es `0`.

### `increment`

Función que puede recibir un valor por parámetro, que sería el valor en el cual se va a **incrementar** el contador. El valor por defecto es `1`.

### `decrement`

Función que puede recibir un valor por parámetro, que sería el valor en el cual se va a **decrementar** el contador. El valor por defecto es `1`.

### `reset`

Función que vuelve el contador a su estádo inicial, el cual será el pasado por parámetro al momento de implementar el hook, o el valor por defecto si no se pasó ninguno.

## Ejemplo de uso

Contador con un valor inicial de 10, importando todas las funciones

```javascript
const { counter, increment, decrement, reset } = useCounter(10);
```
