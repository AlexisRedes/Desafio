import funcion from '../utils/index'
import token from './token'


const obtenerAlbums = async (nombre) => {

    const artista = funcion(nombre);
    
    const data = await fetch(`https://api.spotify.com/v1/search?q=${artista}&type=album`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token()
        }),
    })
    const album = await data.json()
    console.log(album)

    return album

}

export default obtenerAlbums;