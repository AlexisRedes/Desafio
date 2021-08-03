import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled';
import Home from './pages/home';
import Buscador from './components/buscador';
import Detalles from './pages/detalles';
import Header from './components/header';
import Auth from './components/auth';
import css from './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const artistasPrincipales = [
  '0oSGxfWSnnOXhD2fKuz2Gy',
  '22bE4uQ6baNwSHPVcDxLCe',
  '3WrFJ7ztbogyGnTHbHJFl2',
  '1dfeR4HaWDbWqFHLkxsg1d',
  '7opp16lU7VM3l2WBdGMYHP',
  '1r4hJ1h58CWwUQe3MxPuau',
  '4wLXwxDeWQ8mtUIRPxGiD6',
  '4q3ewBCX7sLwd24euuV69X',
]

const ContenedorPrincipal = styled.div`
  flex: 1;
  position: relative;
  height: 100%;
`;

const ContenedorIndex1 = styled.div`
  position: absolute;
  z-index:1;
`;

function App() {

  const [venrificacion, setVerificacion] = useState(false)
  const [habilitaciones, setHabilitaciones] =useState(false)
  const [token, setToken] = useState({
    token:''
  })
  const [busqueda, setBusqueda] = useState({
    busqueda:''
  });
  const [idArtistas, setIdArtistas] = useState();
  const [error, setError] = useState();

  useEffect(()=>{
    setIdArtistas(artistasPrincipales)
    console.log(idArtistas)

  },[])

  return (

    <Router>
      <Switch>
        <ContenedorPrincipal>

        {habilitaciones ?<ContenedorIndex1>
          <Header
              busqueda={busqueda} 
              setBusqueda={setBusqueda} 
              idArtistas={idArtistas}
              setIdArtistas={setIdArtistas}
              error={error}
              setError={setError}
              token={token}
            />

        </ContenedorIndex1>: null}


          <div className='p-5 container d-flex justify-content-center align-items-center h-100'>
            <Route path='/' exact>
              <Auth 
                token={token}
                setToken={setToken}
                setVerificacion={setVerificacion}
              />
            </Route>
            <Route path='/home' exact>
              <Home 
              artistasPrincipales={idArtistas} 
              token={token}
              venrificacion={venrificacion}
              setHabilitaciones={setHabilitaciones}
              />
            </Route>
            <Route path='/buscar' exact>
              <Buscador />
            </Route>
            <Route path='/detalle/:id' exact>
              <Detalles token={token}
                        venrificacion={venrificacion}
              />
            </Route>
          </div>

          
        </ContenedorPrincipal>
      </Switch>
    </Router>
  );
}

export default App;
