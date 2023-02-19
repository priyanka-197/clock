const emoji = [];
let i= ''
async function  addemoji(){
    btn.innerHTML = "..."
let response = await fetch("https://emoji-api.com/emojis?access_key=9947254c13d93970c08073950077f4b2b2289bb5")
let data = await response.json();
// i++;
console.log(data);
for (let i = 0; i < 1500; i++) {
    emoji.push({
        emojiname:data[i].character,
        emojicode:data[i].unicodeName
    })
   
}
console.log(emoji);
let i = (Math.floor(Math.random()*emoji.length));
btn.innerHTML = emoji[i].emojiname
pera.innerHTML = emoji[i].emojicode;
}


btn.addEventListener('click',()=>{
    addemoji();
    
})
    
