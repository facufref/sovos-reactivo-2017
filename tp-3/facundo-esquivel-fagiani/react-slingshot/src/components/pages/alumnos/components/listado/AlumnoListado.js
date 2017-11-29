import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import AddCircleOutlineIcon from 'material-ui-icons/AddCircleOutline';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';

const AlumnoListado = (props) => {
  return (
    <div>
      <h2>Listado de Alumno </h2>
      <IconButton tooltip="Agregar Alumno" href='./alumnos-form'>
        <AddCircleOutlineIcon/>
      </IconButton>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Nombre</TableHeaderColumn>
            <TableHeaderColumn>DNI</TableHeaderColumn>
            <TableHeaderColumn>Direccion</TableHeaderColumn>
            <TableHeaderColumn>Fecha Nac.</TableHeaderColumn>
            <TableHeaderColumn>Estado</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.alumnos.map(item => 
          <TableRow>
            <TableRowColumn>{item.nombre}</TableRowColumn>
            <TableRowColumn>{item.dni}</TableRowColumn>
            <TableRowColumn>{item.direccion}</TableRowColumn>
            <TableRowColumn>{item.fechaNac}</TableRowColumn>
            <TableRowColumn>{item.estado}</TableRowColumn>
          </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AlumnoListado;
