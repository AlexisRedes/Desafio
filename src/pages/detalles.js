import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import obtenerAlbums from '../api/obtenerAlbums';
import obtenerArtistas from '../api/obetenerArtistas';
import SimplePopover from '../components/popover';

const Detalles = ({setHabilitacion}) => {

    const [newAcces, setNewAcces] = useState(true);
   
    const [artista, setArtista] = useState()
    const [albums, setAlbums] = useState();
    const {id} = useParams();

    useEffect(async()=>{
        window.scroll(0,0)
        try{
            if(window.localStorage.getItem('token')===''){
                setNewAcces(false)
                setHabilitacion(false)
            }
            else{
                setHabilitacion(true)
                setNewAcces(true)
            }
            const artista =await obtenerArtistas(id);
            if(artista=== undefined){
                return setNewAcces(false)
            }
            setArtista(artista)
            const albums = await obtenerAlbums(artista?.name)
            setAlbums(albums);
        }
        catch(error){
            console.log(error)
        }
        
    },[])



    return (
       <>
            {newAcces ? <div className='container  mt-5'>
            <div className='row'>
                <div className='col mt-5'>
                        <div className='container d-flex justify-content-center h-100'>
                            <img src={artista?.photo} width="300" height="320" className='p-2'></img>
                            <div className='card-body text-light'>
                                <h1 className='card-body text-light p-2'>{artista?.name}</h1>
                                <h2 className='card-body text-light p-2'>followers: {artista?.followers}</h2>
                                <h2 className='card-body text-light p-2'>popularity: {artista?.popularity}</h2>
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
                                                <h4 className="text-light p-2" >{item.name}</h4>
                                            </a> 
                                    </>
                                    ))
                                }
                        </div>
                </div>
                
            </div>
        </div>:<h1 class="alert alert-danger">Usted no tiene acceso a esta pagina</h1>}
       </>
        
    )
}


export default Detalles;
