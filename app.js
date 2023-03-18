
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

// drop down menu
const dropdown = document.querySelector('.drop-down');
const list = document.querySelector('.list');

const selected = document.querySelector('.selected');

const selectedImg = document.querySelector('.selectedImg');
console.log(selectedImg);


dropdown.addEventListener('click', () => {
    list.classList.toggle('show');
})

list.addEventListener('click', (e) => {
    const img = e.target.querySelector('img');
    const text = e.target.querySelector('.text');

    selectedImg.src = img.src;
    selected.innerHTML = text.innerHTML;

})