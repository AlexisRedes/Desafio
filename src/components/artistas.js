import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import obetenerArtistas from '../api/obetenerArtistas';
import { Link } from 'react-router-dom';
// import styled from '@emotion/styled';


const Card = styled.div`
    min-width: 10rem;
    border-radius: 5px;
    background: #fff;
    max-width: 65%;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
    }
`;
const MyH5 = styled.h5`
    font-size: 1em;
`;

const MyImg = styled.img`
    border-radius: 10%;
    filter: drop-shadow(5px 5px 5px black);
    
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
            <Card className='position-relative'>
                <div className='container d-flex justify-content-center align-items-center h-100 overflow-hidden  '>
                    <MyImg src={api?.photo} width="160" height="210" className='p-2'></MyImg>
                </div>
                <div className='card-body text-light '>
                        <MyH5 className='card-title text-center text-nowrap overflow-hidden'>{api?.name}</MyH5>
                </div>
            </Card>
        </Link>
        

    )
}

export default Artistas;