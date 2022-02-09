const courses = [
    {
        name: "ReactJS course",
        price: "2.3"
    },
    {
        name: "Angular course",
        price: "3.0"
    },
    {
        name: "MERN course",
        price: "5.8"
    },
    {
        name: "Python3.8 course",
        price: "2.1"
    },
    {
        name: "Python-Flask course",
        price: "2.9"
    }
];

function generateLIST() {
    const ul = document.querySelector(".list-group")
    ul.innerHTML = ""
    courses.forEach( (course) => {
        // creating list item
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        const name = document.createTextNode(course.name)
        li.appendChild(name)
        // creating span item for price
        const span = document.createElement("span")
        span.classList.add("float-right")
        const price = document.createTextNode("$ "+course.price)
        span.appendChild(price)

        // injecting span into list item
        li.appendChild(span)
        // injecting li into ul
        ul.appendChild(li)
    })
}

window.addEventListener("load",generateLIST())

const incbutton = document.querySelector(".inc-btn")

incbutton.addEventListener("click",() => {
    courses.sort((a,b) => a.price - b.price);
    generateLIST();
})

const descbutton = document.querySelector(".desc-btn")

descbutton.addEventListener("click",() => {
    courses.sort( (a,b) =>b.price - a.price);
    generateLIST();
})