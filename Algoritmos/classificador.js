const exampleArray = [
    {
        souEu: true,
        responsavel: true,
        nome: 'Erik'
    },
    {
        souEu: false,
        responsavel: true,
        nome: 'Carlos'
    },
    {
        souEu: false,
        responsavel: false,
        nome: 'Gabi'
    },
    {
        souEu: false,
        responsavel: false,
        nome: 'Victor'
    },
    {
        souEu: false,
        responsavel: false,
        nome: 'Amanda'
    }
]

function classificar(arr = []){
    let responsaveis = []
    let nResponsaveis = []
    let returnArr = []

    let me = arr.filter(e => e.souEu == true).map(e => e.nome)

    responsaveis = arr.filter(e => e.responsavel == true).map(e => e.nome)
    nResponsaveis = arr.filter(e => e.responsavel == false).map(e => e.nome)
    responsaveis.sort()
    nResponsaveis.sort()

    returnArr.push(me)
    returnArr.push(responsaveis)
    returnArr.push(nResponsaveis)

    return returnArr

}

console.log(classificar(exampleArray))