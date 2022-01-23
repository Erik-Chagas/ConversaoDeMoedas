const exampleObject = {
    "fizz": "buzz", 
    "foo": null, 
    "bar": 42
}

function faxina(obj){
    for (let i in obj){
        if(obj[i] === null){
            delete obj[i]
        }
    }

    return obj
}

console.log(faxina(exampleObject))