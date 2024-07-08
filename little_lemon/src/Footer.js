import footerImg from './Asset 20@4x.png';

import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer >
          <img className="footer__img" src={footerImg} alt="test" />
          <div className="footer__contact-info">
              <span className="contact_info"><Link to="/">Twitter</Link></span>
              <span className="contact_info"><Link to="/">Instagram</Link></span>
              <span className="contact_info"><Link to="/">ILittleLemon@littleLemon.com</Link></span>
              <span className="contact_info"><Link to="/">(123) 456-7890</Link></span>
          </div>
        </footer>
    );
  }

export default Footer;