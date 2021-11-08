const progressbar = document.querySelector("#progress-bar");
const section = document.querySelector("section");

const animateProgressBar =() =>{
    let ScrollDistance = -section.getBoundingClientRect().top;
        //  Formula
    let progresswidth = (ScrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progresswidth);
    console.log(value);
    progressbar.style.width = value + "%";

    //   Fix for stuck progressbaar
    if(value<0) {
        progressbar.style.width = "0%";
    }
}

window.addEventListener("scroll", animateProgressBar);