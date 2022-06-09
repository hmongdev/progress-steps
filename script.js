$(document).ready(ready);

//declaring variables by targeting id's
const progress = $('#progress');
const prev = $('#prev');
const next = $('#next');
const circles = $('.circle');

//counter for button
let button = 1

//condition
function ready() {
    $('#next').on('click', () => {
        button++;
        console.log(button);
    });
}