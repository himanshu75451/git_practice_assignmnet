function checkprime(num){
  for(let x=0; x<=num; x++){
      if(num%x){
    return true;
    }
   }
    return false;
}
checkPrime(13);