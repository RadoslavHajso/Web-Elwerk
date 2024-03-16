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


 let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

