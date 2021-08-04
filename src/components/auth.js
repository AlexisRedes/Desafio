import React,{useEffect,useState} from 'react';
import {Link, Redirect } from "react-router-dom";
import isValid from '../utils/verificador';
import imagen from '../image/image2.png'

const Auth = ({setAcceso,ingreso,setIngreso,habilitacion}) => {

    var token = '';
    

    const onChange = async e =>{
        token = e.target.value
        const validacion = await isValid(token)
        console.log(validacion)
        if(validacion?.acceso){
            setAcceso(validacion?.acceso)
            window.localStorage.setItem('token',token)
        }
    }

    useEffect(async()=>{
        const valid =await isValid(window.localStorage.getItem('token'))
        if(!valid){
            setIngreso(false)
        }
        if(window.localStorage.getItem('token') !=''){
            setIngreso(false)
        }
        

    },[])


    const handleSubmit=(e)=>{
        e?.preventDefault()
    }


    return (

        <div className='container pt-5 h-100'>
            
            {ingreso?
                        <div className='container d-flex justify-content-center align-items-center h-100 overflow-hidden p-2'>
                        <img src={imagen} width="200" height="180" className='p-1 rounded-circle'></img>
                        <form 
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
            :<Redirect to='/home'/>}
            
            
        </div>

    )
}

export default Auth;