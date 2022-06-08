function JokeCard(props) {
    return (
        <div>
            <div>
                {props.opener}
            </div>
            <div>
                {props.punchline}
            </div>
        </div>
    );
}

export default JokeCard;