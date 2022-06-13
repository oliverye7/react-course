import troll from './assets/troll.png';
function Navbar() {
    let hover = false;

    function handleHover() {
        console.log("Navbar hovered: " + hover);
    }

    return (
        <div>
            <div 
                onMouseEnter={() => {hover = true; handleHover()}} 
                onMouseLeave={() => {hover = false; handleHover()}}
                className="py-5 grid grid-cols-2 flex items-center bg-gradient-to-r from-indigo-700 to-blue-500">
                <div className="flex items-center ml-12">
                    <div className="grid grid-cols-1 justify-center bg-white rounded-full w-20 h-20">
                        <img src={troll} className="place-self-center w-14">
                        </img>
                    </div>
                    <div className="ml-5 font-bold text-4xl tracking-tighter text-white font-Karla">
                        Meme Generator
                    </div>
                </div>
                <div className="justify-self-end mr-20 font-Inter text-white text-lg">
                    React Course - Project 3
                </div>
            </div>
        </div>
    );
}

export default Navbar;