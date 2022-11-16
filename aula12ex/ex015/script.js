function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.querySelector('div#res');
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!!');
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    res.innerHTML = `Idade calculada: ${idade}`;
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fsex[0].checked) {
      genero = 'Homem';
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'imagens/menino2.png');
      } else if (idade < 21) {
        img.setAttribute('src', 'imagens/homem-jovem2.png');
      } else if (idade < 50) {
        img.setAttribute('src', 'imagens/adulto2.png');
      } else {
        img.setAttribute('src', 'imagens/idoso2.png');
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher';
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'imagens/menina2.png');
      } else if (idade < 21) {
        img.setAttribute('src', 'imagens/mulher-jovem2.png');
      } else if (idade < 50) {
        img.setAttribute('src', 'imagens/adulta2.png');
      } else {
        img.setAttribute('src', 'imagens/idosa2.png');
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
