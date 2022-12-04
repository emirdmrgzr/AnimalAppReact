import { useState }from "react";



function App(){
    const[count, setCount] = useState(0);  // The first one we enter is our index variable, the second index we enter works as a function. As we use in the clickListen function.
    // We are using useState function if we are getting input from the user. 
    // Sometimes it maybe clicking something or inserting something. By this code we're supporting the return part.

    function clickListen(){
        setCount(count+1); 
    };

    return (
        <div>
            <button onClick={clickListen}>Add Animal</button>
            <div>Number of animals : {count}</div>
        </div>
    );
}


export default App;