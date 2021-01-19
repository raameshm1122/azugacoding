function minimumCharsNeeded(password){  
  var specialChars="!@#$%^&*()_+";
  var isUpper= false;var isDigit = false;var isLower= false;var isSpl=false; 
  var len= password.length;var count =0;
  for(var i=0;i<len;i++){
   let character =password.charAt(i);
    if(!isNaN(character)){
      isDigit= true;count+=1;
    }else if(specialChars.includes(character)){
      isSpl= true;
      count+=1;
    }else if(character == character.toUpperCase()){
      isUpper = true;count+=1;  
    }else if(character == character.toLowerCase()){
      isLower = true;
      count+=1; 
    } }
 
  if(isUpper && isDigit && isLower && isSpl ){
    if(6-count <=0){
      return 0;
    }else{
      return 6-count;     
    }}
else{
 return 4-isUpper-isLower-isDigit-isSpl;
}}
console.log(minimumCharsNeeded("@7999A"));