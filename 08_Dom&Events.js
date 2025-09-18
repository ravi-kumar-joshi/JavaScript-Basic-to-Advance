// What is Dom ?
// DOM stands for Document Object Model.
// It is a programming interface for web documents.
// It represents the structure of a document as a tree of objects.
// Each object corresponds to a part of the document, such as an element, attribute, or text node.
// The DOM allows programming languages to manipulate the structure, style, and content of a document.


// Accessing HTML Elements

// 1. Using getElementById

let title = document.getElementById("mytitle");
// console.log(title.innerText);

// 2. Using getElementsByClassName

let items = document.getElementsByClassName("list-item");
// console.log(items[0].innerText);
// console.log(items[1].innerText);

// 3. Using getElementsByTagName

let listItems = document.getElementsByTagName("li");
// console.log(listItems[0].innerText);
// console.log(listItems[1].innerText);

// 4. Using querySelector

let firstItem = document.querySelector(".list-item");
// console.log(firstItem.innerText);

// 5. Using querySelectorAll

let allItems = document.querySelectorAll(".list-item");
allItems.forEach((item) => {
    // console.log(item.innerText);
});

// console.log(allItems[0].innerText);
// console.log(allItems[1].innerText);

// Changing Content

// title.innerText = "Hello JavaScript";
// title.style.color = "blue";
// title.style.backgroundColor = "yellow";


// Events 

// click Event

let btn = document.getElementById("myButton");

btn.addEventListener("click", function() {
    alert("Button Clicked!");
    title.style.color = "red";
    title.innerText = "Button Clicked!";
}
);

// mouseover Event

title.addEventListener("mouseover", function() {
    title.style.color = "green";
}
);

let box = document.getElementById("box");
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "yellow";
}
);

// Input Event

let inputBox = document.getElementById("NameInput");

inputBox.addEventListener("input", function() {
    console.log("Typing:" ,inputBox.value);
}
);

