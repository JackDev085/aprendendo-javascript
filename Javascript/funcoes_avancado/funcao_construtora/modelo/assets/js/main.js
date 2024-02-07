function Calculadora(){
  this.display = document.querySelector(".display")

  this.inicia = ()=>{
    this.capturaCliques();
    this.capturaEnter()
  }

  this.capturaEnter =()=>{
    document.addEventListener('keypress', e =>{

      if (e.keyCode===13){
        this.resultNumDisplay()
      }
    })
  }
  this.capturaCliques = () =>{
    document.addEventListener('click', event =>{
      const el = event.target;
      if(el.classList.contains('btn-num')){
        this.addNumDisplay(el)
      }

      if(el.classList.contains('btn-del')){
        this.delNumDisplay()
      }
      if(el.classList.contains('btn-eq')){
        this.resultNumDisplay()
      }
      if(el.classList.contains('btn-clear')){
        this.clearNumDisplay(el)
      }
    })
   
    //Adicionando texto a tela 
  this.addNumDisplay = el =>{

    this.display.value += el.innerText
    this.display.focus()

  } 
    
    //Zerando o texto da tela 
  this.clearNumDisplay = () => this.display.value = ''
    //Deletando o último elemento da tela
  this.delNumDisplay = () => {
    
    this.display.value =  this.display.value.slice(0,-1)
  }
    //Imprimindo o resultado na tela
  this.resultNumDisplay = ()=>{
    try {
      const conta = eval(this.display.value)
      if(!conta){
        alert("Conta inválida")
        return
      }
       this.display.value = conta
       
      
    } catch (error) {
      alert("Conta invalida")
      return;
    }
  }


  }

 
}

const calculadora = new Calculadora
calculadora.inicia()