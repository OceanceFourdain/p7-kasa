import logo_footer from '../../img/LOGO_bas.png';
import "./Css/footer.css";

function Footer() {
    return(
        <footer>
        <img src={logo_footer} id="App-footer-logo" alt=""/>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    )
}

export default Footer;
