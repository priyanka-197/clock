btn.addEventListener('click',async()=>{
    try {
        c1.style.display = 'block';
        img.src = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
         const data = await fetch("https://api.catboys.com/img")
         const result =await  data.json();
     console.log(result);
     img.src = result.url;
     p.innerHTML = result.artist;
    } catch (error) {
        console.log(error);
    }

})