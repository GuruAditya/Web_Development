// function handleClick(){
//     const element=document.getElementById("first");
//     element.textContent="Hi, How are you";
// }

const element=document.getElementById("first");
element.onclick=()=>{
    element.textContent="Hi, How are you";
}
element.onclick=()=>{
    element.style.backgroundColor="pink";
}
// This is not preferred as the content gets over write
//best method is addeventlisterner
element.addEventListener("click",()=>{
    element.textContent="HELLO";
})
element.addEventListener("click",()=>{
    element.style.backgroundColor="pink";
})
