import heropic from './assets/heropic.png';
function Hero() {
    return (
        <div className='flex-col block pt-3 my-10 mr-2 font-Poppins'>
            <img src={heropic} className="block w-5/6 mx-auto max-w-7xl"></img>
            <p className='mt-10 ml-10 font-semibold text-6xl'>
                Online Experiences
            </p>
            <p className='w-2/3 mt-3 ml-10 font-extralight text-2xl'>
                Join unique interactive activities led by one-of-a-kind hosts
                — all without leaving home.
            </p>
        </div>
    );
}

export default Hero;