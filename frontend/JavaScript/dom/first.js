const newele=document.createElement("h2");
newele.textContent="Strike is coming";
newele.id="second"; 

//select element
const ele=document.getElementById("first");
ele.after(newele);

const sec_newele=document.createElement("h3");
sec_newele.textContent="Diwali";
sec_newele.id="third";
sec_newele.style.backgroundColor="pink";
newele.after(sec_newele);
const list=document.createElement("li");
list.textContent="milk";
const list2=document.createElement("li");
list2.textContent="cake";
const list3=document.createElement("li");
list3.textContent="pudding";
const list4=document.createElement("li");
list4.textContent="brownie";
const olel=document.getElementById("listing");
olel.append(list);
olel.append(list2);
olel.prepend(list3);
list.after(list4);

const arr=["Milk","Milk","Milk","Milk","Milk"];
const fragment=document.createDocumentFragment();
for(let food of arr){
    const list=document.createElement("li");
    list.textContent=food;
    fragment.append(list);
}
olel.append(fragment);
