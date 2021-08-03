import token from './token'
const obtenerArtistas = async (id) => {
    

    const data = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token()
        }),
    })
    const artista = await data.json()
    const sigleartist = {
        id:artista?.id,
        name: artista?.name,
        photo: artista?.images[0]?.url,
        followers: artista?.followers.total,
        popularity: artista?.popularity,
        genres: artista?.genres
    }

    return sigleartist

}

export default obtenerArtistas