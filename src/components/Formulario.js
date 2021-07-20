import { Fragment, useState } from "react";
import uuid from "react-uuid";


const Formulario = ({crearCita}) => {

    //Crear State de Citas

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '', 
        hora:'',
        sintomas: ''
    });
    const [error, actualizarError] = useState(false)
    //Función que se ejecuta cada vez que un usuario escribe en un input

    const actualizarState = e =>{
     
        actualizarCita({
            ...cita,
           [e.target.name]: e.target.value
        })
    }
    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;
    
    //Al pulsar agregar cita

    const submitCita = (e) =>{
        e.preventDefault();

        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        
        actualizarError(false);
        
        //Asignar un ID, para ello instalamos uuid
        cita.id = uuid();
        
        

        // Crear la cita
        crearCita(cita);


        //Reiniciar el formulario
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '', 
            hora:'',
            sintomas: ''
        });
        
  
    }

    return (
     <Fragment>
         <h2>Crear Cita</h2>

         { 
             error ? <p className = 'alerta-error'>Todos los campos son obligatorios</p> : null
         }

         <form
            onSubmit = {submitCita}
         >
             <label>Nombre Mascota</label>
             <input
                type = 'text'
                name = 'mascota'
                className = 'u-full-widht'
                placeholder = 'Nombre de la mascota'
                onChange = {actualizarState}
                value = {mascota}
             />
             <label>Nombre Dueño</label>
             <input
                type = 'text'
                name = 'propietario'
                className = 'u-full-widht'
                placeholder = 'Nombre del dueño de la mascota'
                onChange = {actualizarState}
                value = {propietario}
             />
             <label>Fecha alta</label>
             <input
                type = 'date'
                name = 'fecha'
                className = 'u-full-widht'
                onChange = {actualizarState}
                value = {fecha}
                             />
             <label>Hora</label>
             <input
                type = 'time'
                name = 'hora'
                className = 'u-full-widht'
                onChange = {actualizarState}
                value = {hora}
             />            
             <label>Síntomas</label>
             <textarea
                 className = 'u-full-widht'
                 name = 'sintomas'
                 onChange = {actualizarState}
                 value = {sintomas}
             ></textarea>
             <button
                type ='submit'
                className = 'u-full-width button-primary'
                onChange = {actualizarState}
              
             
             >Agregar Cita</button>
         </form>
     </Fragment>
    );
};


export default Formulario;