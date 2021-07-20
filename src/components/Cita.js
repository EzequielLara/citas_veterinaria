import React, { Fragment } from 'react';


//componente Cita
const Cita = ({cita, citas, guardarCita}) => {

  const {fecha, mascota, propietario, id, hora} = cita;
            
    const eliminarCita = (e)=>{
        
        e.preventDefault();
        console.log( e.target.id);
       //Eliminar cita del array de citas creando un nuevo array
       const result = citas.filter(x => x.id !== e.target.id);
       //sustituir el array de citas antiguo por el actual result 
       guardarCita(result);
      console.log('este es el resultado del array result: '+ result);   

    }

    return (
     
     <Fragment>
        <div className ='cita' >
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <button
                    className = 'button eliminar u-full-width'
                    onClick = {eliminarCita}
                    id = {id}

            >Eliminar</button>    
        </div>
    </Fragment>
     
    );
};



export default Cita;