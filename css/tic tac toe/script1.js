let boxes = document.querySelectorAll(".box");
let turn = "x";
let turn2 = "0 turn"
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',eventHandler)
    console.log(boxes[i]);
}
function eventHandler(e){
console.log(e.target);
let selectBox = e.target;
selectBox.innerHTML = turn;
turn = turn==="x"?0 :"x"
h3.innerHTML = turn2;
turn2= turn2==="0 turn"?"X turn": "0 turn"
checkwinner();
}
let winnercon = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]
function checkwinner(){
    let boxes = document.querySelectorAll(".box");
    winnercon.map((combarr)=>{
        console.log(boxes[combarr[2]]);
       
        if(boxes[combarr[0]].innerHTML){
if(boxes[combarr[0]].innerHTML===boxes[combarr[1]].innerHTML){
    if(boxes[combarr[0]].innerHTML===boxes[combarr[2]].innerHTML){
        document.getElementById('p').innerHTML=`${boxes[combarr[2]].innerHTML} is winner`
    }
}
        }
    })
  
}
btn.addEventListener('click',function but(){
location.reload()
})