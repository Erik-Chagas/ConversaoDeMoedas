const dateExample = new Date('2022-01-17T20:40:09.503Z')

function validade(data, str){
    const strNumerica = parseInt(str.replace(/d/g, ''))
    const now = new Date()
    const expiringDate = data
    expiringDate.setDate(data.getDate() + strNumerica)
    const dateDiff = Date.parse(expiringDate) - Date.parse(now)
    
    return (dateDiff > 0 ? true : false )
}

console.log(validade(dateExample, '2d'))