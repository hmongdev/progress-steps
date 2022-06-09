$(document).ready(ready);

//declaring variables by targeting id's
const progress = $('#progress');
const prev = $('#prev');
const next = $('#next');
const circles = $('.circle');

//counter for button
let button = 1
console.log(button);

//condition
function ready() {
    $('#next').on('click', () => {
        button++;
        console.log(button);
        if (button >= circles.length) {
            button = circles.length
        }
    });
}