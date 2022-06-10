import archery from './assets/archery.jpg';
import pin from './assets/pin.png';

function Location(props) {
    return (
        <div className="mt-5">
            <div className="flex">
                <img src={archery} className="object-cover h-96 w-72 rounded-2xl"></img>
                <div className="my-10 ml-6 font-Poppins w-1/2">
                    <div className="flex">
                        <div className="inline-block align-middle">
                            <img src={pin} alt="location-pin" className="inline-block align-middle h-6"></img>
                            <div className="ml-3 inline-block align-middle tracking-widest">
                                BERKELEY
                            </div>
                            <a href="https://google.com" className="ml-5 inline-block align-middle underline text-gray-400">View on Google Maps</a>
                        </div>
                    </div>
                    <div className="text-5xl font-semibold tracking-tighter">
                        Archery
                    </div>
                    <div className="mt-9 font-semibold text-lg">
                        Some tagline stuff
                    </div>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </div>
                </div>
            </div>
            <div className="border mt-5 mx-12">
            </div>
        </div>
    );
}

export default Location;