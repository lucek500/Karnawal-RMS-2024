(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const countDown = new Date("April 4, 2023 16:00:00").getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0)
}());


//menu 
const menuBtn = document.querySelector('.menu__btn-js');
const menuList = document.querySelector('.menu__list-js');
const menuLinks = document.querySelectorAll('.menu__link-js')

const handleOpenMenu = () => {
    menuList.classList.toggle('menu__list--active');
    if (menuList.classList.contains('menu__list--active')) {
        menuBtn.innerHTML = '<img src="assets/menu-x.svg" alt="menu-icon" class="menu-icon">'
    } else {
        menuBtn.innerHTML = '<img src="assets/menu-btn.svg" alt="menu-icon" class="menu-icon">'
    }
}
const handleCloseMenu = () => {
    menuList.classList.remove('menu__list--active');
    menuBtn.innerHTML = '<img src="assets/menu-btn.svg" alt="menu-icon" class="menu-icon">'
}

menuLinks.forEach(el => {
    el.addEventListener('click', handleCloseMenu)
});

menuBtn.addEventListener('click', handleOpenMenu);