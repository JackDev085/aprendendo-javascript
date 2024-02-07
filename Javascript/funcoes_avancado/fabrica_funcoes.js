//funcao que retorna um objeto
function criaPessoa(nome,sobrenome,peso,altura){
  return{
    nome,
    sobrenome,
    fala(assunto){
      return `${this.peso} está falando de ${assunto}.`
    },
    set nomeCompleto(valor){
      valor = valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')

    },
    peso:peso,
    altura:altura,
    //obtendo valor com getter
    get imc(){
      return peso / (altura**2)
    },
   
  }
}

const p1 = criaPessoa('Luiz','Otávio',80,1.80);

p1.nomeCompleto =  'maria do rosario'
console.log(p1.nome)
console.log(p1.sobrenome)
