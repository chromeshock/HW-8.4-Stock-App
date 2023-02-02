
import { Routes } from 'react-router-dom';

import Home from './components/Homepage';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Stock from './components/Stock';


const useRoutes = () => {
  
  return (
    <div>
    <Routes>
      <Routes exact path="/" element={<Home />} />
      <Routes path="/about" element={<About />} />
      <Routes path="/stocks" element={<Dashboard />} />
      <Routes path="/stocks/:symbol" element={<Stock />} />
    </Routes>
    </div>
  );
  };
  
  export default useRoutes;
