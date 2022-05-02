const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");



grandparent.addEventListener("click", e => {
    console.log("grandparent bubble");
})

parent.addEventListener("click", printHi)

setTimeout(() => {
    parent.removeEventListener("click", printHi)
}, 2000)

child.addEventListener("click", e => {
    console.log("child bubble");
    
})

function printHi(){
    console.log("HI")
}

