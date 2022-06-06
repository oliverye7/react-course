import email from './assets/email.png';
import linkedin from './assets/linkedin.png';

function Main() {
    return (
        <div>
            <p className='text-center mt-5 font-bold md-sans text-5xl'>
                Oliver Ye
            </p>
            <p className='text-center text-lg pb-3 text-zinc-600'>
                A human bean
            </p>
            <a href="https://oliverye.me">
                <p className='text-center'>
                    oliverye.me
                </p>
            </a>
            <div className="flex justify-center mx-10 my-7">
                <a href="mailto: abc@example.com" className="block flex grow justify-center px-4 py-1 w-40 rounded-lg border text-lg text-black font-medium bg-white border-slate-300 mr-4 hover:bg-slate-200 hover:border-transparent">
                    <div className="justify-evenly">
                        <img src={email} className="align-middle inline-block h-6 pr-4 my-2"></img>
                        <span className="align-middle">Email</span>
                    </div>
                </a>

                <a href="mailto: abc@example.com" className="block flex grow justify-center w-40 px-4 py-1 rounded-lg border text-lg text-white font-medium bg-[#2D77B5] border-sky-600 ml-4 hover:bg-sky-600 hover:border-transparent"> 
                    <div className="justify-evenly">
                        <img src={linkedin} className="align-middle inline-block h-6 pr-4 my-2"></img>
                        <span className="align-middle">LinkedIn</span>
                    </div>
                </a>
            </div>

            <p className="mx-10 pt-6 font-bold md-sans text-3xl">
                About
            </p>
            <p className='mx-10 mt-2'>
                I am Oliver. I am interested in Alan and Rohan. And electronics. And things that go fast. And pretty things. And working out.
                And cool biology. And Alan's butt (they're juicy). I am coding in react with tailwindcss. I am running out of things to say.
            </p>

            <p className="mx-10 pt-6 font-bold md-sans text-3xl">
                Interests
            </p>
            <p className='mx-10 mt-5 mb-10 pb-10'>
                Alans butt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
        </div>
    );
}

export default Main;