(function(){
    const iconBurger = document.querySelector(".header__burger-logo");
    const navigationBody = document.querySelector(".burger__wrapper");
    iconBurger.addEventListener("click", function (e) {
        document.body.classList.toggle("lock");
        navigationBody.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".burger__navigation-menu-points");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", (_) => {
            if (iconBurger.classList.contains("active")) {
              document.body.classList.remove("lock");
              navigationBody.classList.remove("active");
          }
        }
    );
  });
})()