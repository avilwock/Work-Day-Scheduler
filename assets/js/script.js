/*This wraps the code in a call to JQuery to ensure the code isn't run until the
browser has finished rendering all of the HTML elements*/
$(document).ready(function() {
    /*creates a variable for the time element by retrieving the id currentDay from
    the HTML*/
    var timeElement = document.getElementById('currentDay');
    //This function is used to update the time
    function updateTime() {
    /*this creates the current day variable, and gets the current month, day, year,
    hours, minute, and second using dayjs*/
    var currentDate = dayjs().format("MMM DD, YYYY [at] hh:mm:ss");
    //This updates the text content of the HTML current day element with the current date
    timeElement.textContent = currentDate;
    }
    //This sets up an interval to repeat every 1 second to update the display time and date
    setInterval(updateTime, 1000);

  // This sets the save button to use the function on a click event
  $(".saveBtn").on("click", function() {
        // Get nearby values of the description in JQuery for the document id attribute
        var time = $(this).parent().attr("id");
        // Gets the description class value stored as a variable named text
        var text = $(this).siblings(".description").val();
    //stores the time and text variables to local storage
    localStorage.setItem(time, text);
    })
    /*a function that is used to compare time values and implement different code depending
    on which parameters are true*/
    function timeCheck() {
      //create a timeNow variable to display the hour of the day as a number, military time
      var timeNow = parseInt(dayjs().hour());
        //creates a function for each time block in the divs
        $(".time-block").each(function() {
          /*creates a variable named timeBlock that splits everything after the - and leaves
          behind a number. It is parsed into a number*/
          var timeBlock = parseInt($(this).attr('id').split('-')[1]);
          //this console log checks to see what time the timeNow and timeBlock will display
          console.log(timeBlock, timeNow);
            /*this adds the class value past when the time block number is less than 
            the current time, and removes the other two classes*/
            if (timeBlock < timeNow) {
              $(this).addClass("past");
              $(this).removeClass("present");
              $(this).removeClass("future");
            }
            /*this adds the class value present when the time block number is equal to
            the current time, and removes the other two classes*/
            else if (timeBlock === timeNow) {
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
            /*this adds the class value future when the time block number is equal to
            the current time and removes the other two classes*/
            } 
            else if (timeBlock > timeNow) {
              $(this).removeClass("past");
              $(this).removeClass("present");
              $(this).addClass("future");
            }              
        })
    }
    //this runs the function for the page
    timeCheck();
    /*this is a function to retrieve the data from local storage and populate 
    it into the description for each id*/
    function getFromLocalStorage() {
      // $("#hour-9 .description").val(localStorage.getItem("hour-9"));
      // $("#hour-10 .description").val(localStorage.getItem("hour-10"));
      // $("#hour-11 .description").val(localStorage.getItem("hour-11"));
      // $("#hour-12 .description").val(localStorage.getItem("hour-12"));
      // $("#hour-13 .description").val(localStorage.getItem("hour-13"));
      // $("#hour-14 .description").val(localStorage.getItem("hour-14"));
      // $("#hour-15 .description").val(localStorage.getItem("hour-15"));
      // $("#hour-16 .description").val(localStorage.getItem("hour-16"));
      // $("#hour-17 .description").val(localStorage.getItem("hour-17"));
      /*this creates a range of numbers from hour 9 to hour 17 to retrieve each
      value from local storage*/
      for (let i = 9; i <= 17; i++) $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
    }
    //This gets the data from the local storage and places it on the page.
    getFromLocalStorage();

})



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
