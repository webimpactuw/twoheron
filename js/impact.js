let container = document.querySelector('.card-container');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let card = document.querySelector('.card');
(function () {
    right.addEventListener('click', function (e) {
       container.scrollLeft += item.clientWidth;
    });
    left.addEventListener('click', function () {
       container.scrollLeft -= item.clientWidth;
    })
});