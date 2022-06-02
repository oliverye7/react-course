import './Footer.css';
import facebook from './imgs/facebook.png';
import instagram from './imgs/instagram.png';
import github from './imgs/github.png'

function Footer () {
    return (
        <div className="footer">
            <p>Oliver Ye's Practice Stuff</p>
            <a href="https://www.facebook.com/profile.php?id=100012880591717">
                <img src={facebook} className="social-media-acc"></img>
            </a>
            <a href="https://www.instagram.com/oliver._.ye/">
                <img src={instagram} className="social-media-acc"></img>
            </a>
            <a href="https://github.com/oliverye7">
                <img src={github} className="social-media-acc"></img>
            </a>
        </div>
    );
}

export default Footer;