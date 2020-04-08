// from data.js
var tableData = data;
var tbody = d3.select("tbody");
tableData.forEach((incident) => {
  var row = tbody.append("tr");
  Object.entries(incident).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  })
})

// YOUR CODE HERE!
// Select the input
var button = d3.select("#filter-btn");


button.on("click", function() {

  // Select the input element and get the raw HTML node
  
  
  var inputElement = d3.select("#datetime");


  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
//   console.log(tableData);

  filteredData = tableData.filter(incident => incident.datetime === inputValue);

  console.log(filteredData);
  
// Get a reference to the table body
  var tbody = d3.select("tbody");
  tbody.html("");

  filteredData.forEach((incident) => {
    var row = tbody.append("tr");
    Object.entries(incident).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })
})
