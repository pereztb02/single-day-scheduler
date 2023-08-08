// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//shows todays date and current time
let today = dayjs()
let displayToday = today.format('MMM D, YYYY, hh:mm:ss a');
document.getElementById("currentDay").textContent = displayToday;
let hour = today.hour();


$(function saveIt() {

  const calenderEvent = document.getElementById('textarea');
  const saveBtnEl = document.getElementsByClassName('saveBtn'); 
  console.log(saveBtnEl);

for (let index = 0; index < saveBtnEl.length; index++) {
  const item = saveBtnEl[index];
  item.addEventListener('click', function (event){
      const id = event.target.getAttribute('id').split("-")[1]
      const value = document.getElementById("textarea-" + id).value
      localStorage.setItem('textareaValue-' + id, value);
    })
};

 function readFromLocalStorage() {
  for (let index = 9; index <= 17; index++) {
    const storageValue = localStorage.getItem('textareaValue-' + index);
    if (storageValue) {
      document.getElementById('textarea-' + index).value = storageValue
    } 
  }
 }

readFromLocalStorage();

//add "past, present, future" classes to the element 'hour-'
for (let index = 9; index <= 17; index++) {
  if (hour < index) {
    document.getElementById('hour-' + index).classList.add("future")
  }  else if (hour > index) {
    document.getElementById('hour-' + index).classList.add("past")
  } else {
    document.getElementById('hour-' + index).classList.add("present")
  }
  
};

document.addEventListener("DOMContentLoaded", function() {
  const currentTime = new Date().getHours();

  // Get all time blocks with class "time-block"
  const timeBlocks = document.querySelectorAll(".time-block");

  // Loop through each time block and apply the appropriate class
  timeBlocks.forEach(timeBlock => {
    const hour = parseInt(timeBlock.id.split("-")[1], 10);

    if (hour < currentTime) {
      timeBlock.classList.add("past");
    } else if (hour === currentTime) {
      timeBlock.classList.add("present");
    } else {
      timeBlock.classList.add("future");
    }
  });
});
});
