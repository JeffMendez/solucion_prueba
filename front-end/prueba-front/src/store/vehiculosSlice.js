import { createSlice } from '@reduxjs/toolkit'

/*
    placa(pin):"GS10-5468942"
    capacidad(pin):16
    consumo_combustible(pin):25
    costos_depreciacion(pin):89
    pos_latitud(pin):13
    pos_longitud(pin):90
*/

const initialState = {
    list_vehiculos: []
}

export const vehiculosSlice = createSlice({
    name: 'vehiculos',
    initialState,
    reducers: {
        onListVehiculos: (state, {payload}) => {
            state.list_vehiculos = payload;
        },
        onAddVh: (state, {payload}) => {
            state.list_vehiculos.push(payload);
        },
        onUpdateVh: (state, {payload}) => {
            state.list_vehiculos = state.list_vehiculos.map(vehiculo => {
                if (vehiculo.placa == payload.id) return payload.data;
                return vehiculo;
            });
        },
        onDeleteVh: (state, {payload}) => {
            state.list_vehiculos = state.list_vehiculos.filter(vehiculo => {return vehiculo.placa != payload});
        }
    },
})

export const { onListVehiculos, onUpdateVh, onAddVh, onDeleteVh } = vehiculosSlice.actions 