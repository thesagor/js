/*//arithmatic operations
    let a = 10;
    let b = 3;
    console.log("THis is add "+ (a+b));
    console.log("THis is subtition "+ (a-b));
    console.log("THis is multiplition "+ (a*b));
    console.log("THis is division "+ (a/b));
    console.log("THis is modulas "+ (a%b));*/


//assignment operator
/*
let c=10
console.log(c+=10)
if(c===20 && c>=15){
    console.log("consition sotto= "+ c)
}
*/

/*
let n=25, m=35;
let operation= n>=10 && m<=50;
console.log(`operation = ${operation}` );
*/

//increement

let n=10;

/*
console.log(n++);
console.log(n);*/

//decrement
/*console.log(n--);
console.log(n);
console.log(--n);*/

//operator precedence
/*console.log(3+5*2);
console.log((3+5)*2);
console.log(10/2-3);*/


/*//if else
let bill=10000;
if (bill>=100){
    console.log(`your vat will be dictated ${bill*.0180}` );
}*/

//vat calculation
let bill;
function vatCalculator(billAmount){
    if (billAmount>=500){
        return billAmount*.15;
    }
    else{
        return `you are not eligible for vat` ;
    }
}

console.log(vatCalculator(100));

