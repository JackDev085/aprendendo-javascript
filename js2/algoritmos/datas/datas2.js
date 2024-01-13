function zeroAEsquerda(num) {
  return num >= 10 ? num:`0${num}`
}

function formataData() {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth()+1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  console.log( `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`)
}
const data = new Date();
dataBrasil = formataData((data))
