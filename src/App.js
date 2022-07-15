
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componants/About/About';
import Blogs from './componants/Blogs/Blogs';
import Dashboard from './componants/Dashboard/Dashboard';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import Reviews from './componants/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>


      </Routes>

    </div>
  );
}

export default App;
