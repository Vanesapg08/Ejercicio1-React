
import { useState } from "react"
import "./Tema.css";

export default function Tema(props){
    const [ tema, setTema] = useState("Claro");

    return(<div className={tema}>
            <button onClick={()=>{
                    setTema("Claro");
            }}>Claro</button>

            <button onClick={()=>{
                    setTema("Oscuro");
            }}>Oscuro</button>

        </div>


    )

}