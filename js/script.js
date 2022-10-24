	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let change = document.querySelector('change');
    
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            document.getElementById("logo").src="logo1modesombre.png";
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.getElementById("logo").src="logo1.png";
            document.body.classList.remove('active');
        }
    }

    