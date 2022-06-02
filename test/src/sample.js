import logo from './logo.svg';
import './Navbar.css';
import Body from './Body';
import Footer from './Footer';

function Navbar() {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <ul className="nav-items">
                        <li>Evidence</li>
                        <li>Witnesses</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
            <Body/>
            <Footer />
        </div>
    );
}

export default Navbar;