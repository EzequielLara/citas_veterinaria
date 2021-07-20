import './index.css';
import {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario.js';
import Cita from './components/Cita.js';
import PropTypes from 'prop-types';

function App() {

  // Citas en local Storage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  
  
  if(!citasIniciales){
    citasIniciales = [];
    
  }
  const [citas, guardarCita] = useState(citasIniciales);

  //useEffect para guardar en LocalStorage los datos cada vez que haya un cambio en citas

  useEffect( ()=>{

    if(citasIniciales){

      localStorage.setItem('citas', JSON.stringify(citas));

    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);
  
  //Función para agregar cita nueva

  const crearCita = cita =>{
    guardarCita([
      ...citas,
      cita
    ]);
  };
  //Titulo para la parte de la gestión de citas que cambiará según haya citas o no guardadas
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Gestor de citas veterinaria</h1> 
     <div className ='container'>
        <div className ='row'>
          <div className ='one-half column'>
               <Formulario
                   crearCita = {crearCita}
              ></Formulario>
          </div>
          <div className ='one-half column'>
              <h2>{titulo}</h2>

              { citas.map(cita => (

                <Cita
                    citas = {citas}
                    cita = {cita}
                    guardarCita = {guardarCita}
                    key ={cita.id}                  
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment> 

    
  );
}
Formulario.propTypes = {

  crearCita: PropTypes.func.isRequired
  
}
Cita.propTypes = {

  cita: PropTypes.object.isRequired,
  guardarCita: PropTypes.func.isRequired,
  citas: PropTypes.array.isRequired
  
}

export default App;
