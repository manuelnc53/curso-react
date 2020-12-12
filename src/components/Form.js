import React, {useState} from 'react'
import Card from './Card'
const Form=  () =>{
    const [personas, setPersonas] = useState([])
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const click = (e) =>{
        e.preventDefault()
        setPersonas(personas =>[...personas, datos]);
        console.log(personas)
    }


    return(
        <>
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-12">
                    <form className="mb-5">
                        <div className="mb-3">
                            <input type="text" name="nombre" onChange={handleInputChange} className="form-control" placeholder="Nombre"></input>
                        </div>
                        <div className="mb-3">
                            <input type="text" name="apellido" onChange={handleInputChange} className="form-control" placeholder="apellido"></input>
                        </div>
                        <button type="button" onClick={(e)=>click(e)} className="btn btn-outline-dark">Formulario</button>
                    </form>
                </div>
                <div className="col-12">
                    {personas.map((value, index)=> 
                        <Card 
                            key={index} 
                            titulo={"Card n° "+ (index+1)} 
                            nombre={value.nombre}
                            apellido={value.apellido}
                        />)}
                </div>
            </div>
            
        </div>
        
        </>
    )
} 
export default Form