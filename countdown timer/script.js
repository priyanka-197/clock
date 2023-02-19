const newyear = '11 sep 2023';
function countDown(){
const newyearDate = new Date(newyear);
const currentDate = new Date();
const cdown = newyearDate - currentDate;
const totalseconds = cdown/1000
const days =Math.floor(totalseconds/3600/24) ;
const hours = Math.floor(totalseconds/3600)%24
const minuts= Math.floor(totalseconds/60)%60
const seconds = Math.floor(totalseconds)%60

// console.log(days,hours,minuts,seconds);
days1.innerHTML = formattime(days)
hour1.innerHTML = formattime(hours)
mins1.innerHTML = formattime(minuts)
sec1.innerHTML = formattime(seconds)

} 

function formattime(time){
return time < 10 ?`0${time}`: time
} 
   setInterval(countDown,1000 );


 






