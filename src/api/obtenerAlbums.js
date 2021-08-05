import funcion from '../utils/index'



const obtenerAlbums = async (nombre) => {

    const artista = funcion(nombre);
    
    const data = await fetch(`https://api.spotify.com/v1/search?q=${artista}&type=album`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + window.localStorage.getItem('token')
        }),
    })
    const album = await data.json()
        
    return album
  
}

export default obtenerAlbums;