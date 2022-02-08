(function(){
    const iconBurger = document.querySelector(".header__burger-logo");
    const navigationBody = document.querySelector(".burger__wrapper");
    const menuPoints = document.querySelector(".burger__navigation-menu-points");
    iconBurger.addEventListener("click", function (e) {
        currentLogo(iconBurger);
        iconBurger.classList.toggle("active");
        document.body.classList.toggle("lock");
        navigationBody.classList.toggle("active");
        menuPoints.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".burger__navigation-menu-points");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", (_) => {
            if (iconBurger.classList.contains("active")) {
              iconBurger.classList.remove("active");  
              document.body.classList.remove("lock");
              navigationBody.classList.remove("active");
              menuPoints.classList.remove("active");
              currentLogo(iconBurger);
            }
        });
    });

    function currentLogo(iconBurger) {
        iconBurger.innerHTML === "✕" ? iconBurger.innerHTML = "☰" : iconBurger.innerHTML = "✕"; 
    }
})()