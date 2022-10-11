import { LayoutDrawer } from "../../layout/Drawer"
import { Button, Fab, IconButton, Typography } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import Person4Icon from '@mui/icons-material/Person4';

import { useState, useEffect } from "react";
import { usePersonalStore } from "../../hooks/usePersonalStore";
import { DataFormPn } from "../components/DataFormPn";

export const HomeConductores = () => {

  const [data, setData] = useState(null);
  const [modo, setModo] = useState("add");
  const [mostrarForm, setMostrarForm] = useState(false)
  const { list_personal, startGetList } = usePersonalStore();

  const seleccionar = (personal) => {
    setMostrarForm(true);
    setModo("edit");
    setData(personal);
  }

  useEffect(() => {
    startGetList();
  }, [])

  return (
    <LayoutDrawer>
      <Typography variant='h4'><Person4Icon /> Conductores
        <Fab sx={{ ml: 2 }} onClick={() => setMostrarForm(!mostrarForm)} size="small" color="success" aria-label="add">
          <AddIcon />
        </Fab>
      </Typography>
      <br />
      { mostrarForm ? <DataFormPn data={data} modo={modo} setMostrarForm={setMostrarForm} /> : null}

      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><b>DPI</b></TableCell>
                <TableCell align="right"><b>Nombre completo</b></TableCell>
                <TableCell align="right"><b>Estado civil</b></TableCell>
                <TableCell align="right"><b>Correo</b></TableCell>
                <TableCell align="right"><b>Telefono</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list_personal.map((personal) => (
                <TableRow
                  key={personal.dpi_persona}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                  onClick={() => seleccionar(personal)}
                >
                  <TableCell component="th" scope="row">
                    {personal.dpi_persona}
                  </TableCell>
                  <TableCell align="right">{personal.nombres + " " + personal.apellidos}</TableCell>
                  <TableCell align="right">{personal.estado_civil}</TableCell>
                  <TableCell align="right">{personal.correo}</TableCell>
                  <TableCell align="right">{personal.telefono}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </LayoutDrawer>
  )
}
