import React,{useState} from 'react';
import { Redirect, Link } from "react-router-dom";
import isValid from '../utils/verificador';
import imagen from '../image/image2.png'

const Auth = ({setToken,setVerificacion}) => {

    var token = ''
    
    const onChange = async e =>{
        token = e.target.value
        const validacion = await isValid(token)
        setVerificacion(validacion?.acceso)
        setToken({
            token
        })
    }


    const handleSubmit=(e)=>{
        e?.preventDefault()
        setToken({
            token
        })
    }


    return (

        <div className='container pt-5 h-100'>
            <div className='container d-flex justify-content-center align-items-center h-100 overflow-hidden p-2'>
            <img src={imagen} width="200" height="180" className='p-1 rounded-circle'></img>
            <form
                class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" 
                onSubmit={(e)=> handleSubmit(e)}
                >
                <input  
                      class="form-control form-control-dark"
                      placeholder="Itroducir Token..."
                      onChange={(e)=> onChange(e)}
                      />
                <Link to='/home'>
                        <h4 className="text-light btn btn-dark" >ingresar</h4>
                </Link>


            </form>

            </div>
            
        </div>

    )
}

export default Auth;