const header = document.querySelector('.header');


document.addEventListener('scroll', () => {
    let scroll = scrollY;
    if (scroll > 1) {
        header.classList.add('headerBackground')
    } else {
        header.classList.remove('headerBackground')
    }
});