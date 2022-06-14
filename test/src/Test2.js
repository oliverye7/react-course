import React from "react";
import P2Header from "./P2Header";
import P2Body from "./P2Body";

function Test2() {
    const userName = "Goob";
    const [user, setUser] = React.useState(userName);

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
            <div>
                <div className="mt-14 font-bold text-4xl ml-10">
                    Boxes Challenge: 
                </div>
                <div className="ml-10 mt-3 mr-64">
                    Given a datasheet of initial box states, map + render them as filled or unfilled. Then on user click of each box,
                    Toggle the boxes to filled or unfilled states
                </div>
            </div>
        </div>
    );
}

export default Test2;