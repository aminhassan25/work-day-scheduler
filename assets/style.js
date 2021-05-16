// date and hour variables
let presentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
let presentHour = moment().format('h:mm:ss a');
// hour variables
let nineAM = $("#9am");
let tenAM = $("#10am");
let elevenAM = $("#11am");
let twelvePM = $("#12pm");
let onePM = $("#13pm");
let twoPM = $("#14pm");
let threePM = $("#15pm");
let fourPM = $("#16pm");
let fivePM = $("#17pm");


let hour = moment().hours();
let userInput;
let hourSpan;


// the hour and date

let interval = setInterval(function() {
    let momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' ' +
        momentNow.format('dddd')
        .substring(0, 3).toUpperCase());
    $('#currentDay').html(presentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {

    console.log("current Hour " + hour);
    let init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAM.val(init9);

    let init10 = JSON.parse(localStorage.getItem("10:00 am"))
    tenAM.val(init10);

    let init11 = JSON.parse(localStorage.getItem("11:00 am"))
    elevenAM.val(init11);

    let init12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelvePM.val(init12);

    let init1 = JSON.parse(localStorage.getItem("01:00 pm"))
    onePM.val(init1);

    let init2 = JSON.parse(localStorage.getItem("02:00 pm"))
    twoPM.val(init2);

    let init3 = JSON.parse(localStorage.getItem("03:00 pm"))
    threePM.val(init3);

    let init4 = JSON.parse(localStorage.getItem("04:00 pm"))
    fourPM.val(init4);

    let init5 = JSON.parse(localStorage.getItem("05:00 pm"))
    fivePM.val(init5);


}

function background() {

    $(".form-control").each(function() {
        let timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
        // past, present, future
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
}

$(document).ready(function() {
    initPage()
    background()

    // button to save in storage
    $(".saveBtn").on("click", function() {
        userInput = $(this).siblings(".form-control").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));

    })

});