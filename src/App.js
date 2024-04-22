import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Headerbar from './components/shared/Header';
import Home from './components/page/Home';
import About from './components/page/About';
import Webdesign from './components/page/Webdesign';
import SoftwareDevelopment from './components/page/SoftwareDevelopment';
import DigitalMarketing from './components/page/DigitalMarketing';
import BusinessProcessManagement from './components/page/BusinessProcessManagement';
import Ecommerce from './components/page/Ecommerce';
import Services from './components/page/Services';
import Contact from './components/Contact';
import Footer from '../src/components/Footer';
import Pagenotfound from '../src/components/page/Pagenotfound';
import ScroolPage from './components/shared/ScroolPage';
import '../src/style.css';


function App() {
  return (

      <BrowserRouter>
        <ScroolPage />
        <div className="App">
          <div className="Header-sec">
            <Headerbar />
          </div>
          <Routes onUpdate={() => window.scrollTo(0, 0)} >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/Webdesign' element={<Webdesign />} />
            <Route path='/SoftwareDevelopment' element={<SoftwareDevelopment />} />
            <Route path='/Ecommerce' element={<Ecommerce />} />
            <Route path='/DigitalMarketing' element={<DigitalMarketing />} />
            <Route path='/BusinessProcessManagement' element={<BusinessProcessManagement />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Pagenotfound />} />
          </Routes>

          <Footer />
        </div>

      </BrowserRouter>

  );
}

export default App;
