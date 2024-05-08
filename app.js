function markAttendance() {
  var employeeName = document.getElementById("employeeName").value;
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var attendanceStatus = document.getElementById("attendanceStatus");
  var attendanceHistory = document.getElementById("attendanceHistory");

  if (hours < 10 || (hours === 10 && minutes <= 5)) {
    attendanceStatus.textContent =
      "Good morning, " + employeeName + "! You're on time.";
  } else {
    attendanceStatus.textContent =
      "Warning, " + employeeName + "! You're late.";
    // Deduct salary or take other actions for being late
  }

  if (!employeeName == "") {
   // alert(employeeName);
    var historyItem = document.createElement("li");
    historyItem.textContent =
      employeeName + ": " + (hours < 10 ? "On time" : "Late");
    attendanceHistory.prepend(historyItem);
  }
}
