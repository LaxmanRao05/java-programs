let aish=document.createElement("p");
// aish.textContent="I'm Chitti";

aish.innerHTML="memory1 tera byte";
aish.style.color="yellow";
aish.style.fontSize="20px;"
document.getElementById("vasi").appendChild(aish);
setTimeout(() => {
    let lax=document.getElementsByClassName("list") [0];
    if (lax) { 
    lax.remove();
    }
},
1000);
let newheading=document.createElement("h2");
newheading.innerHTML="This is the new heading";
newheading.style.color="purple";
newheading.style.fontSize="100px";
document.body.appendChild(newheading);

setTimeout(() => {
    let newText=document.createElement("p");
    newText.textContent="This is a new paragraph added after 2 seconds";
    newText.style.color="blue";
    document.body.appendChild(newText);
},2000);
let  tagText=document.createElement("p");
tagText.textContent="This is a new paragraph added to the tag";
tagText.style.color="brown";
tagText.style.fontSize="30px";
document.getElementById("vasi").appendChild(tagText);


let myList=document.createElement("ul");
for (let i = 0; i < 5; i++) {
    let listItem=document.createElement("li");
    listItem.textContent="List item " + i ;
    listItem.style.color="green";
    listItem.style.fontSize="30px";
    
}
myList.appendChild(listItem);
document.body.appendChild(myList);
