import funcion from '../utils/index'



const buscarArtista = async (nombre,token) => {

    const artista = funcion(nombre);
    
    const data = await fetch(`https://api.spotify.com/v1/search?q=${artista}&type=artist`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token?.token
        }),
    })
    const album = await data.json()

    return album

}

export default buscarArtista;