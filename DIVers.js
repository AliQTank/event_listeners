const divs = document.querySelectorAll("div");

document.addEventListener("click", e => {
    if (e.target.matches("div")) {
        console.log("hi");
    }
    

})

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple"
/*newDiv.addEventListener("click", () => {
    console.log("HI")
})*/
document.body.append(newDiv);
