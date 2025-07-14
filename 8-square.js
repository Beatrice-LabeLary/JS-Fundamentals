//variables
const size = process.argv[2];

//printing a square
if(isNaN(parseInt(size))){
    console.log("Missing size");
} else {
    for (let i = 0; i < parseInt(size); i ++){
        let side = "x";
        for (let j = 1; j < parseInt(size); j++){
            side += "x";
        }
        console.log(side);
    }
}