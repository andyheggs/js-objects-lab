/*### Montage

Create a `montage` object to psyche yourself up. It should have the following properties:
- `gameFace` (String Emoji)
- `readyForThis` (Boolean)
- `victorySound` (String)

Give this object whatever values you see fit 😇 😈.

When you're done, `console.log` your object, and your object's `victorySound`. 

*/

const montage = {
    gameFace: ";-)",
    readyForThis: true,
    victorySound: "tadah!"
}

console.log(montage);


/*### Hometown

Create a `hometown` object to describe your local village/town/city, which has the following properties:
- `name` (String)
- `population` (Number)
- `country` (Object)

The country object inside should also have a name and population!

Now:
- `console.log` the name of your hometown and it's population. 
- Then `console.log` just your hometown's country name 
- and finally the country's population.
*/

const hometown = {
    name: "Sulby",
    population: 1000,
    country: {
        name: "Isle of Man",
        population: 85000,
    }
    
}

console.log(hometown.name, hometown.population)
console.log(hometown.country.name)
console.log(hometown.country.population)

/*### Movie Characters

Create an array of three of your favourite movie `characters`. Each character should be an object with the following properties:

- `name` (String)
- `movie` (String)

Now:
- `console.log` out the name of the first character in your array.
- For each of the characters in your array, `console.log` their name and their movie e.g. `'I am Mufasa from The Lion King.'` 
*/

const movieCharacters = [
    {
        name: "Tom Hanks",
        movie: "Castaway",
    },
    {
        name: "Leo Di C",
        movie: "Inception",
    },
    {
        name: "Ant Hop",
        movie: "Any",
    }
] 

    console.log(movieCharacters[0]);
    movieCharacters.forEach(character => {
        console.log(`I am ${character.name} from the ${character.movie}`);
    });    

    /*### Friendly Monkey
​
Create a monkey object, which has the following properties:
- `name` (String)
- `species` (String)
- `foodsEaten` (Array)
​

And the following methods:
- `eatSomething(food)` which adds a new item into the monkey's foodsEaten array.
- `introduce()`: returns a string introducing itself, including its name, species, and the last thing it ate. 

​
Exercise your monkey by retrieving its properties and 
using its methods. Practice using both syntaxes for retrieving properties (dot notation and bracket notation).
​*/

const monkey = {
    name: "chimpy",
    species: "chimp",
    foodsEaten: [],
    eatSomething(food) {
        this.foodsEaten.push(food);
    },
    introduce() {
        let lastFood = this.foodsEaten[this.foodsEaten.length -1];
        return `Hi my name is ${this.name}, I am ${this.species}, and the last thing I ate was ${lastFood}` 
    }
}

monkey.eatSomething("apple");
monkey.eatSomething("grape");
monkey.eatSomething("pear");

console.log(monkey.name);   
console.log(monkey.species);    
console.log(monkey.foodsEaten); 

console.log(monkey["name"]);      
console.log(monkey["species"]);    
console.log(monkey["foodsEaten"]);

console.log(monkey.introduce());


Frankenstein's Monster

const laboratory = {
    monster: {}, 
    
    experiment(partName, partValue) {
        this.monster[partName] = partValue;
    }
  };
  
  laboratory.experiment('tentacles', 'very slimy parts');
  laboratory.experiment('eyeCount', 13);
  laboratory.experiment('hair', { colour: 'Red', density: 10 });
  

  console.log(laboratory.monster);

