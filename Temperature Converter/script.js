const input2 = document.getElementById('input2')




function computetemp(event){
const currentv = +event.target.value;
console.log(currentv);


   if (input1.value) {
    input3.value =( currentv + 273.32).toFixed(2)
    input2.value = (currentv * 1.8 + 32).toFixed(2)
   } 
    else if(input2.value){
        input1.value =(( currentv -32)/1.8).toFixed(2)
        input3.value = ((currentv - 32)/1.8 + 273.32).toFixed(2)
    }
    else if(input3.value){
        input1.value =(currentv - 273.32).toFixed(2)
        input2.value =((currentv - 273.32)*1.8 + 32).toFixed(2)
    }
 
}

