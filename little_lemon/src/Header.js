import Nav from './Nav';
import Logo from './Asset 9@4x.png'
function Header() {
    return (
        <header>
            <img src={Logo} height={100}/>
            <Nav />
        </header>
    );
  }

export default Header;