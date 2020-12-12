import React from 'react'
import {Link} from 'react-router-dom'

const Home =() =>{
    return(
        <>
        <div className="container">
            <div className="row justify-content-center align-items-center full-height">
                <div className="col-12">
                    <h1 className>¡Bienvenidos al webinar de React!</h1>
                    <Link to="/formulario"  className="btn btn-outline-dark mt-5">Formulario</Link>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Home