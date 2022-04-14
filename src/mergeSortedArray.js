function mergeSortedArray(array1, array2){
    //if both array have no elements
    if(array1.length==0 && array2.length==0)
    {
      return [];
    }
    //if array 1 is empty;
    if(array1.length==0){
      return array2;
    }
    //if array 2 is empty;
    if(array2.length==0){
      return array1;
    }
   
    const merageArray =[];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i=1;
    let j=1;
    for(;;){ // using for loop
      if(array1Item || array2Item){
        console.log(array1Item+":"+array2Item);
        if(!array2Item || array1Item<array2Item){
        merageArray.push(array1Item);
        array1Item = array1[i];
        i++;
      }else {
         merageArray.push(array2Item);
         array2Item = array2[j];
         j++;
      } 
      }else {
        break;
      }
    }
    // while(array1Item || array2Item){ // using while loop.
    //   console.log(array1Item+":"+array2Item);
    //   if(!array2Item || array1Item<array2Item){
    //     merageArray.push(array1Item);
    //     array1Item = array1[i];
    //     i++;
    //   }else {
    //      merageArray.push(array2Item);
    //      array2Item = array2[j];
    //      j++;
    //   } 
    // }
    console.log(merageArray);
  }
  
  mergeSortedArray([0,2,4,30],[5,6,8,31]);
  
  