import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlumnoListado from './components/listado/AlumnoListado';
import AlumnoForm from './components/form/AlumnoForm';

class AlumnosPage extends React.Component {
  constructor(){
    super();
    this.handleCancelar = this.handleCancelar.bind(this);
  }

  handleCancelar = () => {
    this.context.router.transitionTo('/alumnos');
  };
  
  render() {
    return (
      <div>
        <div>
          <Switch >
            <Route 
                path={`${this.props.match.path}/`} 
                render={(props) => <AlumnoListado alumnos={this.state.alumnos}/>} 
            />
            <Route 
                path={`${this.props.match.path}/form`} 
                render={(props) => <AlumnoForm 
                    agregarAlumno={this.props.agregarAlumno} 
                    cancelar={this.handleCancelar}
                  />
                  }
            />
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
