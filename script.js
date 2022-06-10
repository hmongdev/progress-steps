//short-hand -- document.ready
$(() => {
    onReady()
});

//declaring variables by targeting id's
const progress = $('#progress');
const prev = $('#prev');
const next = $('#next');
//this is a nodeList, which is arrray-like but NOT an array
const circlesNodeList = $('.circle');
//convert nodelist into array
const circles = Array.from(circlesNodeList);

//counter for button
let button = 1

const onReady = () => {
    //next button is clicked
    $('#next').on('click', () => {
        //increment button
        button++;
        //limits button to 4
        if (button >= circles.length) {
            button = circles.length;
        }
        update();
    });

    //prev button is clicked
    $('#prev').on('click', () => {
        //increment button
        button--;
        //limits button to 1
        if (button <= 1) {
            button = 1;
        }
        update();
    });
}

function update() {
    //forEach only works on arrays
    //wasn't working because circles WAS a nodeList
    circles.forEach((circle, index) => {
        if (index < button) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
}