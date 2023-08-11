const Value = document.getElementById('incDecValue');

function increment(){
    // get the vlue from UI
    let value = parseInt(Value.innerText);
    //Update the value
    value = value + 1;
    //set the value onto UI
    Value.innerText = value;
};


function decrement(){
        // get the vlue from UI
        let value = parseInt(Value.innerText);
        //Update the value
        value = value - 1;
        //set the value onto UI
        Value.innerText = value;
};