function checkprime(num){
 let count_fac=0
  for(let x=0; x<=num; x++){
      if(num%x==0){
    counnt_fac++
    }
   }
    if(count_fac==2){
      console.log(num, "is prime");
    }else{
    console.log(num,"is not prime"
    }
}
checkPrime(13);
