const post= [
    {
        name:'riya',
        age: 34
    },
    {
        name: 'tiya',
        age:53
    }
]
function somePost(){
    setTimeout(() => {
        
        post.forEach((e)=>{
            console.log(e.name);
        
    }, 1000);
    })
}


function getpost(){
   return new Promise((resolve, reject) => {
        
        setTimeout(() => {
    
           const pushvalue = post.push({name:'kiya',
        age:67})
        console.log(pushvalue);
        resolve();
        
        }, 2000);
    })
}
getpost().then(somePost)
function demo(){
    
}
