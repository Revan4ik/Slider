let slides_content = ['https://picsum.photos/500/500', 'https://picsum.photos/600/600', 'https://picsum.photos/700/700'],
    btn = document.querySelectorAll('.slider-btn'),
    mover = document.querySelector('.slider-wrap ul'),
    count = 0
slides_content.forEach(el => {
    let li = document.createElement("li"),
        img = document.createElement("img")
    img.src = el
    mover.appendChild(li)
    li.appendChild(img)
});
let slides = mover.querySelectorAll('li')
slides[count].classList.add('active')
const onMove = () => {
    const active = mover.querySelector('.active')
    const next = active.nextElementSibling
    let width = 0
    if (next) {
        width = getComputedStyle(next).width
        count++;
        active.classList.remove('active')
        next.classList.add('active')
    } else {
        count = 0;
        active.classList.remove('active')
        slides[count].classList.add('active')
    }
    mover.style.transform = `translateX(${-parseInt(width) * count}px)`
}
btn.forEach(elem => {
    if (elem.classList.contains('slider__next')) {
        elem.addEventListener('click', onMove)
    } else {

    }

})