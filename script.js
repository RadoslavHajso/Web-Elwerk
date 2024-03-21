//toggle icon navbar
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//scroll section active links
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header navb a');

window.onscroll = () => {
    sections.forEach(sec => {
        var top = window.screenY;
        var offset = sec.offsetTop - 150;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });    
        };
    });

    //sticky navbar
    var header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);

    // remove toggle icon and navbar when click on link in navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


//animation icons
//1
const animationOptions = {
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/icons/Team.json' 
};

const anim = lottie.loadAnimation(animationOptions);

//2
const animationOptionstwo = {
    container: document.getElementById('lottie-animationtwo'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/icons/Badge.json'
};

const animtwo = lottie.loadAnimation(animationOptionstwo);

//3
 const animationOptionsthree = {
    container: document.getElementById('lottie-animationthree'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/icons/Partnership.json'
};

const animthree = lottie.loadAnimation(animationOptionsthree);


let slideIndex = {
    'slider1': 1,
    'slider2': 1,
    'slider3': 1,
    'slider4': 1,
    'slider5': 1,
};

showSlides(slideIndex.slider1, 'slider1');
showSlides(slideIndex.slider2, 'slider2');
showSlides(slideIndex.slider3, 'slider3');
showSlides(slideIndex.slider4, 'slider4');
showSlides(slideIndex.slider5, 'slider5');



function plusSlides(n, sliderId) {
    showSlides(slideIndex[sliderId] += n, sliderId);
}

function currentSlide(n, sliderId) {
    showSlides(slideIndex[sliderId] = n, sliderId);
}

function showSlides(n, sliderId) {
    let i;
    let slides = document.getElementById(sliderId).getElementsByClassName("mySlides");
    let dots = document.getElementById(sliderId).getElementsByClassName("dot");
    if (n > slides.length) { 
        slideIndex[sliderId] = 1;  
    }
    if (n < 1) { 
        slideIndex[sliderId] = slides.length; 
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[sliderId] - 1].style.display = "block";
    dots[slideIndex[sliderId] - 1].className += " active"; 
}