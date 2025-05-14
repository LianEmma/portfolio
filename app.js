
let navContainer = document.querySelector("header")
let nav = document.querySelector("nav");
let navOptions = {
    rootMargin: "-600px 0px 0px 0px"
}
let navObserver = new IntersectionObserver((entries,navObserver)=>{
    entries.forEach(entry=>{
        if (!entry.isIntersecting) {
            nav.classList.add("active");
            console.log("done intersecting",nav)
        }else{
            nav.classList.remove("active")
        }
    })
},navOptions);

navObserver.observe(navContainer);

////// ranges observer
let skills = document.querySelector(".skills");
let htmlSlider = document.getElementById("htmlSlider");
let css = document.getElementById("css");
let js = document.getElementById("js");
let PhpSlider = document.getElementById("PhpSlider");

skillsOptions = {
    rootMargin: "-500px 0px 0px 0px"
}

let skillsObserver = new IntersectionObserver((entries,skillsObserver)=>{
    entries.forEach(entry=>{
        if (!entry.isIntersecting) {
            htmlSlider.style.width = "80%";
            css.style.width = "90%";
            js.style.width = "60%";
            PhpSlider.style.width = "40%";
            console.log("skills intersecting")
        }
    })
},skillsOptions);

skillsObserver.observe(skills);


///bars works

let bars = document.getElementById("bars");
let linkscontainer = document.querySelector(".links");

bars.addEventListener("click",()=>{
    console.log(linkscontainer)
    linkscontainer.classList.toggle("small")
    document.querySelector("nav").classList.toggle("small")
});

//up works
let upcontainer = document.querySelector(".up")
let arrowLeft = document.querySelector("#aside-arrow");

arrowLeft.addEventListener("click",()=>{
    upcontainer.classList.toggle("circular");
    arrowLeft.classList.toggle("trans");
    document.querySelector(".soc-more").classList.add("active")
    console.log(arrowLeft)
})