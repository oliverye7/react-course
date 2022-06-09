import JokeCard from "./JokeCard";
import jokesData from "./jokesData";

function Main() {
    const jokeElements = jokesData.map((joke) => {
        return <JokeCard
                setup = {joke.setup}
                punchline = {joke.punchline}
                />
    }) 
    return (
        <div>
            {jokeElements}
        </div>
    );
}

export default Main;
