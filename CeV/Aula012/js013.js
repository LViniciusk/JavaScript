var time = new Date()
var dia = time.getDay()

switch (dia){
    case 0:
        var tdia = "Domingo"
        break

    case 1:
        var tdia = "Segunda"
        break

    case 2:
        var tdia = "Terça"
        break

    case 3:
        var tdia = "Quarta"
        break

    case 4:
        var tdia = "Quinta"
        break

    case 5:
        var tdia = "Sexta"
        break

    case 6:
        var tdia = "Sábado"
        break

    default:
        var tdia = "Dia não encontrado"
        break
}

console.log(tdia)