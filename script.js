/* What I Learned in this Project (WILP)
1. $('.circle') creates a nodeList NOT an array
2. const array = Array.from(nodeList) converts into array
3. forEach only works on arrays, which is why we needed to convert nodeList into array
4. 

*/

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
    //next button will GO FORWARD
    $('#next').on('click', () => {
        //increment button
        button++;
        //limits button to 4
        if (button >= circles.length) {
            button = circles.length;
        }
        update();
    });

    //prev button will GO BACKWARD
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

const update = () => {
    //1. Filling circles
    //forEach only works on arrays
    //wasn't working because circles WAS a nodeList
    circles.forEach((circle, index) => {
        //condition where if the index is less than the button #, add active class
        if (index < button) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    //2. Showing progress bar
    //selects all active circles => shows progress bar wherever the circles are active
    const actives = $('.active')
    //length - 1 is added to make percentages 33% for each click
    //* 100 + % to create a percentage
    let progress = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    //jQuery that modifies the progress in CSS
    $('#progress').css('width', progress);

    //3. Enabling the prev button
    //if button is at 1, disable the prev button
    if (button === 1) {
        $('#prev').attr('disabled', true);
        //if button is NOT 1, enable the prev button
    } else {
        $('#prev').attr('disabled', false);
    }
}