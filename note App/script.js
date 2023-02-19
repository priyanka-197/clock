
 
getitem().forEach(el => {
    
    const noteE1 = createE1(el.id,el.content);
    app.insertBefore(noteE1,btn)
    
});

function createE1(id,content){
    const elemnt = document.createElement('textarea')
    elemnt.setAttribute('id','textarea');
    elemnt.placeholder = 'Enter Note';
    elemnt.value = content;
    elemnt.addEventListener('input',()=>{
  updateNote(id,elemnt.value)
    })
    elemnt.addEventListener('dblclick',()=>{
        const warning = confirm('do you really want to this note?')
        if(warning){
            deleteNote(id,elemnt)
        }
        
    })

return elemnt;
}
function deleteNote(id,elemnt){
   
   const store = getitem().filter((el)=>el.id != id)
   setitem(store)
    app.removeChild(elemnt)
    
}
// function deleteNote(id,elemnt){
//     const notes = getNotes().filter((note)=>note.id !=id)
// saveNotes(notes)
// app.removeChild(elemnt)
// }
function updateNote(id,content){
    const store = getitem();
    const target = store.filter((el)=>el.id == id)[0]
    console.log(target);
   target.content = content;
       setitem(store);
}

function run(){
   const store = getitem();
   
   const obj = {
        id : Math.floor(Math.random()*100000),
        content:''
    }
   const noteE1 = createE1(obj.id,obj.content);
    app.insertBefore(noteE1,btn)
    store.push(obj)
    console.log(store);

    console.log(obj);

setitem(store)
}


function getitem(){ return JSON.parse(localStorage.getItem('note-app')||"[]")}

function setitem(store) {localStorage.setItem('note-app',JSON.stringify(store))}
