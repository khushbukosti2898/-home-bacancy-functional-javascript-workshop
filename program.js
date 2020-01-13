/* function upperCaser(input){
    return input.toUpperCase();
}
module.exports=upperCaser;

//high order function
function repeat(operation,num){
    return repeate(operation*num);
}
module.exports=repeat;

//map
function doubleAll(numbers)
{
    var result=[];
    numbers.map((val)=>{ 
        result.push(val*2);
    });
    return result;
}
module.exports=doubleAll;

//filter
function getShortMessages(messages){
    var res=[];
    messages.filter((message1)=>{
         if(message1.message.length<50)
             res.push(message1.message);
    });
    return res;
}
module.exports=getShortMessages;

//every some
function checkUsersValid(goodUsers){
    return function allUserValid(submittedUsers){
        return submittedUsers.every((suser)=>{
            return goodUsers.some((gusers)=>{
                return suser.id==gusers.id;
            })
        })
           
    }
}
module.exports = checkUsersValid;
 
//reduce
    function countWords(inputWords) {
    

     return inputWords.reduce((val, word) => {
        
        val[word]= ++val[word] || 1;
        console.log("val "+val[word]);
        return val;
    },{});
}

module.exports = countWords 

//recursion
function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
      if (index > arr.length - 1) return value 
      return reduceOne(index + 1, fn(value, arr[index], index, arr)) 
    })(0, initial) 
  }
  
  module.exports = reduce;

  //Call
  

  //partial application without bind

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat( Array.prototype.slice.call(arguments)))
  }
}
module.exports = logger

  //partial application with bind
  module.exports = function(namespace) {
    return console.log.bind(console,namespace);
  }
*/
//reduce with map
module.exports = function arrayMap(arr, fn) {
    return arr.reduce((acc,value,i,arr) => {
        acc.push(fn.call(this,value,i,arr));
        return acc;
    },[])
  }