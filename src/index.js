document.addEventListener("DOMContentLoaded", () => {
    
  document.querySelector('form').addEventListener("submit", (e) => {
  
  e.preventDefault()
  
  addToDom(e.target.new_task.value)
  
})

});

function addToDom(todo){
  
   p = document.createElement('p')
   p.textContent = todo
   document.querySelector("#tasks").appendChild(p)
  //  p.appendToParent
  
  
}


// create new element with p and append it to the parent 
//