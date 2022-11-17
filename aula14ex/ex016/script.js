function contar() {
  var start;
  if (document.getElementById('txtinicio').value != '') {
    start = Number(document.getElementById('txtinicio').value);
  } else {
    start = 'erro';
  }
  var end;
  if (document.getElementById('txtfim').value != '') {
    end = Number(document.getElementById('txtfim').value);
  } else {
    end = 'erro';
  }
  var step;
  if (document.getElementById('txtpasso').value != '') {
    step = Number(document.getElementById('txtpasso').value);
  } else {
    step = 'erro';
  }
  var res = document.getElementById('res');
  var contagem = '<p>Contando: </p>';
  var c = 0;
  if (start == 'erro' || end == 'erro' || step == 'erro') {
    contagem = 'Impossível contar!';
    res.innerHTML = contagem;
  } else if (step == 0) {
    window.alert('Passo inválido! Considerando PASSO = 1.');
    for (c = start; c <= end; c++) {
      contagem += ` ${c} \u{1F449}	`;
    }
    res.innerHTML = contagem;
  } else {
    for (c = start; c <= end; c += step) {
      contagem += `${c} \u{1F449}	`;
    }
    res.innerHTML = contagem;
  }
}
