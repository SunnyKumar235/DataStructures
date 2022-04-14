// Reverse String
function reversString(str){
    if(!str || !(typeof str =="string")){
      console.log("This is not correct string");
      return ;
    }
    if(str.length<2){
      console.log(str);
      return 
    }
  
    var revString="";
    for(var i=str.length-1;i>=0;i--){
      revString+= str[i];
    }
      console.log(revString);
  }
  
  reversString("Hi my name is Sunny");

  // New ES6 arrow method.
  const reverseString2 = str => [...str].reverse().join('');
  reverseString2();

  //End of reverse string.

  