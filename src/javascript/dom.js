// getElementsByTagName
let demoTag = document.getElementsByTagName("h1");
demoTag[0].style.color = "red";

// getElementsByClassName
let demoClass = document.getElementsByClassName("demo-class");
demoClass[1].style.color ="blue";

// getElementsById
let demoId = document.getElementById("demo-id");
demoId.style.color = "green";

// querySelector
// let demoQuery = document.querySelector("h4")
// let demoQuery = document.querySelector(".demo-query")
let demoQuery = document.querySelector("#demo-query")


// querySelectorAll
let demoQueryAll = document.querySelectorAll("h4")
// let demoQueryAll = document.querySelectorAll(".demo-query")
// let demoQueryAll = document.querySelectorAll("#demo-query")



// create element, append child, remove child, classList, setAttribute, getAttribute, innerText, innerHTML, textContent


let listContainer  = document.querySelector("ul");
let list1 = document.createElement("li");
list1.textContent = "First list";
listContainer.appendChild(list1);

list1.classList.add("bg-blue-300");
list1.classList.remove("bg-blue-300");



console.log(list1);

// let btn = document.querySelector("button").addEventListener("click", ()=> {
//     demoClass[0].style.display = "none";

// })



