//getAttribute(attribute)---->>to get the attribute value
console.log("getattribute() property---->>>>");
let div=document.querySelector("div");
console.log(div)
console.log(div.getAttribute("id"))
console.log(div.getAttribute("name"))


let para = document.querySelector("p");
console.log(para.getAttribute("class"));



//setAttribute(attribute, vlaue)---->>to set the attribute value or we can update the value of existing attribute
para.setAttribute("id", "para1")
console.log(para.getAttribute("id"))

//update
para.setAttribute("class", "newClass");
console.log(para.getAttribute("class"));


//style or access css by js
console.log("\n\n\nstyle in js---->>>>>>>>>")
box1 = document.querySelector(".box1");
console.log(div.style)
box1.style.backgroundColor="rgb(123,123,255)";
box1.style.height="100px";
box1.style.width="100px";
box1.style.fontSize="1.5rem";



//Insert Element
console.log("\n\n\n<<<<<----------------Insert Element------------------>>>>")

//node.append(el)-> adds at the end of the node (inside)
//step-1: select element
const box2 = document.querySelector(".insert");
box2.style.backgroundColor="rgb(123,123,255)";
box2.style.height="300px";
box2.style.width="300px";
box2.style.margin="5px";
//step-2: create element
const pre = document.createElement("pre");
//step-3: add element
pre.innerText = "This is a pre tag text...";
box2.append(pre)


//node.prepend(element)->adds element at the start of the node(inside)
const pTag = document.createElement("p");
pTag.innerText = "Hi, This is Nayem inside p tag."
box2.prepend(pTag)


//node.before(element)->>>adds element before the selected node(outside)
const h6 = document.createElement("h6");
h6.innerText = "Thid is H6 tag to add by before method..."
box2.before(h6);


const h5 = document.createElement("h5");
h5.innerText = "This is H5 tag to add by after method..."
box2.after(h5);



//mode.remove(elemet)->>>remove the node
let h3 = document.querySelector("h3");
h3.remove();




//Excercise
console.log("\n\n\n<<<<<---------Excercise-------------------->>>>>");
//Q1-->>create a button elemlent.Give it a text "click me", background color as red, and text color as white.    at last insert the button as the first element inside the body tag.
const btn = document.createElement("button")
console.log(btn)
btn.innerText = "Click Me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
document.querySelector("body").prepend(btn);


//Q2--->>create a <p> tag in html, give it a class and some styling. Now create a new class in CSS and try to append this class to the <p> element. ***Did you notice, how you override the class name when you add a new one?   Solve this problem using classList.

const content = document.querySelector(".content");
content.classList.add("newClass");    //this method is used to add multiple class to the element. 

//we can also remve any class by using the method ---->>>> node.classList.remove("class name")




