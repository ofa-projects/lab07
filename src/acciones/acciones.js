/*
* constantes para definir acciones
*/

export const NUEVO_PLATO = 'NUEVO_PLATO';
export const GUARDAR_PLATO = 'GUARDAR_PLATO';

// action creator
export function nuevoPlato() {
    return {
        type: NUEVO_PLATO,
        payload: { nombre:'', precio:0.0}
    };
}

// action creator
export function nuevoPlato(unNombre,unPrecio) {
    return {
        type: GUARDAR_PLATO,
        payload: { nombre:unNombre, precio:unPrecio}
    };
}