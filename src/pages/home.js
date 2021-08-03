import React from 'react';
// import styled from '@emotion/styled';
import Artistas from '../components/artistas'

const Home = ({artistasPrincipales}) => {
    
    return (
        
        <div className='container'>
            <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className='row p-5'>
                {
                    artistasPrincipales?.map(artista => (
                        <div className='col-md-3 p-2'>
                            <Artistas id={artista} />
                        </div>
                    )
                    )
                }
            </div>
        </div>

        </div>

    )
}

export default Home;
