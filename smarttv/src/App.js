import logo from './logo.svg';
import './App.css';
import {Sidebar} from './Views/Sidebar';
import  Channels  from './Views/Channels';
import { MovieInfo } from './Views/MovieInfo';
import CinameMovies from './Components/CinemaMovies';
import { VideoJSView } from './Views/VideoJSView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  

  function MainPage(){
    return(
      <>
      <Sidebar/>
      <Channels/>
      </>
    );
    
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage/>}/>
        <Route index path="/MovieInfo" element={<MovieInfo/>}/>
        <Route index path="/VideoJSView" element={<VideoJSView/>}/> 
        <Route index path="/OnlineCinema" element={<CinameMovies/>}/>
      </Routes>
      
    </BrowserRouter>
  )

}





export default App;
