//Side navigation Js
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");

menuBtn.onclick = function(){
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
    body.style.overflow = "hidden";
}

cancelBtn.onclick = function(){
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto";
}

//Sticky Navigation Js
let nav = document.querySelector("nav");
let va1;
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}
//side Navigation Closed when Navigation links clicked
let navlinks = document.querySelectorAll(".menu li a");
for (var i = 0 ; i < navlinks.length;i++) {
    navlinks[i].addEventListener("click",()=>{
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        navBar.classList.remove("active");
        body.style.overflow = "auto";
    });
}

//Pourcentage Skills JS
const counters = document.querySelectorAll('.num');
let hasAnimated = false;
const animateCounters = () => {
    counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const update = () => {
        if (count < target) {
            count++;
            counter.textContent = count + '%';
            setTimeout(update,20);
        } else {
            counter.textContent = target + '%';
        }
    };

    update();
});
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entries => {
        if (entries.isIntersecting &&! hasAnimated) {
            hasAnimated = true;
            animateCounters();
        }
    });
},{ threshold:0.5});

const skillsSection = document.querySelector('#skills');
observer.observe(skillsSection)
