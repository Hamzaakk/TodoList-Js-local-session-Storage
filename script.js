//select all Elments
let inputTask= document.querySelector(".name")
let submit= document.querySelector("#submit")
let task= document.querySelector(".addTask")
//
// submit click
let  vs= Number(0)*0 
window.localStorage['i']= window.sessionStorage.length 

submit.addEventListener('click', function(event) {
    event.preventDefault();
    // your custom code her
    if(inputTask.value !=""){
    const box =document.createElement('div')
    box.className= "box"
    const p=document.createElement('p')
    p.className="para"
    p.textContent=inputTask.value
    box.appendChild(p)
    console.log(box)
    task.append(box)
    const deleteTask=document.createElement("div")
    deleteTask.className="delete"
    deleteTask.innerText="Delete"
    deleteTask.style.cssText="position: absolute;right: 32px; padding:16px;  background-color: #ff5337; border-radius: 3px; border: none;cursor: pointer;color: #fff; font-size: 1rem;"
    box.appendChild(deleteTask)
    box.style.cssText="background-color: #fff;padding:16px;display:flex;align-items:center;margin:10px ;width:80%"  
    let vars=Number(window.localStorage["i"]) + 1 
window.localStorage.i= vars
console.log(vars)
window.sessionStorage[`task${vars}`]= inputTask.value
    deleteTask.onclick = ()=>{
    box.parentNode.removeChild(box); 
    window.sessionStorage.removeItem(`task${vars}`)
}


}
    
  });
 let  hard=window.localStorage['i']

  function load() {
    const cmp = window.localStorage.getItem('i')
    // console.log(cmp)
    for(let i=2;i<=window.sessionStorage.length;i++)
    {
    const box =document.createElement('div')
    box.className= "box"
    const p=document.createElement('p')
    p.className="para"
    p.textContent=window.sessionStorage[`task${i}`]
    box.appendChild(p)
    console.log(box)
    task.append(box)
    const deleteTask=document.createElement("div")
    deleteTask.className="delete"
    deleteTask.innerText="Delete"
    deleteTask.style.cssText="position: absolute;right: 32px; padding:16px;  background-color: #ff5337; border-radius: 3px; border: none;cursor: pointer;color: #fff; font-size: 1rem;"
    box.appendChild(deleteTask)
    box.style.cssText="background-color: #fff;padding:16px;display:flex;align-items:center;margin:10px ;width:80%"  
    deleteTask.onclick = ()=>{
      box.parentNode.removeChild(box); 
      window.sessionStorage.removeItem(`task${i}`);
  }
  }

  }
  
 load()