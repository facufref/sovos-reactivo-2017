import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';
import { NavLink } from 'react-router-dom';

// Since this component is simple and static, there's no parent container for it.
class AlumnoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      nombre: 'aaaa',
      dni: '123456',
      direccion: 'aaa 123',
      fecNac: '26-05-1993',
      estado: 'Fine'
    };
    this.handleNombre= this.handleNombre.bind(this);
    this.handleDni= this.handleDni.bind(this);
    this.handleDireccion= this.handleDireccion.bind(this);
    this.handleFecNac= this.handleFecNac.bind(this);
    this.handleEstado= this.handleEstado.bind(this);
  }

  handleNombre(value){
    this.setState({ nombre: value });
  }

  handleDni(value){
    this.setState({ dni: value });
  }

  handleDireccion(value){
    this.setState({ direccion: value });
  }

  handleFecNac(value){
    this.setState({ fecNac: value });
  }

  handleEstado(value){
    this.setState({ estado: value });
  }

  agregarAlumno(){
    const alumno={
      nombre: this.state.nombre,
      dni: this.state.dni,
      direccion: this.state.direccion,
      fechaNac: this.state.fecNac,
      estado: this.state.estado
    }
    this.props.agregarAlumno(alumno);
  }

  render(){
    return (
      <div>
        <h2 className="alt-header">Formulario Alumno </h2>
        <TextField hintText='Nombre' value={this.state.nombre} onChange={e => this.handleNombre(e.target.value)}/><br/>
        <TextField hintText='Dni' value={this.state.dni} onChange={e => this.handleDni(e.target.value)}/><br/>
        <TextField hintText='Direccion' value={this.state.direccion} onChange={e => this.handleDireccion(e.target.value)}/><br/>
        <TextField hintText='Fecha de Nacimiento' value={this.state.fecNac} onChange={e => this.handleFecNac(e.target.value)}/><br/>
        <TextField hintText='Estado' value={this.state.estado} onChange={e => this.handleEstado(e.target.value)}/><br/>
        <NavLink to="/alumnos">
          <RaisedButton label="Cancelar"/>
        </NavLink>
        <NavLink to="/alumnos">
          <RaisedButton label="Agregar" primary={true} onClick={ () => {this.agregarAlumno()} } />
        </NavLink>
      </div>
    );
  }
}

export default AlumnoForm;
