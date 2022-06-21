import React from "react";

function JokeCardTwo(props) {
    let active;
    active = true;

    const [display, setDisplay] = React.useState(active);

    function handleClick() {
        setDisplay(!display);
    }

    return (
        <div>
            <div>
                <div className="text-xl bold mt-5">
                    {props.setup}
                </div>
                {   display && 
                    props.punchline != false &&
                    <div className="italic mb-5">
                        {props.punchline}
                    </div>
                }
                <div>
                    <button onClick={handleClick} className="border border-black border-2 rounded-md p-3 my-3 hover:bg-white">
                        Show PunchLine
                    </button>
                </div>
                <div className="grid grid-cols-1 divide-y divide-indigo-500">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default JokeCardTwo;