import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './index.css';
import Router from './components/router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
      <Toaster position='bottom-center'/>
    </BrowserRouter>
  );
}

export default App;