import './SASS/App.sass'

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <a href="/" className='header-brand'>Galleria</a>
        <nav className='navbar'>
          <ul>
            <li>
              <a href="/" className='active'>Home</a>
            </li>
            <li>
              <a href="/">Fotos</a>
            </li>
            <li>
              <a href="/">Serviços</a>
            </li>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
          </ul>
        </nav>
        <div className='header-social-media'>
          <li>
            <a href="/">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              <FaYoutube />
            </a>
          </li>
        </div>
      </header>
      <main>
        <div className='gallery'>
          <div className="gallery-card" id='card-1'>
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
