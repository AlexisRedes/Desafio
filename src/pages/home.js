import React, {useEffect, useState} from 'react';
// import styled from '@emotion/styled';
import Artistas from '../components/artistas'

const Home = ({artistasPrincipales,setHabilitacion}) => {
    
    const [newAcces, setNewAcces] = useState(true);
    useEffect(async()=>{
        window.scroll(0,0)
        console.log(window.localStorage.getItem('token'))
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
        
        <div className='container'>
            {newAcces ? <div className='container d-flex justify-content-center align-items-center h-100'>
                <div className='row p-5'>
                {
                    artistasPrincipales?.map(artista => (
                        <div className='col-md-3 p-2'>
                            <Artistas id={artista}/>
                        </div>
                    )
                    )
                }
                </div>
            </div> : <h1 className="alert alert-danger">Usted no tiene acceso a esta pagina, verifique su token</h1>
            }

        </div>

    )
}

export default Home;
