function setHours() {

  let currentHour = moment().hour(); // use moment.js 

  $(".time-block").each(function () { // for each loop that iterates through each timeblock

    let blockHour = parseInt($(this).children().eq(0).text().split(':')[0]);  // get the hour of the currently selected block
    if (blockHour < 5) { // because we are using 12-hour time, when we get a time such as 1:00pm we need to add 12 to it to conver it to 24-hour time for comparisons
      blockHour += 12;  // since we are starting from 9:00am, we don't have to account from the 1-5 AM's
    }

    // do comparison and change class appropriately
    if (blockHour < currentHour) { // if blockhour is in the past, set background color to white
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");

    } else if (blockHour === currentHour) { // if blockhour is in the present, set background color to red
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");

    } else {
      $(this).removeClass("present"); // if blockhour is in the future, set background color to green
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })
}

$(document).ready(function () {
  // Display current time and date
  $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

  // when save button is clicked, save contents to local storage
  $('.saveBtn').on('click', function () {

    let time = $(this).parent().attr("id"); // retrieve the blockhour time
    let text = $(this).siblings(".description").val(); // retrieve the user-inputted text from the blockhour description

    localStorage.setItem(time, text); // save the time and text to local storage
  });

  //get and set local storage data for each timeblock
  $('#hour-1 .description').val(localStorage.getItem('hour-1'));
  $('#hour-2 .description').val(localStorage.getItem('hour-2'));
  $('#hour-3 .description').val(localStorage.getItem('hour-3'));
  $('#hour-4 .description').val(localStorage.getItem('hour-4'));
  $('#hour-5 .description').val(localStorage.getItem('hour-5'));
  $('#hour-6 .description').val(localStorage.getItem('hour-6'));
  $('#hour-7 .description').val(localStorage.getItem('hour-7'));
  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));

  // call setHours function
  setHours();
})