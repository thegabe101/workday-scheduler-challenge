
//TODO: figure out way for colors to correspond with current time 
//initial attempt unsuccessful

// this was just a test function to see if i could get any row to change time. successful, but havent figured out a way to correspond rows with current time. 
// function timeColor(){
//     var d = new Date();
//     var before = d.getUTCHours()-1;
//     var now = d.getUTCHours()+1;
//     var divToChange = $('#trColor');
//     if (before > now)
//       // If time is after 6PM or before 9AM, apply night theme to 'body'
//       divToChange.removeClass("themeDay").addClass("themeNight");
//     else
//       // Else use ‘day’ theme
//       divToChange.removeClass("themeNight").addClass("themeDay");
// }

// timeColor();

// var toDoInputEl = $('#toDo');
// var workNotesInputEl = $('#workNotes');

//timer function was pretty simple. had a bit of trouble with the m/d/y format but was able to figure it out through experimentation. 
var showDay = $('#currentDay');

function displayTime() {
    var rightNow = moment().format('dddd MMMM, Do YYYY')
    showDay.text(rightNow);
}

displayTime();

//TODO: 1. need to create input fields in the html for each of the time rows
//TODO: 2. create global variables for each of the time rows 
//TODO: 3. create a function that appends input fields into corresponding rows 
//TODO: 4. create a clear field button 
//TODO: 5. create a submit button that accepts the first function
//TODO: 6. local storage 
  
  $(".rowTime").each(function () {
      var rowHour = parseInt($(this).attr("id").split("hour")[1]);
      var currentHour = moment().hour(); 
      //for (var i = 0; i < rowHour.length; i++)
      //this line took me awhile to get. parseInt + this and adding the attribute of id and splitting it enables us to parse all of the divs with the id of hour by 1. this way we are able to divide them into blocks that level consistently and apply a correct value to in the if/else rule. 
      console.log(rowHour, currentHour)
      console.log(typeof rowHour)
      console.log(this)

      
      if (rowHour < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
      }
      else if (rowHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
      }
  })

//   $(".svBtn").click(function (event) {
//     event.preventDefault();
//     var value = $(this).siblings(".rowTime").val();
//     var time = $(this).parent().attr("id").split("-")[1];
//     localStorage.setItem(time, value);
//   });

//   //retrieves items from local storage and sets them in proper places
//   $("#hour-09 .form-field").val(localStorage.getItem("09"));
//   $("#hour-10 .form-field").val(localStorage.getItem("10"));
//   $("#hour-11 .form-field").val(localStorage.getItem("11"));
//   $("#hour-12 .form-field").val(localStorage.getItem("12"));
//   $("#hour-13 .form-field").val(localStorage.getItem("13"));
//   $("#hour-14 .form-field").val(localStorage.getItem("14"));
//   $("#hour-15 .form-field").val(localStorage.getItem("15"));
//   $("#hour-16 .form-field").val(localStorage.getItem("16"));
//   $("#hour-17 .form-field").val(localStorage.getItem("17"));



