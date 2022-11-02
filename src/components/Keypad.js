// Code Keypad Component Here
import react from "react";

function Keypad (){

    function typing(){
        console.log('Entering password...');
    }
    return (
        <div>
            <input onChange={typing} type="password" />
        </div>
    )
}

export default Keypad;