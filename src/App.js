// import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import AppContext from './context/AppContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';



function App() {
  let appContext = useContext(AppContext)

  return(
    <>
  <Dashboard/>
  <Login/>
  </>

  )

  
}

export default App;
