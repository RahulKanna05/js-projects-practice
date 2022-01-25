// document.querySelector() gives the enter html tag(entire ... I mean ENTIRE)
// we can directly give the className or tagName or idName in it.
// we can get the value/text inside the tag using .innerHTML
var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;
setInterval(() => {
    if(count < 1000) {
        count++;
        counter.innerHTML = count;
    }
}, 1);

setTimeout(() => {
    followers.innerHTML = "Followers on Instagram!";
}, 6300);



// getElementsByClassName takes only the name without '.'
// var counter = document.getElementsByClassName("counter")[0];
// var followers = document.getElementsByClassName("followers")[0];

// let count = 1;

// setInterval(() => {
//     if(count <100) {
//         count++;
//         counter.innerHTML = count;
//     }
// } ,1);

// setTimeout(() => {
//     followers.innerHTML = "Followers on Twitter!"
// }, 700);