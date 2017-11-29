import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const AlumnoForm = (props) => {
  return (
    <div>
      <h2 className="alt-header">Formulario Alumno </h2>
      <TextField hintText='Nombre'/><br/>
      <TextField hintText='Dni'/><br/>
      <TextField hintText='Direccion'/><br/>
      <TextField hintText='Fecha de Nacimiento'/><br/>
      <TextField hintText='Estado'/><br/>
      <RaisedButton label="Cancelar" onClick={props.cancelar}/>
      <RaisedButton label="Agregar" primary={true} />
    </div>
  );
};

export default AlumnoForm;
