import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import obtenerAlbums from '../api/obtenerAlbums';
import obtenerArtistas from '../api/obetenerArtistas';
import SimplePopover from '../components/popover';
import { Link } from  "react-router-dom";

const Detalles = () => {

    const [artista, setArtista] = useState()
    const [albums, setAlbums] = useState();
    const {id} = useParams();

    useEffect(async()=>{
        const artista =await obtenerArtistas(id);
        setArtista(artista)
        const albums = await obtenerAlbums(artista?.name)
        setAlbums(albums);
    },[])



    return (
        <div className='container  mt-5'>
            <div className='row'>
                <div className='col mt-5'>
                        <div className='container d-flex justify-content-center h-100'>
                            <img src={artista?.photo} width="305" height="320"></img>
                            <div className='card-body text-light'>
                                <h1 className='card-body text-light'>{artista?.name}</h1>
                                <h2 className='card-body text-light'>followers: {artista?.followers}</h2>
                                <h2 className='card-body text-light'>popularity: {artista?.popularity}</h2>
                                <div>
                                        <a href={`https://open.spotify.com/artist/${artista?.id}`} target="_blank">
                                            <h4 className="text-light btn btn-dark" >Abrir en Spotify</h4>
                                        </a>
                                        <SimplePopover generos={artista?.genres}/>
                                </div>

                            </div>
                    
                        </div>
                </div>
                    <div className='container'>
                        <div className='container mt-5'>
                            <h1 className="text-light">Álbumes</h1>
                                {
                                    albums?.albums?.items?.map(item=>(
                                    <>   
                                            <a href={item?.external_urls.spotify} target="_blank" className='text-decoration-none'>
                                                <h4 className="text-light" >{item.name}</h4>
                                            </a> 
                                    </>
                                    ))
                                }
                        </div>
                </div>
                
            </div>
        </div>
        
    )
}


export default Detalles;
