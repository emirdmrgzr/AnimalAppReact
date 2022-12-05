import { useState }from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ["cat ","horse ","dog ","cow ","bird ","gator "];

    return animals[Math.floor(Math.random() * animals.length)]
}

function App(){
    // The first one we enter is our index variable, the second index we enter works as a function. As we use in the clickListen function.
    // We are using useState function if we are getting input from the user. 
    // Sometimes it maybe clicking something or inserting something. By this code we're supporting the return part.

    const [animals, setAnimals] = useState([]);

    function clickListen(){
        // modifies a piece of state
        setAnimals([...animals,getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal,index) =>{
        return <AnimalShow type={animal}/>;
    })
;
    return (
        <div>
            <button onClick={clickListen}>Add Animal</button>
            <div>{renderedAnimals}</div>
        </div>
    );
}


export default App;