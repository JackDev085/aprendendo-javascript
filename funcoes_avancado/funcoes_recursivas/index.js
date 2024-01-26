function recursiva(n){
  if (n===0){
    return 
  }
  console.log(n*n-1)
  n=n-1
  
  recursiva(n)
}
recursiva(10)