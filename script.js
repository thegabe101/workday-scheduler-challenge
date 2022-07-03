$(document).ready(function () {
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


// function rowColor() {
//   var timeBlockElements = $('.hour');
//   console.log(timeBlockElements);
//   var d = new Date();
//   var now = d.getUTCHours() - 8;
//   console.log(now);
//   var before = d.getUTCHours() +8;
//   console.log(before);
//   console.log(d);
//   for (var i = 0 ; i < timeBlockElements.length ; i++)
//   if (d > before) {
//       $(".hour").addClass("past").removeClass("future");
//   } else  {
      
//       $(".hour").addClass("future").removeClass("past");
//   }
  
// }
// rowColor();


//



// var workToDoInputEl = $('.hour')
// var workNotesEl = $('#workNotes')
// var saveButton = $('.svBtn')
// var projectModalEl = $('.project-modal');
// var projectDisplayEl = $('.project-display')

// function addProjectData(todo, notes) {
//   var rowEl = $('#toDo');

//   var toDoEl = $('<td>').text(todo);

//   var notesEl = $('<td>').text(notes);

//   rowEl.append(
//       toDoEl,
//       notesEl
//   )
//   projectDisplayEl.append(rowEl);


// }
function hourTracker() {

  var currentHour = moment().hour(); 

  
  $(".rowTime").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log( blockHour, currentHour)

      
      if (blockHour < currentHour) {
          $('.table-bordered').addClass("past");
          $('.table-bordered').removeClass("future");
          $('.table-bordered').removeClass("present");
      }
      else if (blockHour === currentHour) {
          $('.table-bordered').removeClass("past");
          $('.table-bordered').addClass("present");
          $('.table-bordered').removeClass("future");
      }
      else {
          $('.table-bordered').removeClass("present");
          $('.table-bordered').removeClass("past");
          $('.table-bordered').addClass("future");
      }
  })
}
hourTracker(); 
})



// function saveStuff (event) {
//   event.preventDefault();

//   var toDo = workToDoInputEl.val().trim();
//   var workNotes = workNotesEl.val().trim();

//   addProjectData(toDo, workNotes);

// }

// saveButton.on('click', saveStuff);


  // $(".svBtn").on("click", function () {
  // console.log("clicked");
  //     var toDoText = toDoInputEl.val();
  //     var workNotesText = workNotesInputEl.val();
  //     localStorage.setItem(toDoText, workNotesText);
  // })

  // $(".hour9 #toDo #workNotes").val(localStorage.getItem("hour9"));
  // $(".hour10 #toDo #workNotes").val(localStorage.getItem("hour10"));
  // $(".hour11 #toDo #workNotes").val(localStorage.getItem("hour11"));
  // $(".hour12 #toDo #workNotes").val(localStorage.getItem("hour12"));
  // $(".hour13 #toDo #workNotes").val(localStorage.getItem("hour13"));
  // $(".hour14 #toDo #workNotes").val(localStorage.getItem("hour14"));
  // $(".hour15 #toDo #workNotes").val(localStorage.getItem("hour15"));
  // $(".hour16 #toDo #workNotes").val(localStorage.getItem("hour16"));
  // $(".hour17 #toDo #workNotes").val(localStorage.getItem("hour17"));