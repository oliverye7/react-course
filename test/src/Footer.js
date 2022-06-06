import facebook from './assets/facebook.png';
import github from './assets/github.png';
import instagram from './assets/instagram.png';

function Footer() {
    return (
        <div className='bg-[#D5D4D8] mt-10 pb-5'>
            <p className='text-center text-sm py-2'>
                My Links
            </p>
            <div className='block grid grid-cols-9 gap-4'>
                <div></div>
                <div></div>
                <div></div>
                <a href="https://www.facebook.com/profile.php?id=100012880591717">
                    <img src={facebook} className="h-10"></img>
                </a>
                <a href="https://www.instagram.com/oliver._.ye/">
                    <img src={instagram} className="h-10"></img>
                </a>
                <a href="https://github.com/oliverye7">
                    <img src={github} className="h-10"></img>
                </a>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Footer;