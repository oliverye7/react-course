import React from "react";

function Test() {
    const firstName= "Joe";
    const lastName= "Schmoe";
    const date = new Date();
    const hours = date.getHours() % 12

    // Counter Section
    const [num, setNum] = React.useState(0);

    function incrCount() {
        // standard practices is to create a function inside the setter
        // react implicitly passes in the old value into the function
        //setNum(
        //    function(oldValue) {
        //        return oldValue + 1;
        //    }
        //)
        setNum(prevNum => 
            prevNum + 1
        )
    }

    function decrCount() {
        setNum(num - 1);
    }

    // Array Display Section

    const arr = ["Thing1", "Thing2"];

    const [display, setDisplay] = React.useState(arr);

    function addThing() {
        console.log("btnClicked");
        setDisplay(prevState => [...prevState, "Thing" + (prevState.length + 1)])
        console.log(display);
    }
    
    const arrDisplay = display.map(thing => <p key={thing}>{thing}</p>)

    // toggling value states
    const vals = ["value 1", "value 2"];
    let currVal = 0;
    const [val, setVal] = React.useState(currVal);

    function toggleVal() {
        console.log("toggle");
        setVal(prevVal => prevVal === 1 ? 0 : 1 );
    }




    return (
        <div className="text-3xl">
            <div>
                Hello {firstName + " " + lastName}!
            </div>

            <div>
                It is currently about {hours} o clock
            </div>
            <div>
                {nums}
                {squared}
            </div>
            <div className="mt-32 flex">
                <div className="text-6xl text-white ml-24 bg-slate-800 w-56 h-56 rounded-full justify-center flex items-center">
                    {num}
                </div>
                <div className="grid mx-10 content-between">
                    <div className="align-top">
                        <button onClick={incrCount} className="mt-5 rounded-full bg-sky-500 w-32 h-20 text-slate-200 hover:bg-sky-400">
                            Up
                        </button>
                    </div>
                    <div className="">
                        <button onClick={decrCount} className="mb-5 justify-self-end rounded-full bg-indigo-500 w-32 h-20 text-slate-200 hover:bg-indigo-400">
                            Down
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-32 flex bg-sky-200">
                <div>
                    <button onClick={addThing} className="mb-5 justify-self-end rounded-full bg-indigo-500 w-64 h-20 text-slate-200 hover:bg-indigo-400">
                        Click Me to add a Thing
                    </button>
                    {arrDisplay}
                </div>
            </div>

            <div className="mt-32 flex bg-green-100 h-32 items-center">
                <div className="grid">
                    <button onClick={toggleVal} className="place-self-center text-2xl rounded-full bg-indigo-500 h-20 w-96 text-slate-200 hover:bg-indigo-400">
                        Click Me to change this value &#8594;
                    </button>
                </div>
                <div className="ml-20">
                    {vals[val]}
                </div>
            </div>
        </div>
    );
}

export default Test;


/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squared = nums.map((num) => {
    return num*num
})

// console.log(squares)



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
})



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const wrap = pokemon.map((name) => {
    return "<p>" + name + "</p>"
    //or 
    //return `<p>${name}</p>`
})
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here