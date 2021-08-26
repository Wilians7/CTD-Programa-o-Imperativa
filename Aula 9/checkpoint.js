// Ex 1
function senha(num) {
    if (num == 1234) {
        return console.log('Acesso Permitido')
    } else {
        return console.log('Acesso Negado')
    }
}

senha(1245)

// Ex 2
function valor(numA, numB) {
    if (numA > numB) {
        return console.log(`O número ${numA} é maior que ${numB}`)
    } else if (numA < numB) {
        return console.log(`O número ${numA} é menor que ${numB}`)
    } else {
        return console.log("Os dois números são iguais")
    }

}

valor(10,07)

// Ex 3
let mes = 4 
switch (mes) {
    case 1:
        console.log('Janeiro')
        break
    case 2:
        console.log('Fevereiro')
        break
    case 3:
        console.log('Março')
        break
    case 4:
        console.log('Abril')
        break
    case 5:
        console.log('Maio')
        break
    case 6:
        console.log('Junho')
        break
    case 7:
        console.log('Julho')
        break
    case 8:
        console.log('Agosto')
        break
    case 9:
        console.log('Setembro')
        break
    case 10:
        console.log('Outubro')
        break
    case 11:
        console.log('Novembro')
        break
    case 12:
        console.log('Dezembro')
        break
}

//Ex 4
var senha = 1234
var validacao = senha == 1234 ? 'Senha correta' : 'Senha Incorreta'
console.log(validacao)

//MICROONDAS//

function esquentarComida(opcao, tempo) {
    //opção fora da tabela
    if (opcao < 1 || opcao > 5) {
        console.log('Opção Inválida')
    }
    //para pipoca
    if (opcao == 1 && tempo < 10) {
        console.log('Tempo Insuficiente')
    }
    if (opcao == 1 && (tempo >= 10 && tempo <= 20)) {
        console.log("Prato pronto. Bom apetite!")
    }

    if (opcao == 1 && (tempo > 20 && tempo <= 30)) {
        console.log('Queimou')
    }
    if (opcao == 1 && tempo > 30) {
        console.log('KABUM')
    }
    //para macarrão e brigadeiro
    if ((opcao == 2 || opcao == 5) && tempo < 8) {
        console.log('Tempo Insuficiente')
    }
    if ((opcao == 2 || opcao == 5) && (tempo >= 8 && tempo <= 16)) {
        console.log("Prato pronto. Bom apetite!")
    }

    if ((opcao == 2 || opcao == 5) && (tempo > 16 && tempo <= 24)) {
        console.log('Queimou')
    }
    if ((opcao == 2 || opcao == 5) && tempo > 24) {
        console.log('KABUM')
    }
    //para carne
    if (opcao == 3 && tempo < 15) {
        console.log('Tempo Insuficiente')
    }
    if (opcao == 3 && (tempo >= 15 && tempo <= 30)) {
        console.log("Prato pronto. Bom apetite!")
    }

    if (opcao == 3 && (tempo > 30 && tempo <= 45)) {
        console.log('Queimou')
    }
    if (opcao == 3 && tempo > 45) {
        console.log('KABUM')
    }
    //para feijão
    if (opcao == 4 && tempo < 12) {
        console.log('Tempo Insuficiente')
    }
    if (opcao == 4 && (tempo >= 12 && tempo <= 24)) {
        console.log("Prato pronto. Bom apetite!")
    }

    if (opcao == 4 && (tempo > 24 && tempo <= 36)) {
        console.log('Queimou')
    }
    if (opcao == 4 && tempo > 36) {
        console.log('KABUM')
    }
    //para brigadeiro
    if ((opcao == 5) && tempo < 8) {
        console.log('Tempo Insuficiente')
    }
    if ((opcao == 5) && (tempo >= 8 && tempo <= 16)) {
        console.log("Prato pronto. Bom apetite!")
    }

    if ((opcao == 5) && (tempo > 16 && tempo <= 24)) {
        console.log('Queimou')
    }
    if ((opcao == 5) && tempo > 24) {
        console.log('KABUM')
    }
}
esquentarComida(3, 15)