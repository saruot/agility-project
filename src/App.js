import './App.scss';
import {Routes, Route} from 'react-router-dom';

// Components
import Navbar from './components/Navbar';



// Pages
import Agility from './pages/agility'
import Home from './pages/Home'
function App() {
  return (
   <>
   <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='agility' element={<Agility/>}/>
  </Routes>
   </>
  );
}

export default App;
