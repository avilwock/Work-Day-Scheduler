/*This wraps the code in a call to JQuery to ensure the code isn't run until the
browser has finished rendering all of the HTML elements*/
$(document).ready(function() {
    //creates a variable for the time element by retrieving the id currentDay from
    //the HTML
    var timeElement = document.getElementById('currentDay');
    //This function is used to update the time
    function updateTime() {
    //this creates the current day variable, and gets the current month, day, year,
    //hours, minute, and second using dayjs
    var currentDate = dayjs().format("MMM DD, YYYY [at] hh:mm:ss");
    //This updates the text content of the HTML current day element with the current date
    timeElement.textContent = currentDate;
    }
    //This sets up an interval to repeat every 1 second to update the display time and date
    setInterval(updateTime, 1000);

  // This 
  $(".saveBtn").on("click", function() {
    // Get nearby values of the description in JQuery
    
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);
    })

    function timeCheck() {
    
      var timeNow = parseInt(dayjs().hour());
      
        $(".time-block").each(function() {
          var timeBlock = parseInt($(this).attr("id"));
          console.log(timeBlock, timeNow);

            if (timeBlock < timeNow) {
              $(this).addClass("past");
              $(this).removeClass("present");
              $(this).removeClass("future");
            }
            else if (timeBlock === timeNow) {
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
            } 
            else if (timeBlock > timeNow) {
              $(this).removeClass("past");
              $(this).removeClass("present");
              $(this).addClass("future");
            }              
        })
    }
    
    timeCheck();

    function getFromLocalStorage() {
      $("#9 .description").val(localStorage.getItem("9"));
      $("#10 .description").val(localStorage.getItem("10"));
      $("#11 .description").val(localStorage.getItem("11"));
      $("#12 .description").val(localStorage.getItem("12"));
      $("#13 .description").val(localStorage.getItem("13"));
      $("#14 .description").val(localStorage.getItem("14"));
      $("#15 .description").val(localStorage.getItem("15"));
      $("#16 .description").val(localStorage.getItem("16"));
      $("#17 .description").val(localStorage.getItem("17"));
    }
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
