const items = document.querySelectorAll('img');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const backItem = document.querySelector('.back');
let count = 0;

function showNextItem() {
    items[count].classList.remove('active');

    if (count < itemCount - 1) {
        count++;
    } else {
        count = 0;
    }
    items[count].classList.add('active');
}

function showBackItem() {
    items[count].classList.remove('active');

    if (count > 0) {
        count--;
    } else {
        count = itemCount - 1;
    }
    items[count].classList.add('active');
}

nextItem.addEventListener('click', showNextItem);
backItem.addEventListener('click', showBackItem);