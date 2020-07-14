function scrollApear() {
    var loremElement = document.querySelector('.lorem');
    var loremPosition = loremElement.getBoundingClientRect().top;

    //gets the length from the element to the top of the screen.
    var screenPosition = (window.innerHeight) / 1.5; //gets the size of the specific screen being used.
    if (loremPosition < screenPosition) {
        loremElement.classList.add('lorem-appear');
    }
}
window.addEventListener('scroll', scrollApear);
