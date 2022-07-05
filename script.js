
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


// const toDoInputEl = document.getElementById ("toDo");
// const workNotesInputEl = document.getElementById ("workNotes");
// const svBtn = document.getElementById ("svBtn");
// const formField = document.getElementsByClassName("form-field")

// svBtn.onclick = function () {
//     const key = toDoInputEl.value;
//     const value = toDoInputEl.value;
//     const key1 = workNotesInputEl.value;
//     const value1 =workNotesInputEl.value;

//     console.log(key);
//     console.log(value);
//     console.log(key1);
//     console.log(value1);

//     if (key && value) {
//       localStorage.setItem(key, value);
//     }
//     if (key1 && value1) {
//       localStorage.setItem(key1, value1);
//     }
//   }
//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i)
//       const value = localStorage.getItem(key);

//       formField.innerHTML += `${key}: ${value}`;
// };

//initial attempt at local storage not working. i am really confused as to how to save two different input fields into local storage. 

// var inputValueBox1 = document.getElementById("toDo");
// var inputValueBox2 = document.getElementById("workNotes");

// $('.svBtn').on('click', function saveData () {
// console.log("clicked");
// var inputvalue1 = inputValueBox1.value
// var inputvalue2 = inputValueBox2.value

// localStorage.setItem("toDo", inputvalue1);
// localStorage.setItem("workNotes", inputvalue2);

// console.log(inputvalue1);
// console.log(inputvalue2);
// console.log("clicked");

// })
// add for loop to add on click event for each hour block. each event will store to a different key. 

// for (let i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.key(i))
// }

// for (var i = 0 ; i < inputValueBox1.length; i++) {
//   saveData();
// }

// for (var i = 0 ; i < inputValueBox2.length; i++) {
//   saveData();
// }

// $("#hour9 #toDo").val(localStorage.getItem("toDo"));
// $("#hour9 #workNotes").val(localStorage.getItem("workNotes"));
// $("#hour10 #toDo").val(localStorage.getItem("toDo"));
// $("#hour10 #workNotes").val(localStorage.getItem("workNotes"));
// $("#hour11 #toDo").val(localStorage.getItem("toDo"));
// $("#hour11 #workNotes").val(localStorage.getItem("workNotes"));
// $("#hour12 #toDo").val(localStorage.getItem("toDo"));
// $("#hour12 #workNotes").val(localStorage.getItem("workNotes"));
// $("#hour13 #toDo").val(localStorage.getItem("toDo"));
// $("#hour13 #workNotes").val(localStorage.getItem("workNotes"));
// $("#hour14 #toDo").val(localStorage.getItem("toDo"));
// $("#hour14 #workNotes").val(localStorage.getItem("workNotes"));
// $("#hour15 #toDo").val(localStorage.getItem("toDo"));
// $("#hour15 #workNotes").val(localStorage.getItem("workNotes"));
// $("#hour16 #toDo").val(localStorage.getItem("toDo"));
// $("#hour16 #workNotes").val(localStorage.getItem("workNotes"));
// $("#hour17 #toDo").val(localStorage.getItem("toDo"));
// $("#hour17 #workNotes").val(localStorage.getItem("workNotes"));

// var inputValueBox1 = document.getElementById("toDo-9");
// var inputValueBox2 = document.getElementById("workNotes-9");
// var inputvalue1 = inputValueBox1.value
// var inputvalue2 = inputValueBox2.value

$('#svBtn-1').click(
  () => {
    let value = $('#toDo-9').val()
    let value2 = $('#workNotes-9').val()
    localStorage.setItem("toDo-9", value)
    localStorage.setItem("workNotes-9", value2)
    console.log("clicky1")
  }
)

$('#svBtn-2').click(
  () => {
    let value = $('#toDo-10').val()
    let value2 = $('#workNotes-10').val()
    localStorage.setItem("toDo-10", value)
    localStorage.setItem("workNotes-10", value2)
    console.log("clicky2")
  }
)

$('#svBtn-3').click(
  () => {
    let value = $('#toDo-11').val()
    let value2 = $('#workNotes-11').val()
    localStorage.setItem("toDo-11", value)
    localStorage.setItem("workNotes-11", value2)
    console.log("clicky3")
  }
)

$('#svBtn-4').click(
  () => {
    let value = $('#toDo-12').val()
    let value2 = $('#workNotes-12').val()
    localStorage.setItem("toDo-12", value)
    localStorage.setItem("workNotes-12", value2)
    console.log("clicky4")
  }
)

$('#svBtn-5').click(
  () => {
    let value = $('#toDo-13').val()
    let value2 = $('#workNotes-13').val()
    localStorage.setItem("toDo-13", value)
    localStorage.setItem("workNotes-13", value2)
    console.log("clicky5")
  }
)

$('#svBtn-6').click(
  () => {
    let value = $('#toDo-14').val()
    let value2 = $('#workNotes-14').val()
    localStorage.setItem("toDo-14", value)
    localStorage.setItem("workNotes-14", value2)
    console.log("clicky6")
  }
)

$('#svBtn-7').click(
  () => {
    let value = $('#toDo-15').val()
    let value2 = $('#workNotes-15').val()
    localStorage.setItem("toDo-15", value)
    localStorage.setItem("workNotes-15", value2)
    console.log("clicky7")
  }
)

$('#svBtn-8').click(
  () => {
    let value = $('#toDo-16').val()
    let value2 = $('#workNotes-16').val()
    localStorage.setItem("toDo-16", value)
    localStorage.setItem("workNotes-16", value2)
    console.log("clicky8")
  }
)

$('#svBtn-9').click(
  () => {
    let value = $('#toDo-17').val()
    let value2 = $('#workNotes-17').val()
    localStorage.setItem("toDo-17", value)
    localStorage.setItem("workNotes-17", value2)
    console.log("clicky9")
  }
)

$("#hour9 #toDo-9").val(localStorage.getItem("toDo-9"));
$("#hour9 #workNotes-9").val(localStorage.getItem("workNotes-9"));
$("#hour10 #toDo-10").val(localStorage.getItem("toDo-10"));
$("#hour10 #workNotes-10").val(localStorage.getItem("workNotes-10"));
$("#hour11 #toDo-11").val(localStorage.getItem("toDo-11"));
$("#hour11 #workNotes-11").val(localStorage.getItem("workNotes-11"));
$("#hour12 #toDo-12").val(localStorage.getItem("toDo-12"));
$("#hour12 #workNotes-12").val(localStorage.getItem("workNotes-12"));
$("#hour13 #toDo-13").val(localStorage.getItem("toDo-13"));
$("#hour13 #workNotes-13").val(localStorage.getItem("workNotes-13"));
$("#hour14 #toDo-14").val(localStorage.getItem("toDo-14"));
$("#hour14 #workNotes-14").val(localStorage.getItem("workNotes-14"));
$("#hour15 #toDo-15").val(localStorage.getItem("toDo-15"));
$("#hour15 #workNotes-15").val(localStorage.getItem("workNotes-15"));
$("#hour16 #toDo-16").val(localStorage.getItem("toDo-16"));
$("#hour16 #workNotes-16").val(localStorage.getItem("workNotes-16"));
$("#hour17 #toDo-17").val(localStorage.getItem("toDo-17"));
$("#hour17 #workNotes-17").val(localStorage.getItem("workNotes-17"));