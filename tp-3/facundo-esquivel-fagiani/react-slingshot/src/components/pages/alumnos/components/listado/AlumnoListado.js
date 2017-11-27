import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const AlumnoListado = (props) => {
  return (
    <div>
      <h2>Listado de Alumno </h2>
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
