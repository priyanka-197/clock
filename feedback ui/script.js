let c = document.querySelectorAll('.c')
let set = '';
 c.forEach((el)=>{
   el.addEventListener("click",(e)=>{
    set = e.target.innerText||e.target.parentNode.innerText
    console.log(e.target.innerText||e.target.parentNode.innerText);
    const event = e.target;
    event.style.backgroundColor  = "green";


   })
 })
 
btn.addEventListener("click",()=>{
   if(set !== '')
    maincontainer.innerHTML=`<strong>ThankYou!</strong>
    <br/>
    <br/>
    <strong> feedback : ${set}</strong>
    <br/>
    we'll use your feedback tp improve our customer support.`

    set = e.target.innerText||e.target.parentNode.innerText
})