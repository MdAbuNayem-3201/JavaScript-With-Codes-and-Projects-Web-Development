console.log(window);
console.dir(window);

console.log(window.document); //it prints html code
console.dir(window.document); //it prints object

console.log(document.body);
console.dir(window.document.body);

console.log(document.head);
console.dir(document.head);

//Element selection
//1.select by id
console.log("\n\nElement selection-------->>>>");
const heading1 = document.getElementById("heading1");
heading1.style.color = "aqua"; //apply style
console.log(heading1);
console.dir(heading1);

//element selection by class name
const heading2 = document.getElementsByClassName("heading2"); //returns html collections
console.log(heading2);
console.dir(heading2);

//select element by tag name
const preTag = document.getElementsByTagName("pre"); //returns html collections
console.log(preTag);
console.dir(preTag);

//query selector
const selectBYQuerySelector = document.querySelector("pre"); //returns first element
console.log(selectBYQuerySelector);
console.dir(selectBYQuerySelector);

const elements = document.querySelectorAll("pre"); //returns all the elements of releted tag,id or class --->> returns a node list
console.log(elements);
console.dir(elements);

//properties---(get,set,update,remove) values
console.log("\n\n-----------Some properties---------");
const btn = document.querySelector(".btn");
console.log(btn);
//tagName
console.log("Tag name is:", btn.tagName); //returns tag for element nodes

//innerText
console.log("Inner text is:", btn.innerText); //returns text  content of the element and all its children--->>only returns text--->.it can not read hidden element---->>textContent property can access the hidden element...

const div = document.querySelector(".div");
console.log("Inner Text of the div:\n", div.innerText);

//innerHTML
//returns the plain text or html contents in the element
console.log("Inner HTML:", div.innerHTML); //returns html tag with text

//set inner text
const para = document.createElement("p"); //create an empty element
para.innerText = "This is for set value... and inside div"; //add text inside that element
div.append(para);

//textContent
//returns textual content even for hidden elements
console.log("Text content of the div", div.textContent);

//some traversal properties of DOM structure
console.log("\n\n\n---------Taraverse------------");
console.log(div.firstChild); //access node
console.log(div.firstElementChild);
console.log(div.lastChild);
console.log(div.lastElementChild);
console.log(div.children);
console.log(div.children[0]);
console.log(div.children[3]);
console.log(div.children[3].textContent);
console.log(div.children[0].nextElementSibling);
console.log(div.children[1].previousElementSibling);
// console.log(div.children[1].children[3].children[0].innerText)

//Excercise
console.log("\n\n\n\n-----------Excercise-----------");
// Q1->Create a h2 heading element with text -"Hello JavaScript". Append 'from apna college'
console.log("Q1----->>>");
const h2 = document.querySelector(".heading-2");
console.log(h2);
console.log(h2.innerText);
h2.innerText = h2.innerText + " from Apna College";
console.log(h2.innerText);

//Q2-> create 3 divs with common class -"box".access them &  add some unique text to each of them
console.log("\n\nQ2---->>");

const divs = document.querySelectorAll(".box");
/*
divs[0].style.height = "100px";
divs[0].style.width = "100px";
divs[0].style.backgroundColor="aqua";
divs[0].style.margin="10px";
// divs[0].innerText = "Unique text-1"
// console.log(divs[0].innerText)

divs[1].style.height = "100px";
divs[1].style.width = "100px";
divs[1].style.backgroundColor = "aqua";
divs[1].style.margin="10px";
// divs[1].innerText = "Unique text-2"
// console.log(divs[1].innerText)

divs[2].style.height = "100px";
divs[2].style.width = "100px";
divs[2].style.backgroundColor = "aqua";
divs[2].style.margin="10px";
// divs[2].innerText = "Unique text-3"
// console.log(divs[2].innerText)

*/

//use for loop to add inner text
let idx = 0;
for (let div of divs) {
  divs[idx].style.height = "100px";
  divs[idx].style.width = "100px";
  divs[idx].style.backgroundColor = "aqua";
  divs[idx].style.margin = "10px";
  div.innerText = `Unique value ${idx+1}`;
  idx++;
  console.log(div.innerText);
}
