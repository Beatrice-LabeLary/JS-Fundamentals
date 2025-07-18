
let num = parseInt(process.argv[2]);
if (isNaN(num)){
    console.log(1);
} else {

let factorialNumb = factorial(num);

console.log(factorialNumb);
}


function factorial(a){
    
    if ( a <= 1){
         return 1;
    } else {
        return a * factorial(a-1);
    }

}