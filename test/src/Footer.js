import facebook from './assets/facebook.png';
import github from './assets/github.png';
import instagram from './assets/instagram.png';

function Footer() {
    return (
        <div>
            <a href="https://www.facebook.com/profile.php?id=100012880591717">
                <img src={facebook}></img>
            </a>
            <a href="https://www.instagram.com/oliver._.ye/">
                <img src={instagram}></img>
            </a>
            <a href="https://github.com/oliverye7">
                <img src={github}></img>
            </a>
        </div>
    );
}

export default Footer;