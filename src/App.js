import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='body-root'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
