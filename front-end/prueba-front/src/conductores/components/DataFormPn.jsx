import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Grid, Typography, TextField, Button, Link, Alert, Box } from "@mui/material"
import { usePersonalStore } from '../../hooks/usePersonalStore';
import Swal from 'sweetalert2';

export const DataFormPn = ({ data, modo, setMostrarForm }) => {

    const { startAddPn, startUpdatePn, startDeletePn } = usePersonalStore();
    const { register, handleSubmit, reset, formState: {errors} } = useForm();

    useEffect(() => {
        if (data) {
            reset(data);
        }
    }, [data]);

    const onSubmit = (data) => {
        if (modo == "add") {
            startAddPn(data).then(() => setMostrarForm(false));
            Swal.fire({
                title: 'Personal añadido',
                icon: 'success',
                confirmButtonText: 'Continuar'
            });
        } else {
            startUpdatePn(data.dpi_persona, data).then(() => setMostrarForm(false));
            Swal.fire({
                title: 'Personal actualizado',
                icon: 'success',
                confirmButtonText: 'Continuar'
            });
        }
    }

    const eliminar = () => {
        Swal.fire({
            title: '¿Esta seguro de eliminar al personal?',
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                startDeletePn(data.dpi_persona).then(() => setMostrarForm(false));
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} className="animate__animated animate__fadeIn">
                <Grid item xs={12} md={6} sx={{ mb: 1 }}>
                    <TextField 
                        label="DPI" 
                        {...register('dpi_persona', { required: true })}
                        type="text" fullWidth />
                        { errors.dpi_persona ? <Alert severity="error">Campo obligatorio</Alert> : null }
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1 }}>
                    <TextField 
                        label="Nombres" 
                        {...register('nombres', { required: true })}
                        type="text" fullWidth />
                        { errors.nombres ? <Alert severity="error">Campo obligatorio</Alert> : null }
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1 }}>
                    <TextField 
                        label="Apellidos"                      
                        {...register('apellidos', { required: true })}
                        type="text" fullWidth />
                        { errors.apellidos ? <Alert severity="error">Campo obligatorio</Alert> : null }
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1 }}>
                    <TextField 
                        label="Estado civil"                      
                        {...register('estado_civil', { required: true })}
                        type="text" fullWidth />
                        { errors.estado_civil ? <Alert severity="error">Campo obligatorio</Alert> : null }
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1 }}>
                    <TextField 
                        label="Correo"                
                        {...register('correo', { required: true })}
                        type="email" fullWidth />
                        { errors.correo ? <Alert severity="error">Campo obligatorio</Alert> : null }
                </Grid>
                <Grid item xs={12} md={6} sx={{ mb: 1 }}>
                    <TextField 
                        label="Telefono" 
                        {...register('telefono', { required: true })}
                        type="number" fullWidth />
                        { errors.telefono ? <Alert severity="error">Campo obligatorio</Alert> : null }
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
