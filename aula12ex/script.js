function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        console.log('1')
        //BOM DIA!
        img.innerHTML = '<img src="fotomanha.png">' 
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora <= 18) {
        console.log('2')
        //BOA TARDE!
        
        img.innerHTML = '<img src="fototarde.png" alt="Foto do dia">'
        document.body.style.background = '#b9846f'
    }else {
        console.log('3')
        //BOA NOITE!
        img.innerHTML = '<img src="fotonoite.png">'
        document.body.style.background = '#515154'
    }
}