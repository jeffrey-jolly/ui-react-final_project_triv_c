// import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import AppContext from './context/AppContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom/dist';
import { Toaster } from 'react-hot-toast';
import Editors from './pages/Editor';



function App() {
  let appContext = useContext(AppContext)

  return (
    <>
    <Toaster/>
      <Routes>
        <Route path="/create" element={<Editors/>}/>
        {appContext.userLoggedIn ? (<Route index element={<Dashboard />} />) : (<Route index element={<Login />} />)}
      </Routes>

    </>

  )


}

export default App;
