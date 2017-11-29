/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome/WelcomePage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import AboutPage from './pages/about/AboutPage';
import AlumnosPage from './pages/alumnos/AlumnosPage';
import AlumnoListado from './pages/alumnos/components/listado/AlumnoListado';
import AlumnoForm from './pages/alumnos/components/form/AlumnoForm';
import {withRouter} from "react-router-dom";

import Header from './layout/Header';
import Footer from './layout/Footer';
import './app.scss';


class App extends React.Component {
  constructor(){
    super();

    this.handleAgregarAlumno = this.handleAgregarAlumno.bind(this);
    this.handleCancelar = this.handleCancelar.bind(this);

    this.state = {
      alumnos:[
        {nombre: 'Facundo Esquivel Fagiani', dni: '36182504', direccion: 'calle 123', fechaNac:'24-12-1992', estado:'Regular'},
        {nombre: 'Facundo Esquivel Fagiani', dni: '36182504', direccion: 'calle 123', fechaNac:'24-12-1992', estado:'Regular'},
        {nombre: 'Facundo Esquivel Fagiani', dni: '36182504', direccion: 'calle 123', fechaNac:'24-12-1992', estado:'Regular'},
        {nombre: 'Facundo Esquivel Fagiani', dni: '36182504', direccion: 'calle 123', fechaNac:'24-12-1992', estado:'Regular'},
        {nombre: 'Facundo Esquivel Fagiani', dni: '36182504', direccion: 'calle 123', fechaNac:'24-12-1992', estado:'Regular'},
        {nombre: 'Facundo Esquivel Fagiani', dni: '36182504', direccion: 'calle 123', fechaNac:'24-12-1992', estado:'Regular'}
      ]
    }
  }

  handleAgregarAlumno(newNombre, newDni, newDireccion, newFechaNac, newEstado){
    this.state.alumnos.push({
      nombre: newNombre, 
      dni: newDni, 
      direccion: newDireccion, 
      fechaNac: newFechaNac, 
      estado: newEstado
    });  
  }

  handleCancelar = () => {
    this.context.router.transitionTo('/alumnos');
  };
  
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="app-content">
          <Switch >
            <Route exact path="/" component={WelcomePage} />
            <Route path="/about" component={AboutPage} />
            {/* <Route path="/alumnos" component={AlumnosPage} /> */}
            <Route 
                path="/alumnos" 
                render={(props) => <AlumnoListado alumnos={this.state.alumnos}/>} 
            />
            <Route 
                path="/alumnos-form" 
                render={(props) => <AlumnoForm 
                    agregarAlumno={this.handleAgregarAlumno} 
                    cancelar={this.handleCancelar}
                  />
                  }
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer/>
        
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
