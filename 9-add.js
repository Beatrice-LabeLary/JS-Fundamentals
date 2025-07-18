
let numb1 = parseInt(process.argv[2]);
let numb2 = parseInt(process.argv[3]);
let sum = add(numb1, numb2);
console.log(sum);

function add(a, b){
    return a + b;
}