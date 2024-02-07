const input = document.querySelector('.input')
const button = document.querySelector('.button')
addEventListener('click', e=>{
  elementoApertado = e.target
  if(elementoApertado===button){
    input.value= geraCpf()
  }
})


// Função para gerar um CPF
function geraCpf() {
  // Inicializa um array vazio para armazenar os dígitos do CPF
  let cpf = [];

  // Gera os primeiros 9 dígitos do CPF
  for (let i = 0; i < 9; i++) {
    // Adiciona um número aleatório entre 0 e 9 ao array cpf
    cpf.push(Math.floor(Math.random() * 10));
  }

  // Gera o primeiro dígito verificador
  let primeiroDig = geraDigito(cpf);
  // Adiciona o primeiro dígito verificador ao array cpf
  cpf.push(primeiroDig);

  // Gera o segundo dígito verificador
  let segundoDig = geraDigito(cpf);
  // Adiciona o segundo dígito verificador ao array cpf
  cpf.push(segundoDig);

  // Converte o array cpf em uma string e remove todas as vírgulas
  cpf = String(cpf).replace(/,/g,'');

  // Retorna o CPF gerado
  return cpf;
}

function geraDigito(cpf){
  let cpfMultiplicado = multiplcaCpf(cpf);
  let total = multiplicaTotal(cpfMultiplicado);
  let digito = (11 - (total % 11));
  if(digito>9){
    digito = 0;
  };

  return digito;
};

function multiplcaCpf(cpf) {
  let cpfMultiplicado = []
  let j = cpf.length + 1
  for (let i = 0; i < cpf.length; i++) {
    cpfMultiplicado.push(multiplica(cpf[i], j))
    j--
  };
  return cpfMultiplicado;
};

function multiplica(number, multiplicador) {
  return number * multiplicador;
};
function multiplicaTotal(cpfMultiplicado){
  let total = 0;
  for(let i =0; i<cpfMultiplicado.length;i++){
    total+= cpfMultiplicado[i];
  };
  return total;
};
