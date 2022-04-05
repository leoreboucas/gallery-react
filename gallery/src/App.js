import './SASS/App.sass'

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <a href="/" className='header-brand'>Galleria</a>
        <nav className='navbar'>
          <ul>
            <li>
              <a href="/">Home</a>
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
          <ul>
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
          </ul>
        </div>
        <div className="header-menu-mobile">
          <button className='btn-mobile'><AiOutlineMenu /></button>
          <nav className="list-mob">
            <ul>
              <li>
                  <a href="/">Home</a>
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
        </div>
      </header>
      <main>
        <div className='gallery'>
          <div className="gallery-card" id='card-1'>
            <h2 className="gallery-card-title">Animais</h2>
            <a href="/" className="gallery-card-btn">Mais fotos</a>
          </div>
          <div className="gallery-card" id='card-2'>
            <h2 className="gallery-card-title">Arquitetura</h2>
            <a href="/" className="gallery-card-btn">Mais fotos</a>
          </div>
          <div className="gallery-card" id='card-3'>
            <h2 className="gallery-card-title">Cidades</h2>
            <a href="/" className="gallery-card-btn">Mais fotos</a>
          </div>
          <div className="gallery-card" id='card-4'>
            <h2 className="gallery-card-title">Decorações</h2>
            <a href="/" className="gallery-card-btn">Mais fotos</a>
          </div>
          <div className="gallery-card" id='card-5'>
            <h2 className="gallery-card-title">Esportes</h2>
            <a href="/" className="gallery-card-btn">Mais fotos</a>
          </div>
          <div className="gallery-card" id='card-6'>
            <h2 className="gallery-card-title">Natureza</h2>
            <a href="/" className="gallery-card-btn">Mais fotos</a>
          </div>
          <div className="gallery-card" id='card-7'>
            <h2 className="gallery-card-title">Paisagem</h2>
            <a href="/" className="gallery-card-btn">Mais fotos</a>
          </div>
          <div className="gallery-card" id='card-8'>
            <h2 className="gallery-card-title">Pessoas</h2>
            <a href="/" className="gallery-card-btn">Mais fotos</a>
          </div>
          <div className="gallery-card" id='card-9'>
            <h2 className="gallery-card-title">Refeições</h2>
            <a href="/" className="gallery-card-btn">Mais fotos</a>
          </div>
        </div>
      </main>
      <footer>
        <p><span>Galleria</span> &copy; 2022</p>
      </footer>
    </div>
  );
}

export default App;
