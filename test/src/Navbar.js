import logo from './assets/airbnb.png';

function Navbar() {
    return (
        <div className='shadow-md mt-5 pb-3'>
            <img src={logo} className="mx-5 my-3 h-12 max-w-xs"></img>
        </div>
    );
}

export default Navbar;