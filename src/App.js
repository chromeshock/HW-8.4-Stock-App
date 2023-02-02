import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Symbol from "./components/Symbol";
import data from './stock-data'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard data={data} />} />
        <Route path="/stocks/:symbol" element={<Symbol data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
