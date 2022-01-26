// const red = document.querySelector(".red");
// const cyan = document.querySelector(".cyan");
// const violet = document.querySelector(".violet");
// const orange = document.querySelector(".orange");
// const pink = document.querySelector(".pink");

// const center = document.querySelector(".center");


// // .getComputedStyle(var) gives us the css of the variable given as param
// // to get the background color of that element we write smthg similar to css background-color
// // in CSS it is: ( background-color ) but in JS the '-' is removed and camelCase comes in
// // so in JS it is: ( backgroundColor)
// // for font-family it is fontFamily

// // // console.log(window.getComputedStyle(red).backgroundColor);

// // it gives rgb() format in ouput

// const getBgColor = (selectedElement) => {
//     return window.getComputedStyle(selectedElement).backgroundColor;
// };

function grabRed() {
    const red = document.querySelector(".red");
    document.querySelector(".textDisplay").innerHTML = window.getComputedStyle(red).backgroundColor;
}

function grabCyan() {
    const cyan = document.querySelector(".cyan");
    document.querySelector(".textDisplay").innerHTML = window.getComputedStyle(cyan).backgroundColor;
}

function grabViolet() {
    const violet = document.querySelector(".violet");
    document.querySelector(".textDisplay").innerHTML = window.getComputedStyle(violet).backgroundColor;
}

function grabOrange() {
    const orange = document.querySelector(".orange");
    document.querySelector(".textDisplay").innerHTML = window.getComputedStyle(orange).backgroundColor;
}

function grabPink() {
    const pink = document.querySelector(".pink");
    document.querySelector(".textDisplay").innerHTML = window.getComputedStyle(pink).backgroundColor;
}