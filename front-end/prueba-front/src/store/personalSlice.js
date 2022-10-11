import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list_personal: []
}

export const personalSlice = createSlice({
    name: 'personal',
    initialState,
    reducers: {
        onListPersonal: (state, {payload}) => {
            state.list_personal = payload;
        },
        onAddPn: (state, {payload}) => {
            state.list_personal.push(payload);
        },
        onUpdatePn: (state, {payload}) => {
            state.list_personal = state.list_personal.map(persona => {
                if (persona.dpi_persona == payload.id) return payload.data;
                return persona;
            });
        },
        onDeletePn: (state, {payload}) => {
            state.list_personal = state.list_personal.filter(persona => {return persona.dpi_persona != payload});
        }
    },
})

export const { onListPersonal, onAddPn,  onUpdatePn, onDeletePn } = personalSlice.actions