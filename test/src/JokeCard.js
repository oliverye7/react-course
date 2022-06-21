function JokeCard(props) {
    let active;
    active = props.on;
    return (
        <div>
            <div>
                <button onClick={() => props.toggle(props.id)} className="border border-black border-2 rounded-md p-3 mt-4 hover:bg-white">
                    Click me to toggle display status of the entire joke card
                </button>
            </div>
            {active && 
                <div>
                    <div className="text-xl bold mt-5">
                        {props.setup}
                    </div>
                    {props.punchline != false &&
                    <div className="italic mb-5">
                        {props.punchline}
                    </div>
                    }
                    <div className="grid grid-cols-1 divide-y divide-indigo-500">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            }
        </div>
    );
}

export default JokeCard;