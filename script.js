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
    //1. Filling circles
    //forEach only works on arrays
    //wasn't working because circles WAS a nodeList
    circles.forEach((circle, index) => {
        if (index < button) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    //2. Showing progress bar
    //selects all active circles
    const actives = $('.active')
    //CSS: interacts with progress bar!!! active / all circles
    //length - 1 is added to make percentages 33% for each click
    //* 100 + % to create a percentage
    let progress = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    //jQuery that modifies the progress in CSS
    $('#progress').css('width', progress);
}