const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", e => {
    console.log("grandparent capture");
},
{capture: true})

parent.addEventListener("click", e => {
    console.log("parent capture");
},
{capture: true})

child.addEventListener("click", e => {
    console.log("child capture");
},
{capture: true})

grandparent.addEventListener("click", e => {
    console.log("grandparent bubble");
})

parent.addEventListener("click", e => {
    console.log("parent bubble");
})

child.addEventListener("click", e => {
    console.log("child bubble");
})
