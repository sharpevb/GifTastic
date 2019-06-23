$("button").on("click", function() {
var animal = $(this).attr("data-animal");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=JRcxsQnkDertgsjaSuehdzHxlznU528v&limit=10";

$.ajax( {
    url: queryURL,
    method: "GET"
})
.then(function(response) {
    console.log(queryURL);
    console.log(response);
    var results = response.data;

    for (var i=0; i < results.length; i++) {
        var animalDiv = $("<div>")
        var p = $("<p>").text("Rating: " + results[i].rating);
        var animalImg = $("<img>");
        animalImg.attr("src", results[i].images.fixed_height_still.url);
        animalDiv.append(p);
        animalDiv.append(animalImg);
        $("#gifs-here").prepend(animalDiv);
    }
})

});