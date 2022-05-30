import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Inquires from './Pages/Inquires/Inquires';
import Faqs from './Pages/Faqs/Faqs';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Inquires' element={<Inquires />} />
          <Route path='/Faqs' element={<Faqs />} />        
        </Routes>
        <Footer />
      </BrowserRouter>    
    </div>
  );
}

export default App;
