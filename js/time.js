function updatedatetime() {
  var now = new Date(),
    date = now.toDateString();
  time = now.toLocaleTimeString();
  var datetime = date + " | " + time;
  document.getElementById('time').innerHTML = datetime;
  document.getElementById('time2').innerHTML = datetime;
  setTimeout(updatedatetime, 999);
}

updatedatetime();