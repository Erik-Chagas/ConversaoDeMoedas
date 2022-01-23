function giveFibonacci(number){
    let n1 = 0
    let n2 = 1
    let fibonacci = []
    let nextNumber

    for(let i = 0; i < number; i++){
        fibonacci.push(n1)
        nextNumber = n1 + n2;
        n1 = n2;
        n2 = nextNumber;
    }

    return fibonacci
}

console.log(giveFibonacci(10));