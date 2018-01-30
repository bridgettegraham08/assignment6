
$( document ).ready(function() {
    console.log( "ready!" );
});

var cities = [ "NYC", "LA", "SYD", "SF", "ATX"]
var optionTags = ""

  cities.forEach(function(name){
    optionTags += "<option>" + name.toUpperCase() + "</option>"
})
  $('#city-type').append(optionTags)

  $('#city-type').change(function(event){
    event.preventDefault()
var userInput = $('#city-type').val()

if (userInput === (cities [0]))  {
  $('body').addClass('nyc')
} else if (userInput === (cities [1])) {
  $('body').addClass('la')
} else if (userInput === (cities [2])) {
  $('body').addClass('sydney')
} else if (userInput === (cities [3])) {
  $('body').addClass('sf')
} else if (userInput === (cities [4])) {
  $('body').addClass('austin')
} else {
  $('body').css('background', 'url(images/citipix_skyline.jpg')
}

})

// Group cities in array
// Assign variable to optionTags with string result
// For each option in cities array create option tag with each city name
// Select the "city-type" element and add each option tag created in previous step
// Select "city-type" and add event listener for changes
// Assign variable to userInput, select "city-type" and log value
// Create if statements that call array and compare to user input
