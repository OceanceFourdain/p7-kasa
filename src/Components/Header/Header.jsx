import { Link, useLocation } from 'react-router-dom';
import Logo from '../../img/LOGO.png';
import "../Css/header.css";

function Header() {
    const pathname = useLocation().pathname;
    return (
      <header className='App-header'>
        <nav className='App-header-nav'>
            <Link to="/">
            <img id="App-logo" src={Logo} alt="Logo Kasa" />
            </Link>
            <ul className='App-header-ul'>
                <Link to="/">
                    <li className={pathname === '/' ? 'active App-header-nav-a' : 'App-header-nav-a'}
                    id="acceuil">Accueil</li>
                </Link>
                <Link to="/about">
                    <li className={pathname === '/about' ? 'active App-header-nav-a' : 'App-header-nav-a'}
                    id="aPropos">A Propos</li>
                </Link>
            </ul>
        </nav>
      </header>
    );
  }
export default Header