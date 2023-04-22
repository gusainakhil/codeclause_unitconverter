function convert() {
  var input = document.getElementById("input").value;
  var output = document.getElementById("output");
  if (input === "") {
    output.innerHTML = "Please enter a value";
    return;
  }
  if (isNaN(input)) {
    output.innerHTML = "Please enter a valid number";
    return;
  }
  var km = parseFloat(input);
  var miles = km / 1.609;
  output.innerHTML = km + " kilometers is equal to " + miles.toFixed(2) + " miles";
}
