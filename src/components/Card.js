import React from 'react'

const Card =(props) =>{
    return(
        <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">Nombre: {props.nombre}</p>
                <p className="card-text">Apellido: {props.apellido}</p>
            </div>
        </div>
        </>
    )
}

export default Card