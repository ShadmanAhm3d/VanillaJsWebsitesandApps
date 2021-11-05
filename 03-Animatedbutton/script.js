let btn = document.getElementById("btn");
let btnText = document.getElementById("btntext");

btn.addEventListener("click" , ()=>{
    btnText.innerHTML = "Thanks";
    btn.classList.add("active")
})