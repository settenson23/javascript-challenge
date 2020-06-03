var tableData = data;

var tbody = d3.select("tbody")

function displayData(ufo_data){ 
    tbody.text("")
    ufo_data.forEach(function(each_sighting){
    new_tr = tbody.append("tr")
    Object.entries(each_sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

var submit = d3.select("#submit");

submit.on("click", function() {

  var dateInput = d3.select("#datetime");
  var cityInput = d3.select("#city");
  var stateInput = d3.select("#state");
  var countryInput = d3.select("#country");
  var shapeInput = d3.select("#shape");
  
  });

  

