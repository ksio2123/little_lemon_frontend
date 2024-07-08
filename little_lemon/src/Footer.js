import footerImg from './Asset 20@4x.png';
function Footer() {
    return (
        <footer >
          <img className="footer__img" src={footerImg} alt="test" />
          <div className="footer__contact-info">
              <span className="contact_info"><a href="/">Twitter</a></span>
              <span className="contact_info"><a href="/">Instagram</a></span>
              <span className="contact_info"><a href="/">ILittleLemon@littleLemon.com</a></span>
              <span className="contact_info"><a href="/">(123) 456-7890</a></span>
          </div>
        </footer>
    );
  }

export default Footer;