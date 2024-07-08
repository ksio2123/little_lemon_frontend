
function Nav() {

    const links = ['Home', 'About', 'Menu', 'Reservation', 'Order Online', 'Login'];
    return (
        <nav className='header__nav'>
            <ul className='header__nav-ul'>
                {links.map((link, i) => {
                    return (
                        <li key={i} className="header__nav-li"><a href='/'> {link}</a></li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Nav;