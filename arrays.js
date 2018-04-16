var chocolateBars =["snickers", 
                    "hundred grand", 
                    "kitkat",
                    "skittles"
                   ];
                   
                   
 function addElementToBeginningOfArray(array, element){
   var newArray = [element, ...array];
   //console.log("AEBOA-"+newArray);
   return newArray;
 }
 
 function destructivelyAddElementToBeginningOfArray(array, element){
     return [element, ...array];
 }
 
 function addElementToEndOfArray(array, element){
   return [...array, element];
 }
 
 
 function destructivelyAddElementToEndOfArray(array, element){
   var newArray =array.push();
   return newArray;
 }
 
 function accessElementInArray(array, index){
   return array[index];
 }
 
 function destructivelyRemoveElementFromBeginningOfArray(array){
   var newArray = array.shift();
   return newArray;
 }
 
 function removeElementFromBeginningOfArray(array){
   return array.slice(1);
 }
 
 function destructivelyRemoveElementFromEndOfArray(array){
   var newArray=array.pop();
   return newArray;
 }
 
 function removeElementFromEndOfArray(array){
   return array.slice(0,array.length -1);
 }
 