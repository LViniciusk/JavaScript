


function canVote(){
    var idade = Number(document.getElementById("tidade").value)

    if (idade < 16){
        var r = "Não pode votar"
    }else if(idade >= 16 && idade < 18){
        var r = "Voto Opcional"
    }else if(idade >=18 && idade <60){
        var r = "Voto Obrigatorio"
    }else{
        var r = "Voto Opcional"
    }

    var res = document.getElementById("res")

    res.innerHTML = r
}