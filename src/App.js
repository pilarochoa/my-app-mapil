import { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Natura from './components/Natura';

function App() {
  const [nombres, setNombres] = useState([]);
  
  
  useEffect(() => {
    const servicio = () => {
      /* fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        console.log('respuesta del servicio consumido = ', json);
        setNombres(json);
      }) */
    }
   
    servicio();
    setNombres(['Edison', 'Marleny', 'Gloria', 'Eliza', 'Luciana ']);
  }, []);
  
  return (
    <div className="App">
      <NavbarComponent />
      <Natura />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {nombres.map((nom) => {
          return(
            <p>
              Edit <code>src/App.js</code> {nom}.
            </p>
            
          )
        })}
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
