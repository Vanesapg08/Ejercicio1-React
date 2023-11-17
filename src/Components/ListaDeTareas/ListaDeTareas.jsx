export default function ListaDeTareas(props){

return (<div>
    {props.tareas.map((t)=>{
        return <t>
            Tareas1 #{t.id}: {t.nombre}
        </t>
    }
    )}
</div>)
}

