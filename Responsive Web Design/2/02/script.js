// events in js
// mouse events (click, double click etc.)
// keyboard events (key press, key up, key down etc.)
// form events (submit etc.)
// print event & many more

// event handling in js
/*
node.event = () => {
    // handle here
}
*/
let button0 = document.querySelector("#button0");
button0.onclick = (e) => {
  alert("you wanna continue?");
  console.log("welcome, hiral!");
  console.log("button clicked");
  let a = 25;
  a++;
  console.log(a); // 26
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX);
  console.log(e.clientY);
};
const handler0 = () => {
  console.log("hello, world!");
};
button0.addEventListener("click", handler0);
button0.removeEventListener("click", handler0);
let button1 = document.querySelector("#button1");
button1.ondblclick = (e) => {
  console.log("i was submitted");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX);
  console.log(e.clientY);
};
const handler1 = () => {
  console.log("hello, world!");
};
button1.addEventListener("dblclick", handler1);
button1.removeEventListener("dblclick", handler1);
// let boxAll = document.querySelectorAll(".box");
// boxAll.onmousemove = () => {
//     console.log("you guessed me right!");
// }

// event object
/*
node.event = (e) => {
    // handle here
}
e.target, e.type, e.clientX, e.clientY
*/
/*
let boxAll = document.querySelectorAll(".box");
boxAll.forEach((box) => {
    box.onmousemove = (e) => {
        console.log(e.target); // box
        console.log(e.type); // mousemove
        console.log(e.clientX); // x coordinate
        console.log(e.clientY); // y coordinate
    }
});
*/

// event listeners
// node.addEventListener(event, callback);
// node.removeEventListener(event, callback);

// lets practice
/*
qs. create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
*/
let button_mode = document.querySelector("#mode");
let body = document.querySelector("body");
let curr_mode = "light-mode";
button_mode.addEventListener("click", () => {
  console.log("you are trying to change mode");
  if (curr_mode === "light-mode") {
    curr_mode = "dark-mode";
    // document.body.style.backgroundColor = "black";
    // document.body.style.color = "white";
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
  } else {
    curr_mode = "light-mode";
    // document.body.style.backgroundColor = "white";
    // document.body.style.color = "black";
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
  }
  console.log(curr_mode);
});
