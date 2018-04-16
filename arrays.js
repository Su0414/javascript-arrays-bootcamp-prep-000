var chocolateBars =["snickers", 
                    "hundred grand", 
                    "kitkat",
                    "skittles"
                   ];
                   
                   
 function addElementToBeginningOfArray(array, element){
   var newArray = [element, ...array];
   return newArray;
 }
 
 function destructivelyAddElementToBeginningOfArray(array, element){
     let newArray = array.unshift(element);
     return newArray;
 }
 
 function addElementToEndOfArray(array, element){
   return [...array, element];
 }
 
 
 function destructivelyAddElementToEndOfArray(array, element){
   console.log("DAEEOA="+array);
   let newArray =array.push(element);
   console.log("DAEEOA="+newArray);
   return newArray;
 }
 
 function accessElementInArray(array, index){
   return array[index];
 }
 
 function destructivelyRemoveElementFromBeginningOfArray(array){
   const newArray = array.shift();
   return newArray;
 }
 
 function removeElementFromBeginningOfArray(array){
   return array.slice(1);
 }
 
 function destructivelyRemoveElementFromEndOfArray(array){
   const newArray=array.pop();
   return newArray;
 }
 
 function removeElementFromEndOfArray(array){
   return array.slice(0,array.length -1);
 }
 