$("#button_submit").click(function(e) {
  e.preventDefault();
  console.log("in handler: clicked!");
});

//var values = $('#').val() -------------- for multi-selections
//JSON object before writing it on the data base and print it right away.

document
  .getElementById("eventCreation")
  .addEventListener("submit", processForm);


function processForm(e) {

  e.preventDefault();

  console.log("Yes button clicked");
  var title = document.getElementById("inputTitle").value;
  var date = document.getElementById("inputDate").value;
  var time = document.getElementById("inputTime").value;
  var ampm = document.getElementById("inputAMPM").value;
  var skillLevel = document.getElementById("select_skillLevel").value;
  var numOfBuddies = document.getElementById("select_numOfBuddies").value;
  var message = document.getElementById("text_event").value;

  var event = db.collection("event");

  const func = async () => {
    await event.add({
      title: title,
      date: date,
      time: time + " " + ampm,
      skillLevel: skillLevel,
      number: numOfBuddies,
      message: message
    });

  
    await window.location.assign("success_creating.html");
  };

  func();
}

