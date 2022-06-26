
const myAllImages = document.querySelectorAll(".slider-container img");
const nextButton = document.getElementById('btn-right');
const prevButton = document.getElementById('btn-left');
const indecatorParent = document.querySelector('#indecators');
const sliderText = document.getElementById('slide-number');

const slidesCount = myAllImages.length;

let startCounting = 0;

nextButton.addEventListener('click', moveToNext);
prevButton.addEventListener('click', moveToPrev);

let indecatorsItems = document.createElement('ul');
indecatorsItems.setAttribute('class', 'ul-items');

for (let i = 0; i < slidesCount; i += 1) {
    let indecatorsListItems = document.createElement('li');

    indecatorsItems.appendChild(indecatorsListItems);
}

indecatorParent.appendChild(indecatorsItems);

const newUlList = document.querySelectorAll('.ul-items li');

theChecker();


function moveToNext() {
    if (nextButton.classList.contains('disable')) {
        return false;
    } else {
        startCounting++;
        theChecker();
    }
}

function moveToPrev() {
    if (prevButton.classList.contains('disable')) {
        return false;
    } else {
        startCounting--;
        theChecker();
    }
}

for (let i = 0; i < newUlList.length; i++) {
    newUlList[i].onclick = function () {
        startCounting = i;
        theChecker();
    }
}


function theChecker() {
    removeAll();
    myAllImages[startCounting].classList.add('active');
    newUlList[startCounting].classList.add('active');
}

function removeAll() {
    for (let j = 0; j < slidesCount; j++) {
        myAllImages[j].classList.remove('active');
    }
    for (let j = 0; j < newUlList.length; j++) {
        newUlList[j].classList.remove('active');
    }
    if (startCounting === 0) {
        prevButton.classList.add('disable')
    } else {
        prevButton.classList.remove('disable')
    }
    if (startCounting === slidesCount - 1) {
        nextButton.classList.add('disable')
    } else {
        nextButton.classList.remove('disable')
    }
}