import React,{useState, useEffect} from 'react'
import styled from '@emotion/styled';
import { Link } from  "react-router-dom";
import logo from '../image/imagen.png'
import buscarArtista from '../api/buscarArtista';

const ContenedorHeader = styled.header`
  flex: 1;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.6);
  width:100%;
  padding: 0.5rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  
`;



const Header = ({busqueda, setBusqueda, setIdArtistas,error,setError,token}) =>{

    
    const onChange = async e=>{
        e.persist()
        e.preventDefault()
        await setBusqueda({busqueda: e.target.value}) 
        const artistas= await buscarArtista(busqueda?.busqueda,token);
        const ids = mapeo(artistas?.artists?.items)
        setIdArtistas(ids)
        
    }

    const mapeo = artistas =>{
        const arreglo = []
        artistas?.map(item=>(
            arreglo.push(item.id)
        ))
        return arreglo
    }

    const handleSubmit =  async e=>{
      e?.preventDefault()
      if(busqueda.busqueda === ""){
        return setError("La busqueda esta vacia")
      }

      setBusqueda({
        busqueda:''
      })
      setError("")
    }

    useEffect(()=>{
        

    },[])



    return(
        <ContenedorHeader className='position-fixed'>
            <div className='container'>
              <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <Link to='/home'>
                  <img src={logo} width="190" height="60" className='c-light'></img>
                </Link>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  
                </ul>
                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                      onSubmit={(e)=> handleSubmit(e)}
                >
                    <input 
                      
                      class="form-control form-control-dark"
                      placeholder="Search..."
                      aria-label="Search"
                      value={busqueda.busqueda}
                      onChange={onChange}
                      />
                      <p className='text-danger'>{error ? error: ''}</p>
                </form>
                <div class="text-end">
                    
                </div>
              </div>
            </div>
        </ContenedorHeader>
        
        
        
        )


}

export default Header;