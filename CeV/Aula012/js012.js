var time = new Date()
var hora = time.getHours()
var minuto = time.getMinutes()
console.log(`são exatamente ${hora}:${minuto}h`)

if(hora > 4 && hora < 12){
    console.log("Bom dia")
}else if(hora >= 12 && hora <= 18){
    console.log("Boa tarde")
}else if(hora > 18 && hora < 24){
    console.log("Boa noite")
}else {
    console.log("Boa madrugada")
}


