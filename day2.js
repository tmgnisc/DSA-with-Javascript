//Ques 2 - Fibonacci Number
//Fibonacci Series -> 0,1,1,2,3,5,8,13,21,34,55,89,144,233...
// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2) , for n>1
//input : n =3 ----->>>>> output : 2


const fib = function (n){
    const arr  = [0,1]
    for(let i = 2; i <= n; i++){
        arr.push(arr[i-1] + arr[i-2])
    }
console.log(arr[n])
}
fib(5)


//second method using recursion
const recursionFib = function(n){
    if(n<=1) {
        return n;

    }
    return recursionFib(n-1) + recursionFib(n-2)
}
console.log(recursionFib(3))
