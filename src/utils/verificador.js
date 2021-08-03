const isValid = async (token) =>{

    
    const id = '0oSGxfWSnnOXhD2fKuz2Gy'

    const data = await fetch(`https://api.spotify.com/v1/search?q=michel&type=artist`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        }),
    })

    const artista = await data.json()
    if(artista.error?.status === 401){
        console.log(artista?.error?.message)
        return {
            message:console.log(artista?.error?.message),
            acceso:false
        }
       
    }

    return {
        message: "acceso permitido",
        acceso:true
    }


}


export default isValid;