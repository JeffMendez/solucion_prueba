
import { Button, Fab, IconButton, Typography } from "@mui/material"
import { LayoutDrawer } from "../../layout/Drawer"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';

import { useState, useEffect } from "react";
import { useVehiculoStore } from "../../hooks/useVehiculoStore";
import { DataForm } from "../components/DataForm";

export const HomeVehiculos = () => {

  const [data, setData] = useState(null);
  const [modo, setModo] = useState("add");
  const [mostrarForm, setMostrarForm] = useState(false)
  const { list_vehiculos, startGetList } = useVehiculoStore();

  const seleccionar = (vehiculo) => {
    setMostrarForm(true);
    setModo("edit");
    setData(vehiculo);
  }

  useEffect(() => {
    startGetList();
  }, [])
  
  return (
    <>
      <LayoutDrawer>
        <Typography variant='h4'><DirectionsBusFilledIcon /> Vehiculos 
          <Fab sx={{ ml: 2 }} onClick={() => setMostrarForm(!mostrarForm)} size="small" color="success" aria-label="add">
            <AddIcon />
          </Fab>
        </Typography>
        <br/>
        
        { mostrarForm ? <DataForm data={data} modo={modo} setMostrarForm={setMostrarForm} /> : null}
        
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><b>Placa</b></TableCell>
                <TableCell align="right"><b>Capacidad</b></TableCell>
                <TableCell align="right"><b>Consumo combustible </b></TableCell>
                <TableCell align="right"><b>Costos depreciación</b></TableCell>
                <TableCell align="right"><b>Posición (Latitud, Longitud)</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list_vehiculos.map((vehiculo) => (
                <TableRow
                  key={vehiculo.placa}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                  onClick={() => seleccionar(vehiculo)}
                >
                  <TableCell component="th" scope="row">
                    {vehiculo.placa}
                  </TableCell>
                  <TableCell align="right">{vehiculo.capacidad}</TableCell>
                  <TableCell align="right">{vehiculo.consumo_combustible}</TableCell>
                  <TableCell align="right">{vehiculo.costos_depreciacion}</TableCell>
                  <TableCell align="right">{vehiculo.pos_latitud + ", " + vehiculo.pos_longitud}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </LayoutDrawer>
    </>
  )
}
