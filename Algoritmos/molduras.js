function moldura(column, row){
    let txt = ''

    for(let r = 1; r <= row; r++){
        for(let c = 1; c <= column; c++){
            if((r == 1 || r == row) && (c == 1 || c == column)){
                txt += '+'
            } else {
                txt += '-'
            }
            if(c == column){
                txt += '\n'
            }

        }
    }

    console.log(txt)
}

moldura(5, 4)