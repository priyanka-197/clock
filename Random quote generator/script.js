btn.addEventListener('click',async()=>{
try {
    btn.innerHTML = 'Loading...'
    console.log('clicked');
    const data =  await fetch("https://api.quotable.io/random").then((res)=>res.json())
     console.log(data);
    quote.innerHTML = data.content
     pera.innerHTML = data.author
     btn.innerHTML = 'Get a quote'
} catch (error) {
   console.log(err);
   quote.innerHTML = 'an error try again later'
}
   
  
   
})

