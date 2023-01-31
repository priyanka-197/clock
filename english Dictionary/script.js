const input = document.getElementById('input');
const title = document.getElementById('title');

async function fetchApi(word){
    if(word == ''){
        p.innerHTML = 'please Enter any word'
    }else{ try {
      
        p.style.display = 'block'
        c1.style.display = 'none'
        p.innerHTML = `Searching for a "${word}" ` 
    
    const url =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/ ${word}`).then((res)=>res.json()) 
    console.log(url);
    
    p.style.display = 'none'
    c1.style.display = 'block'
    title.innerHTML = url[0].word;
    meaning.innerHTML = url[0].meanings[0].definitions[0].definition;
audio.src = url[0].phonetics[0].audio
    } catch (error) {
        console.log(error);
    }}
   
  

}

input.addEventListener('keyup',(e)=>{
   
if(e.key=="Enter"){
 console.log(e.target.value);

 fetchApi(e.target.value)
 


}})