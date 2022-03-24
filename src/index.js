const decrement=document.querySelector(".decrement");
const incerment=document.querySelector(".incerment");
const reset=document.querySelector(".reset");
const spanCounter=document.querySelector(" span");

document.addEventListener("DOMContentLoaded",getLocalTodos)

let count=0;
decrement.addEventListener("click",e=>{
    // console.log(spanCounter.innerText)
    //  count-- ;
    //  spanCounter.textContent=count;
    // spanCounter.innerText=count;
    // console.log(localStorage)
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)-1;
      } 
      spanCounter.textContent = localStorage.clickcount;
    if (spanCounter.textContent<0){
      spanCounter.style.color="red"
    }
    
  
})

incerment.addEventListener("click",e=>{
    // count++;
    // spanCounter.textContent=count;
    console.log(localStorage.clickcount)
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } 
      spanCounter.textContent = localStorage.clickcount;
      if (spanCounter.textContent>0){
        spanCounter.style.color="green"
      }
})
reset.addEventListener("click",e=>{
    // count=0;
    // spanCounter.textContent=count;
    if (localStorage.clickcount) {
        localStorage.clickcount = 0;
        
      } 
      spanCounter.textContent = localStorage.clickcount;
      

})
function getLocalTodos(x){
    if (localStorage.clickcount) {
        localStorage.clickcount =Number(localStorage.clickcount) ;
      } else {
        localStorage.clickcount = 0;
      }
      spanCounter.textContent = localStorage.clickcount;
      
}
// function saveLocal(x){
//     let y=savedCounter.textContent;
//     console.log(y);
//     let savedCounter=localStorage.getItem("y")?
//     JSON.parse(localStorage.getItem("y")):[];
//     console.log(savedCounter)
//     localStorage.setItem("y",JSON.stringify(savedCounter));
// }
// function getLocalTodos(x){
//     console.log(x.target);
//     let savedCounter=localStorage.getItem("y")?
//     JSON.parse(localStorage.getItem("y")):[];
//     console.log(savedCounter)
//     // const asd=[...x.target.all[23].classList];
//     // console.log(asd);
//     // if(asd[1]==="completed"){
//     //     console.log("iman")
//     // }
//     // asd.forEach((e)=>{
//     //     console.log(e);
//     // })
//     // if (x.target.all[23].children.className==="compeleted"){
//     //     console.log("iman");
//     // };
//     savedTodos.forEach((x)=>{
//         const todoDiv=document.createElement("div");
//         todoDiv.classList.add("todo");
//         const newTodo=`
//         <li>${savedCounter.textContent}</li>
//         <span><i class="far fa-check-square"></i></span>
//         <span><i class="far fa-trash-alt"></i></span>`
//         todoDiv.innerHTML=newTodo;
//         todoList.appendChild(todoDiv);
//     })
// }
