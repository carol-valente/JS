function carregar() {
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');
  var data = new Date();
  //var hora = data.getHours();
  var hora = 15;
  msg.innerHTML = `Agora são ${hora} horas. <br>`;
  if (hora >= 0 && hora < 12) {
    img.src = 'imagens/manha-transp.png';
    msg.innerHTML += `Bom dia!`;
    document.body.style.background = '#af99a0';
  } else if (hora >= 12 && hora < 18) {
    img.src = 'imagens/tarde-transp.png';
    msg.innerHTML += `Boa tarde! Que tal um cafezinho? <3`;
    document.body.style.background = '#b26420';
  } else {
    img.src = 'imagens/noite-transp.png';
    msg.innerHTML += `Tenha uma excelente noite!`;
    document.body.style.background = '#262c2c';
  }
}
