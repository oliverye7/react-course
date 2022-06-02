import logo from './logo.svg'
import './Navbar.css'
import './fonts.css'

function Navbar() {
    return (
        <nav>
            <img src={logo} className="logo"></img>
            <h3 className="nav--logo_text">AlanFacts</h3>
            <h4 className="nav--title">React Course - Project I</h4>
        </nav>
    );
}

export default Navbar;