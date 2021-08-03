const foramdorquery = (nombre) => {
 
    const palabra = nombre?.toLowerCase()

    return palabra?.replace(/\s+/g, '%20')
    
}

export default foramdorquery;