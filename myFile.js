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

//let n=10;

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
// let bill ;
/*function vatCalculator(bill){
    switch(true){
        case(bill>=1500):
            return bill*.20;
            break;
        case(bill>=500 && bill<=1500):
            return bill*.15;
            break;
            case(bill<=499):
            return "no need to pay vat";
            break;
        default:
            return "invalid bill amount";
    }
}
console.log(vatCalculator(100));*/

/*let bill ;
function vatCalculator(bill){
    if(bill>=1500){
        return bill*.20;
    }else{
        return "no need to pay vat";
    }
}
console.log(vatCalculator(15000));*/


//age calculator
/*
const sagor=25;
const rafi =25;
switch(true) {
    case (sagor > rafi):
        console.log("sagor is older");
        break;
    case (sagor < rafi):
        console.log("rafi is older");
        break;
    default:
        console.log("both are same age");


}*/

/*const day=12;
switch(day){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("invalid day");

}*/


// //ternary operator
//  let age=20;
//  let checkBiyerAge= age>=20 ? "you can biye right now":"hey na tomr boyos hoyni"
//  console.log(checkBiyerAge)

//loop  

/*let num=1
while(num<10){
    console.log(num)
    num++

}*/

/*
//do while loop
let name = 'Sagoe Ahmed';
while(true){
    console.log(name);
}
*/

/*let name= "sagor ahmed";
for(let v of name){
    console.log(v);
}*/

/*let data=[10,20,30,40,50];
data[4]=100;
for(let i=0;i<data.length;i++){
    console.log(data[i]);
}*/

/*//array literal
let names = ['sagor', 'ahmed', 'rafi', 'sabbir'];
names[names.length] = 'ador ali';
console.log(names);*/

/*let letarray= [6]
console.log(letarray)

//array construct and factory mode
let constarray= new Array(6);
console.log(constarray)

let facarray= Array(6)
console.log(facarray)*/
/*
let myArray = [1,2,3,4,5,6,7,8,9,10];
myArray[99]=100
console.log(myArray)*/

/*//array constructor and factor mode
let num= new Array('name', 'age', 'address');
console.log(num);

let name= [1,2,3,4,5,6];
for (let v of name) {
    console.log(v);
}
*/
//array travers sinc

/*
let trav= [1,2,3,4,5,6];
for (let i=0; i<trav.length;i++){
    console.log("num is =" +trav[i])
}
*/
/*
let arr = [10,202,31,454,5,7,9]
let sum=0;
for(let i=0; i<arr.length;i++){
    sum+=arr[i];
}
console.log("the average is "+ sum/arr.length);

//finding the higeset value
let highval=arr[0];
for(let i=0; i<arr.length;i++){
    if(arr[i]<highval){
        highval=arr[i];
    }
}
console.log(highval)*/

//array fill

/*let arr1= new Array(10);
console.log(arr1);
for(let i=0; i<arr1.length; i++){
    arr1[i]="False";
}
console.log(arr1);

let arr2= new Array(10);
arr2.fill("Xero");
console.log(arr2);

let arr3= ['Taskia','Rakib', 'alpona'];
arr3[2]="Sadia";
console.log(arr3);*/









