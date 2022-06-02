import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import headshot from './imgs/headshot.jpg'

function App() {
    return (
        <div>
            <img src={headshot} className="photo"></img>
            <Main />
            <Footer />
        </div>
    );
}

export default App;