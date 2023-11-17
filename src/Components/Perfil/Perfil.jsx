export default function Perfil(props){

    
        return (
          <div perfil="tarjeta">
            <h2>Nombre: {props.nombre}</h2>
            <p>Edad: {props.edad}</p>
            <p>Correo: {props.correo}</p>
          </div>
        )
    }

