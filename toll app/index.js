let arr =[23,67,45,50,[6,8,9],[[6,7]],45];

console.log(arr.length);
function maxValue(){
    let maxValue = Number.NEGATIVE_INFINITY
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(maxValue < element ){
        maxValue = element
    }
   
}
 return maxValue;   
}
arr1 = arr.flat(2)
console.log(arr1);
function sumarr1(){
arr1.reduce((acc,curr) =>{
    console.log(acc + curr);
})
}
sumarr1();


console.log(Math.min(...arr))
let count = 1
function recursion(){
    let num = 8
    if(count>num){
        return ;
    }
    console.log(num + count);
    count++;
  
}
recursion();
console.log(Number.NEGATIVE_INFINITY);
let array = [1,4,6,9,10,5,8]
function sumvalue(){

// array.forEach((e)=>{
// sum += e;

// })
// console.log(sum);

let maxvalue = Number.NEGATIVE_INFINITY;
array.forEach((e,i)=>{
    
    if(e>maxvalue){
       maxvalue= e
    }

})
    

console.log(maxvalue);}
   

sumvalue();
// diffrence between callback,promises and asyncawait
function sum(cb){
    let a = 9;
    b = 10
    cb(3,5);
console.log(a*b);


}
sum(value)
function value(a,b){
    setTimeout(() => {
        
        console.log( a + b);
    }, 2000);
}