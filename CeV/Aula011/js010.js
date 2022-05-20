
function testeVel(){
    var vel = Number(document.getElementById("tvel").value)

    if (vel > 60){
        var r = "A cima do limite de velocidade"
    }else{
        var r = "Dentro do limite de velocidade"
    }
    var res = document.getElementById("res")

    res.innerHTML = r

}