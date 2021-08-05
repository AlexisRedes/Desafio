import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
// import styled from '@emotion/styled';
import Artistas from '../components/artistas'
import isValid from '../utils/verificador'

const Home = ({artistasPrincipales,setHabilitacion}) => {
    
    const [vencimiento, setVencimiento] = useState(true)
    const [newAcces, setNewAcces] = useState(true);
    useEffect(async()=>{
        window.scroll(0,0)
        const expiracion = await isValid(window.localStorage.getItem('token'))
        if(!expiracion?.acceso){
            setVencimiento(false)
        }
        if(window.localStorage.getItem('token')===''){
            setNewAcces(false)
            setHabilitacion(false)
        }
        else{
            setHabilitacion(true)
            setNewAcces(true)
        }      
    },[])


    return (
        
        <>
            {vencimiento?<div className='container mt-5'>
            {newAcces ? <div className='row '>
 
                {
                    artistasPrincipales?.map(artista => (
                        <div className='col-md-3 p-2 '>
                            <Artistas id={artista}/>
                        </div>
                    )
                    )
                }
                
            </div> : <h1 className="alert alert-danger">Usted no tiene acceso a esta pagina, verifique su token</h1>
            }

        </div>: <Redirect to='/'/>


            }




        </>

    )
}

export default Home;
