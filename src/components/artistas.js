import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import obetenerArtistas from '../api/obetenerArtistas';
import obtenerAlbunes from '../api/obtenerAlbums';
import { Link } from 'react-router-dom';
// import styled from '@emotion/styled';


const Card = styled.div`
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }
`;

const Artistas = ({ id }) => {

    const [api, setApi] = useState();
    useEffect(async () => {
        const artistas = await obetenerArtistas(id)
        // obtenerAlbunes(api?.name)

        setApi(artistas)
    }, [])

    return (

        <Link to={`/detalle/${api?.id}`} className='text-decoration-none' >
            <Card className='position-relative bg-dark'>
                <div className='container d-flex justify-content-center align-items-center h-100 overflow-hidden'>
                    <img src={api?.photo} width="200" height="180" className='p-2 rounded-circle'></img>
                </div>
                <div className='card-body text-light '>
                        <h5 className='card-title'>{api?.name}</h5>
                </div>
            </Card>
        </Link>
        

    )
}

export default Artistas;