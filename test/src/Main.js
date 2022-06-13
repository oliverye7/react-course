import React from "react";
import image from './assets/image.png';
import memeData from './memeData';

function Main() {

    const thingsArray = ["thing1", "thing2"]
    const thingElements = thingsArray.map((thing) => 
        <div key={thing}>{thing}</div>
    )

    let value = "Yes"
    let swap = true;
    
    function handleClick(e) {
        e.preventDefault();
        console.log("Button Clicked");
        getRandImg(memeData);
        thingsArray.push("thing" + (thingsArray.length + 1))
        console.log(thingsArray);
    }

    function getRandImg(memeData) {
        const memesArray = memeData.data.memes;
        const randIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randIndex].url;
        console.log(url);
    }


    return (
        <div className="mt-14 font-Karla">
            <label className="relative block">
                <form>
                    <div className="grid grid-cols-2 gap-4 ml-32 mr-32">
                        <span className="sr-only">Top Text</span>
                        <input className="placeholder:italic placeholder:text-slate-400 placeholder:text-base placeholder:mt-3
                                          block bg-white w-full border border-gray-400
                                          rounded-md py-3 pl-5 pr-3 shadow-base h-12
                                          focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Top Text" type="text" name="search"/>
                        <span className="sr-only">Bottom Text</span>
                        <input className="placeholder:italic placeholder:text-slate-400 placeholder:text-base
                                          block bg-white w-full border border-gray-400
                                          rounded-md py-3 pl-5 pr-3 shadow-sm 
                                          focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Bottom Text" type="text" name="search"/>
                    </div>

                    <div class="grid grid-cols-1">
                        <button onClick={handleClick} className="mx-32 my-6 bg-gradient-to-r from-indigo-700 to-blue-500 rounded-lg">
                            <div className="hover:bg-sky-800 hover:rounded-lg focus:bg-slate-400 py-3 flex items-center justify-center">
                                <div className="mr-3 font-Karla text-lg font-md tracking-tight text-white">
                                    Get a new meme image
                                </div>
                                <img src={image} className="h-7 ml-3">
                                </img>
                            </div>
                        </button>
                    </div>
                </form>
            </label>
        </div>
    );
}

export default Main;