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

/*//vat calculation
let bill=1000;
function vatCalculator(bill){
    if (bill>=500){
        return bill*.15;
    }
    else{
        return `you are not eligible for vat` ;
    }
}
let totalbill= bill+vatCalculator(bill);
console.log(`your total bill is ${totalbill}` );*/

/*let bill ;
function vatCalculator(bill){
    if (bill>=1500){
        return bill*.20;
    }else if(bill>=500 && bill<=1500)
    {
        return bill * .10;
    }else{
        return bill;
    }
}
console.log(vatCalculator(500));*/


//bill and vat calculation using switch case
let bill ;
function vatCalculator(bill){
    switch(true){
        case(bill>=1500):
            return bill*.20;
            break;
        case(bill>=500 && bill<=1500):
            return bill*.15;
            break;
            case(bill<=500):
            return "no need to pay vat";
            break;
        default:
            return "invalid bill amount";
    }
}
console.log(vatCalculator(1000));
