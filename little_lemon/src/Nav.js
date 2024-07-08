
import {Link} from "react-router-dom";

function Nav() {

    const links = ['Home', 'About', 'Menu', 'Reservation', 'Order Online', 'Login'];
    return (
        <nav className='header__nav'>
            <ul className='header__nav-ul'>
                {links.map((link, i) => {
                    return (
                        <li key={i} className="header__nav-li"><Link to={link === 'Reservation' ? 'booking' : '/'}> {link} </Link></li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Nav;