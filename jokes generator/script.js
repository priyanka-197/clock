let jokeApi = document.getElementById('c1');
 btn.addEventListener("click",genratebtn);
const option = {
     method : 'GET',
     headers:{
       Accept: "application/json",
     }
 }
 async function genratebtn(){
    try {
        jokeApi.innerHTML = "Updating..."
    btn.innerHTML = "Loading..."
     const response = await fetch("https://icanhazdadjoke.com",option);
     const data = await response.json();

     btn.innerHTML = 'tell Me A Joke'
     console.log(data.joke);
     jokeApi.innerHTML = data.joke;
    } catch (error) {
        jokeApi.innerHTML = "An Error Try again later"
    }
    
 }
// const api =fetch("https://icanhazdadjoke.com")
// console.log(api);
// const pokemonproxy = fetch(
//     "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
//   );
//   console.log(pokemonproxy);

//   function getdata(cb) {
//     return fetch(
//         "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
//    )
//      .then((response) => response.json())
//      .then((data) => console.log(data.results))}
//      getdata();


    //  function genratebtn(){
    //     jokeApi.innerHTML = "updating....."
       
    // return fetch("https://icanhazdadjoke.com",option).then((response)=>response.json())
    // .then((data)=>jokeApi.innerHTML = data.joke).catch(
    //     jokeApi.innerHTML = "An Error" , console.log(err))
    
 
    //  }
     