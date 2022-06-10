import pin from './assets/pin.png';

function Location(props) {
    return (
        <div className="mt-5 block ml-40">
            <div className="flex">
                <img src={props.img} className="object-cover h-96 w-72 rounded-2xl"></img>
                <div className="my-10 ml-6 font-Poppins w-1/2 mr-40">
                    <div className="flex">
                        <div className="inline-block align-middle">
                            <img src={pin} alt="location-pin" className="inline-block align-middle h-6"></img>
                            <div className="ml-3 inline-block align-middle tracking-widest">
                                {props.location}
                            </div>
                            <a href={props.link} className="ml-5 inline-block align-middle underline text-gray-400">View on Google Maps</a>
                        </div>
                    </div>
                    <div className="text-5xl mt-4 font-semibold tracking-tighter">
                        {props.title}
                    </div>
                    <div className="mt-9 font-semibold text-lg">
                        {props.tag}
                    </div>
                    <div>
                        {props.dscrp}
                    </div>
                </div>
            </div>
            <div className="border mt-5 mr-40"> </div>
        </div>
    );
}

export default Location;