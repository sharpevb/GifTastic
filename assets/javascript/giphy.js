$("button").on("click", function (displayGif) {
    var animal = $(this).attr("data-animal");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=JRcxsQnkDertgsjaSuehdzHxlznU528v&limit=10";

    var state = $(this).attr("data-state");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        var results = response.data;


        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>")
            var p = $("<p>").text("Rating: " + results[i].rating);
            var animalImg = $("<img>");
            animalImg.attr("src", results[i].images.fixed_height_still.url);
            animalDiv.append(p);
            animalDiv.append(animalImg);
            $("#gifs-here").prepend(animalDiv);
            //add data-state="animate" tag to img tag

            animalImg.on("click", function () {
                console.log("click");

            });

        }

        //trying to get gif to animate on click


    })
});




/*if (state === "still") {
        $(this).attr("src", results[i].images.fixed_height.url);
        $(this).attr("data-state", "animate");
    }
                    var state = $("#gif");
                    state.attr("data-animal", results[i].images.fixed_height.url)

                    console.log("animate");

    */