function Test() {
    const firstName= "Joe";
    const lastName= "Schmoe";
    const date = new Date();
    const hours = date.getHours() % 12

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