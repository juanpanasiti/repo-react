# Custom Hook: _useFetch_

Este hook sirve para realizar una petición fetch con el método GET.
Recibe una URL por parámetro y retorna un objeto que contiene los atributos data (lo que retorna el fetch), isLoaded (indica si terminó la carga del fetch) y error (indica si hubo algún error)

Este hook reutiliza los hooks useEffect, useRef y useState

## Ejemplo de uso:

Solicitud de data de la página de pokeapi

```javascript
const pokedexes = useFetch('https://pokeapi.co/api/v2/pokedex');
```
