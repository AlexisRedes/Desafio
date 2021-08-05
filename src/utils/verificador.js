const isValid = async (token) =>{

    
    console.log(token)
    const data = await fetch(`https://api.spotify.com/v1/search?q=duki&type=artist`, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        }),
    })

    const artista = await data.json()
    console.log(artista)
    if(artista.error?.status >= 400){
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