// from data.js
var tableData = data;

// YOUR CODE HERE!
// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

var tbody = d3.select("tbody");
console.log(data);

data.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.
var instances = data;
var filterButton = d3.select("#filter-btn");

// Complete the click handler for the form
filterButton.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    //Get the value property of the input Element
    var inputValue = inputElement.property("value");

    // Create a custom filtering function that filters dataset for user input date
    function selectDate(instance) {
        return instance.datetime === inputValue;
    }

    //Use the form input to filter the data by date
    var filteredData = instances.filter(selectDate);
    console.log(filteredData);

    // Remove table contents
    tbody.html("");

    // Only display filtered data in table
    filteredData.forEach(function(ufoSightings) {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
