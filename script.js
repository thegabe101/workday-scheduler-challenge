
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
        //breakthrough here came when I logged this. I was initially putting .table-border as the class to alter in the logic below but that would not have been targeting the parsed integerers of each row. 
      
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

//now to figure out local storage + tying to button
//   console.log(localStorage);
//   localStorage.setItem("toDo", "9 o'clock meeting");
  //key value+item successfully logs storage. how to tie to an ID.
// localStorage.removeItem("toDo");
// console.log(localStorage);
// localStorage.setItem("workNotes", "this project is hard");
// localStorage.setItem("toDo", "9 o'clock meeting");
// console.log(localStorage.getItem("toDo"));
//JS seems to like making a number into a string no matter how I write the local storage key, something to keep in mind.
// console.log(localStorage.key(1)); 
//this was just messing around w local storage; going to comment this out and actually try to create the function now. 


