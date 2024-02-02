const button = document.querySelector('.button')
const audio = document.querySelector('.audio')

addEventListener('click', e=>{
  if(e.target === button){
    
    audio.setAttribute('autoplay','');
    console.log(e.target)
  }
})