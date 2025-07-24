 //ques 1- palindrom number
 //An integer is a palindrome when it reads the same forward and backward

 //input : x = 121 then output true
 //input x = 10 then output false


 const isPalindrom = function(x){
    if(x<0){
        return `it cannot be palindrome`
    }
    return x === +x.toString().split("").reverse().join("")
 }

//  const userInput = prompt("Enter a number:")
//  const number = Number(userInput)
 const result = isPalindrom(121)
 console.log(result)