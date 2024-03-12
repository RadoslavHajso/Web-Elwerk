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
