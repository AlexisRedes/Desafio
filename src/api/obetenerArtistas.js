
const obtenerArtistas = async (id) => {
    
    const data = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + window.localStorage.getItem('token')
        }),
    })
    const artista = await data.json()
   try{
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
    catch(error){
        console.log(error)
    }

}

export default obtenerArtistas