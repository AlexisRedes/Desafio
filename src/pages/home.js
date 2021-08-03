import React, {useEffect} from 'react';
// import styled from '@emotion/styled';
import Artistas from '../components/artistas'


const Home = ({artistasPrincipales, token, venrificacion,setHabilitaciones}) => {
    
    useEffect(()=>{
        if(venrificacion){
            setHabilitaciones(true)
        }
         
    },[])


    return (
        
        <div className='container'>
            {venrificacion ? <div className='container d-flex justify-content-center align-items-center h-100'>
                <div className='row p-5'>
                {
                    artistasPrincipales?.map(artista => (
                        <div className='col-md-3 p-2'>
                            <Artistas id={artista} token={token}/>
                        </div>
                    )
                    )
                }
                </div>
            </div> : <h1 class="alert alert-danger">Usted no tiene acceso a esta pagina</h1>
            }

        </div>

    )
}

export default Home;
