const custo = 100
const valorVenda = 140

if (custo < 0 || valorVenda < 0) {
    console.log('valor de venda tem que ser positivo')
    return
}

let valorComImposto = custo * 1.2

let lucro = valorVenda - valorComImposto

console.log(lucro)