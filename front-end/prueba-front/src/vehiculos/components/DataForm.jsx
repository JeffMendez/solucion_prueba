import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Grid, Typography, TextField, Button, Link, Alert } from "@mui/material"
import { useVehiculoStore } from '../../hooks/useVehiculoStore';
import Swal from 'sweetalert2';

export const DataForm = ({ data, modo, setMostrarForm }) => {

    const { startAddVh, startUpdateVh, startDeleteVh } = useVehiculoStore();
    const { register, handleSubmit, reset, formState: {errors} } = useForm();

    useEffect(() => {
        if (data) {
            reset(data);
        }
    }, [data]);
    

    const onSubmit = (data) => {
        if (modo == "add") {
            startAddVh(data).then(() => setMostrarForm(false));;
            Swal.fire({
                title: 'Vehiculo añadido',
                icon: 'success',
                confirmButtonText: 'Continuar'
            });
        } else {
            startUpdateVh(data.placa, data).then(() => setMostrarForm(false));;
            Swal.fire({
                title: 'Vehiculo actualizado',
                icon: 'success',
                confirmButtonText: 'Continuar'
            });
        }
    }

    const eliminar = () => {
        Swal.fire({
            title: '¿Esta seguro de eliminar el vehiculo?',
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                startDeleteVh(data.placa).then(() => setMostrarForm(false));
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} className="animate__animated animate__fadeIn">
                <Grid item xs={12} md={6} sx={{ mb: 1 }}>
                    <TextField 
                        label="Placa" 
                        {...register('placa', { required: true })}
                        type="text" fullWidth />
                        { errors.placa ? <Alert severity="error">Campo obligatorio</Alert> : null }
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1 }}>
                    <TextField 
                        label="Capacidad" 
                        {...register('capacidad', { required: true })}
                        type="number" fullWidth />
                        { errors.capacidad ? <Alert severity="error">Campo obligatorio</Alert> : null }
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1 }}>
                    <TextField 
                        label="Consumo de combustible"                      
                        {...register('consumo_combustible', { required: true })}
                        type="number" fullWidth />
                        { errors.consumo_combustible ? <Alert severity="error">Campo obligatorio</Alert> : null }
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1 }}>
                    <TextField 
                        label="Costos depreciación"                      
                        {...register('costos_depreciacion', { required: true })}
                        type="number" fullWidth />
                        { errors.costos_depreciacion ? <Alert severity="error">Campo obligatorio</Alert> : null }
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1 }}>
                    <TextField 
                        label="Latitud"                
                        {...register('pos_latitud', { required: true })}
                        type="number" fullWidth />
                        { errors.pos_latitud ? <Alert severity="error">Campo obligatorio</Alert> : null }
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1 }}>
                    <TextField 
                        label="Longitud" 
                        {...register('pos_longitud', { required: true })}
                        type="number" fullWidth />
                        { errors.pos_longitud ? <Alert severity="error">Campo obligatorio</Alert> : null }
                </Grid>
            </Grid>
            <Box sx={{ mb: 2, mt: 1 }}>
                <Button sx={{ fontWeight: 500 }} variant="contained" color="success" type="submit">{ data ? 'Actualizar' : 'Agregar' }</Button>
                { data
                    ? <Button sx={{ fontWeight: 500, ml: 2 }} variant="contained" color="error" onClick={() => eliminar()}>Eliminar</Button> 
                    : null
                }
                <br/>
            </Box>
        </form>
    )
}
