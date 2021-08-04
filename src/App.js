import {useEffect} from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import Home from './pages/home';
import Buscador from './components/buscador';
import Detalles from './pages/detalles';
import Header from './components/header';
import Auth from './components/auth';
import NotFound from './components/pageNotFount';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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
  const [ingreso, setIngreso] = useState(true)
  const [acceso, setAcceso] = useState();
  const [habilitacion, setHabilitacion] = useState(false);

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

        {habilitacion ?<ContenedorIndex1>
          <Header
              busqueda={busqueda} 
              setBusqueda={setBusqueda} 
              idArtistas={idArtistas}
              setIdArtistas={setIdArtistas}
              error={error}
              setError={setError}
              setHabilitacion={setHabilitacion}
              setIngreso={setIngreso}
            />

        </ContenedorIndex1>: null}


          <div className='p-5 container d-flex justify-content-center align-items-center h-100'>
            <div className='p-5'>

            <Switch>
              <Route exact path='/home' >
                  <Home 
                    acceso={acceso}
                    setHabilitacion={setHabilitacion}
                    artistasPrincipales={idArtistas} 
                    /></Route>
            
            
            <Route exact path='/buscar' >
              <Buscador />
            </Route>
            <Route exact path='/detalle/:id' >
              <Detalles 
                acceso={acceso}
                setHabilitacion={setHabilitacion}
              />
            </Route>

            
            <Route exact path='/' >
                  <Auth 
                  setAcceso={setAcceso}
                  ingreso={ingreso}
                  setIngreso={setIngreso}
                  habilitacion={habilitacion}
                  />
                  </Route>
              <Route path='/*' component={NotFound}/>
            </Switch>
            </div>
            
          </div>
          
          
        </ContenedorPrincipal>
        
      </Switch>
    </Router>
  );
}

export default App;
