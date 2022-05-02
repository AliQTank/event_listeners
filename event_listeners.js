const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", e => {
    console.log("grandparent one");
})

parent.addEventListener("click", e => {
    console.log("parent one");
})

child.addEventListener("click", e => {
    console.log("child one");
})


