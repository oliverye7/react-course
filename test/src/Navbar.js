import earth from './assets/planet-earth.png';

function Navbar() {
    return (
        <div className="bg-red-400">
            <div className="flex justify-center py-6">
                <div className="inline-block align-middle justify-center">
                    <img src={earth} className="h-20 inline-block align-middle">
                    </img>
                    <div className="ml-5 text-4xl text-white inline-block align-middle">
                        my travel journal.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;