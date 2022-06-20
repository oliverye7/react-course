import React from "react";
import P2Header from "./P2Header";
import P2Body from "./P2Body";
import boxdata from "./boxdata";
import Box from "./Box";

function Test2(props) {
    const userName = "Goob";
    const [user, setUser] = React.useState(userName);
    let fillColor
    fillColor = props.blueMode ? "#2F6690" : "#7F6A93"

    
    const [boxes, setBoxes] = React.useState(boxdata);

    const BoxDisplay = boxes.map((box) =>  {
        return <button key={box.id}>
                    <div className="w-24 h-24 rounded-md mt-5">
                        <Box
                        key = {box.id}
                        id = {box.id}
                        on = {box.on}
                        color = {fillColor}
                        toggle = {handleBoxClick}
                        />
                    </div>
               </button>
    })

    function handleBoxClick(id) {
        console.log("Button Clicked: " + id);
        setBoxes(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
    

    return (
        <div className="text-3xl">
            <div>
                You are on page 2.
            </div>
            <a href="/">
                <button className="bg-slate-300 rounded-lg p-5 hover:bg-slate-200">
                    Click me to go to page 1 (more random test stuff, just a cleaner page)
                </button>
            </a>
            <div className="mt-16">
                <P2Header
                    name={user}
                />
                <P2Body
                    name={user}
                />
            </div>
            <div className="flex">
                <div className="w-12"></div>
                <div className="self-auto bg-black h-1 w-full">
                </div>
                <div className="w-12"></div>
            </div>
            <div className="ml-10 mb-10">
                <div className="mt-14 font-bold text-4xl">
                    Boxes Challenge: 
                </div>
                <div className="mt-3 mr-64">
                    Given a datasheet of initial box states, map + render them as filled or unfilled. Then on user click of each box,
                    Toggle the boxes to filled or unfilled states
                </div>
                <button onClick={() => props.colorSwap()} className="border-2 border-black p-4 hover:bg-slate-200">
                    Click me to toggle the color of the boxes. I am an example of passing state up.
                </button>
                <div className="grid grid-rows-6">
                    {BoxDisplay}
                </div>
            </div>
        </div>
    );
}

export default Test2;