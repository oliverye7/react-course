import JokeCard from "./JokeCard";
import JokeCardTwo from "./JokeCardTwo";
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

    const jokeTwo = jokesData.map((joke) => {
        return <JokeCardTwo
                key = {joke.id}
                id = {joke.id}
                setup = {joke.setup}
                punchline = {joke.punchline}
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
            <div className="bg-black my-5 h-1"></div>
            {jokeTwo}
        </div>
    );
}

export default Main;
