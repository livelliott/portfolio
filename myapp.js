const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".links");
    const navLinks = document.querySelector(".links li");

    // when burger is clicked 
    burger.addEventListener('click', ()=>{
        
        // active nav bar
        if (nav.classList.contains('nav-inactive')) {
            nav.classList.remove('nav-inactive');
            nav.classList.add('nav-active');

        }
        else {
            nav.classList.remove('nav-active');
            nav.classList.add('nav-inactive');
        }

        // burger animation: when we click on the burger -> form an X shape
        burger.classList.toggle('toggle'); 
    });
}


navSlide();
