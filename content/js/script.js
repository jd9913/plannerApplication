$(document).ready(function () {

    console.log("ready!");


    var dateNow = moment().format(MMMM Do YYYY);
    console.log(dateNow);
    $(".currentDay").append('dateNow');




});