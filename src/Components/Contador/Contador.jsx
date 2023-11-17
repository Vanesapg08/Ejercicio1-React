import { useState } from "react"

export default function Contador(props){
    const [estado, setEstado] = useState(0);

    return( 
        <div>
            {estado}
          <button onClick={()=>{
            setEstado(estado+1);
          }}>Incrementar</button>

          <button onClick={()=>{
            setEstado(estado-1);
          }}>Decrementar:</button>

          <button onClick={()=>{
            setEstado(0);
          }}>Restablecer:</button>
        </div>
      )


}