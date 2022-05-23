
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')

    var time = new Date()
    var hora = time.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //manha
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}

