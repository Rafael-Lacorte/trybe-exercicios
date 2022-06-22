let salarioBruto = 3000

let inssFaixa1 = 0.08
let inssFaixa2 = 0.09
let inssFaixa3 = 0.11
let inssFaixa4 = 570.88

if (salarioBruto < 1556.94) {
    var salarioBase =  salarioBruto * (1 - inssFaixa1)
} else if (salarioBruto > 5189.82) {
    var salarioBase = salarioBruto - inssFaixa4
} else if (salarioBruto > 2594.93) {
    var salarioBase = salarioBruto * (1 - inssFaixa3)
} else if (salarioBruto > 1556.95) {
    var salarioBase = salarioBruto * (1 - inssFaixa2)
}

console.log(salarioBase);

let irpjFaixa2 = 0.075
let irpjFaixa3 = 0.15
let irpjFaixa4 = 0.225
let irpjFaixa5 = 0.275

if (salarioBase < 1903.98) {
    var salarioLiquido = salarioBase;
} else if (salarioBase > 4664.68) {
    var salarioLiquido = salarioBase * (1 - irpjFaixa5) + 896.36 
} else if (salarioBase > 3751.06) {
    var salarioLiquido = salarioBase * (1 - irpjFaixa4) + 636.13
} else if (salarioBase > 2826.66) {
    var salarioLiquido = salarioBase * (1 - irpjFaixa3) + 354.80
} else if (salarioBase > 1903.99) {
    var salarioLiquido = salarioBase * (1 - irpjFaixa2) + 142.80
}

console.log(salarioLiquido);