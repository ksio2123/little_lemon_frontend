import Nav from './Nav';
import Logo from './Asset 16@4x.png'
function Header() {
    return (
        <header>
            <img src={Logo} className='header__logo' alt="sample"/>
            <Nav />
        </header>
    );
  }

export default Header;