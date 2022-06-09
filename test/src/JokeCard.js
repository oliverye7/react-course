function JokeCard(props) {
    return (
        <div>
            <div className="text-xl bold mt-5">
                {props.setup}
            </div>
            {props.punchline != false &&
            <div className="italic mb-5">
                {props.punchline}
            </div>
            }
            <div class="grid grid-cols-1 divide-y divide-indigo-500">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default JokeCard;