import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlumnoListado from './components/listado/AlumnoListado';
import AlumnoForm from './components/form/AlumnoForm';

class AlumnosPage extends React.Component {
  constructor(){
    super();
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
  render() {
    return (
      <div>
        <div>
          <Switch >
            <Route exact path="/" component={AlumnoListado} />
            <Route path="/form" component={AlumnoForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

AlumnosPage.propTypes = {
  children: PropTypes.element
};

export default AlumnosPage;
