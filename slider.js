
// slides
let currentslide = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots");
let NextBtn = document.getElementById("nextbtn");
let prevBtn = document.getElementById("prevbtn");

function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    // dots[index].classList.add("active");
    currentslide = index;
}

function nextSlide(){
    currentslide ++
    if(currentslide >= slides.length){
        currentslide = 0
    }
    showSlide(currentslide);
}

function prevSlide(){

    if (currentslide <= 0) {
        currentslide = slides.length - 1;
    }else{
        currentslide --;
    }
    showSlide(currentslide)
}

if(NextBtn) NextBtn.addEventListener("click",()=>{
    console.log("clicked")
})

if(prevBtn) prevBtn.addEventListener("click",()=>{
    console.log("clicked")
})

//dots Event Listeners
dots.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
        showSlide(index)
    })
})


/////////// Testimonial slider
let TestimonialSlides = document.querySelectorAll(".testimonial");
let CurrentTestmonial = 0;

let showTestimonialSlides = (i) =>{
    //first hide all Testmonial slides
    TestimonialSlides.forEach(Testmonial=>Testmonial.classList.remove("show"));

    //add show class to current index
    TestimonialSlides[i].classList.add("show");
    i = CurrentTestmonial;
}

function NextTestmonialSlide(){
    CurrentTestmonial ++;
    if (CurrentTestmonial >= TestimonialSlides.length) {
        CurrentTestmonial = 0;
    }

    showTestimonialSlides(CurrentTestmonial)
}

window.addEventListener("DOMContentLoaded",()=>{
    setInterval(nextSlide,3000);
    setInterval(NextTestmonialSlide,3000);
})
