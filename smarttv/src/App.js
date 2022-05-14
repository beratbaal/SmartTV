import logo from './logo.svg';
import './App.css';
import {Sidebar} from './Views/Sidebar';
import { Channels } from './Views/Channels';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  

  function MainPage(){
    return(
      <Sidebar/>
    );
    
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage/>}/>
        <Route index path="/Channels" element={<Channels/>}/>
       
      </Routes>
    </BrowserRouter>
  )

}





export default App;
