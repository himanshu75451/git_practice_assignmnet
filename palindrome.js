function PalSubString(S){
    for(x=0; x<S.length; x++){
        let bag = "";
        for(y=x; y<S.length; y++){
          bag += S[y];
          
        if(palindrome(bag) && bag.length>length){
              length==bag.length;
          }
        }
    }
    console.log(length);
}