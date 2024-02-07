function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}


//setTimeOut é uma função assíncrona, ou seja, ela não é executada na ordem que foi chamada, mas sim quando o tempo dela acabar.
function f1(){
    setTimeout(function(callback){
        console.log('f1');
        if (callback) callback();
    },rand());
}
function f2(){
  setTimeout(function(){
      console.log('f2');
      if (callback) callback();

  },rand());
}
function f3(){
  setTimeout(function(){
      console.log('f3');
  },rand());
}

f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá mundo!');
        });
    });
})
