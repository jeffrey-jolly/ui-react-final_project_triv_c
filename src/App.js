// import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import AppContext from './context/AppContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom/dist';
import { Toaster } from 'react-hot-toast';
import Editors from './pages/Editor';
import HomePage from './pages/HomePage';
import SinglePage from './pages/SinglePage'



function App() {
  let appContext = useContext(AppContext)

  return (
    <>
    <Toaster/>
      <Routes>
        
        {appContext.userLoggedIn ? (<Route path='/dashboard' element={<Dashboard />} />) : (<Route path='/login' element={<Login />} />)}
        {appContext.userLoggedIn ? (<Route path="/create" element={<Editors/>}/>) : (<Route path='/login' element={<Login />} />)}
        <Route index element={<HomePage/>}/>
        <Route path='/single-page/:id' element={<SinglePage/>}/>
      </Routes>

    </>

  )


}

export default App;
