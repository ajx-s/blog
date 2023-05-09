
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import Home from './component/Home';
import Addblog from './component/Addblog';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Addblog />} />





      </Routes>



    </div>
  );
}

export default App;
