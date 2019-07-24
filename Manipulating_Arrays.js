var myArray = ["Neha","Amita","Prajwal"];
//push() function
myArray.push(["Govind","Manisha"]);//Enters a multidimensional array
myArray.push("Family","tree");//different elements
console.log(myArray);
//pop() function =removes the last element of the array
var removedElement =myArray.pop();
console.log("The removed element is "+removedElement);
console.log("The array holds " +myArray);
//shift() fuction similar to pop()
var removedElementByShift = myArray.shift();
console.log("The removed Element by shift is "+removedElementByShift);
console.log("The elemnts in array after using shift operator " +myArray);
//unshift() function is similar to push() ie adds elements in the starting of the array
var elementUnshift = myArray.unshift("Pingu");
console.log(myArray); 
