 const person = {name: "Joe", otherName:{"bob": "kjh"}}  

 let copyCat = obj =>{
    return Object.assign({}, obj)
 }
 const copy = copyCat(person);



 console.log(person) // "Joe"  
 console.log(copy)  // "Joe"
 
 person.name = "Jane"
 
 console.log(person) // "Jane"  
 console.log(copy)  // "Joe" (remains unchanged because it is a "deep copy" of the original) 