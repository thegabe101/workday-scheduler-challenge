
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