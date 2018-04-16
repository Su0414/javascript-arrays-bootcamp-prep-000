var chocolateBars =["snickers", 
                    "hundred grand", 
                    "kitkat",
                    "skittles"
                   ];
                   
                   
 function addElementToBeginningOfArray(array, element){
   var newArray = [element, ...array];
   console.log("AEBOA-"+newArray);
   return newArray;
 }
 
 function destructivelyAddElementToBeginningOfArray(array, element){
   console.log("DAEBOA - "+array);
   return array.unshift(element);
 }
 
 function addElementToEndOfArray(array, element){
   return [...array, element];
 }
 
 
 function destructivelyAddElementToEndOfArray(array, element){
   return array.push();
 }
 
 function accessElementInArray(array, index){
   return array[index];
 }
 
 function destructivelyRemoveElementFromBeginningOfArray(array){
   return array.shift();
 }
 
 function removeElementFromBeginningOfArray(array){
   return array.slice(1);
 }
 
 function destructivelyRemoveElementFromEndOfArray(array){
   return array.pop();
 }
 
 function removeElementFromEndOfArray(array){
   return array.slice(0,array.length -1);
 }
 