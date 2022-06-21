import JokeCard from "./JokeCard";
import jokesData from "./jokesData";
import React from "react";

function Main() {
    const [jokes, setJokes] = React.useState(jokesData);

    const jokeElements = jokes.map((joke) => {
        return <JokeCard
                key = {joke.id}
                id = {joke.id}
                setup = {joke.setup}
                punchline = {joke.punchline}
                on = {joke.on}
                toggle = {toggleJoke}
                />
    }) 


    function toggleJoke(id) {
        console.log(id);
        setJokes(prevStatus => {
            return prevStatus.map((element) => {
                return element.id === id ? {...element, on: !element.on} : element
            })
        })

    }
    return (
        <div>
            {jokeElements}
        </div>
    );
}

export default Main;
