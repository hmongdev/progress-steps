//short-hand -- document.ready
$(() => {
    readyNow()
});

//declaring variables by targeting id's
const progress = $('#progress');
const prev = $('#prev');
const next = $('#next');
const circles = $('.circle');

//counter for button
let button = 1

function readyNow() {
    //next button is clicked
    $('#next').on('click', () => {
        //increment button
        button++;
        //limits button to 4
        if (button >= circles.length) {
            button = circles.length;
        }
        console.log(button);
    });

    //prev button is clicked
    $('#prev').on('click', () => {
        //increment button
        button--;
        //limits button to 1
        if (button <= 1) {
            button = 1;
        }
        console.log(button);
    });
}