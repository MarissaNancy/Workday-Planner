//start with moment time container 
$(document).ready(function(){
    getLocalStorage();


    var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//when button is clicked execute the function here this is referring to the text closest to the button//
$(".savebutton").on('click', function(){
    var text = $(this).siblings(".input").val()
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})

function hourUpdater(){
    // get current hour from moment.js
    //to get currenthour we must set it as a var equal to moments.hours
    var currentHour = moment().hours();

    // for each time block you need an function
    $(".row").each(function(){
        var blockHour = parseInt($(this).attr("id"))

        if (currentHour > blockHour) {
            $(this).addClass("past")
        } else if(currentHour === blockHour){
            $(this).removeClass("past")
            $(this).addClass("present")
        } else{
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    } )
}
hourUpdater();


// set interval to where page updates every 30s

setTimeout(function(){
    location = ''
  },60000);

// get items from local storage

// function getLocalStorage() {
//     if (localStorage.getItem("text")){
//         textContent = JSON.parse(localStorage.getItem("text"));
//     } 
// }

$("#9 .input").val(localStorage.getItem("9"))
$("#10 .input").val(localStorage.getItem("10"))
$("#11 .input").val(localStorage.getItem("11"))
$("#12 .input").val(localStorage.getItem("12"))
$("#13 .input").val(localStorage.getItem("13"))
$("#14 .input").val(localStorage.getItem("14"))
$("#15 .input").val(localStorage.getItem("15"))
$("#16 .input").val(localStorage.getItem("16"))
$("#17 .input").val(localStorage.getItem("17"))


});