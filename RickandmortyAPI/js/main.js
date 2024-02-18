// Fade in character api when site loads. they fade within two seconds to the four sections of the website.
$(".inner-character-grid").ready( function () {
    $(".character_1").hide().fadeIn(2000);
    $(".character_2").hide().fadeIn(2000);
    $(".character_3").hide().fadeIn(2000);
    $(".character_4").hide().fadeIn(2000);
    //A varriable to create a counter in order to increase to certain numbers to be placed within the text of some words usesing numbers at the end of them.
    for (var i = 1; i < 5; i++) { 




    $.ajax({
        //A counter was set in place to increase and fill in the page numbers for the API. Each url has a page number so in order to make the code more compact this was made to prevent repeating the code.
        counter: i,
        //The URL API being used to recieve information on chracters for the rick and morty API. the webpage can be seen with the counter to increase.
        url: "https://rickandmortyapi.com/api/character/?page="+ i,
        data:"data",
        dataType: "json",
        //Upon success of calling the API from the URL above, character image along with there information will appear.
        success: function (response) {
        // to check on the counter and what it is
            console.log(`counter is now: ${this.counter}`);
        //A certain code to help randomize the information being called upon everytime utalizing the array they are placed within them.
            response.results.sort(function() { return 0.5 - Math.random() });
            var target = $(".character" + this.counter);
        
        //The information being retrieved through the URL API will be sent to these links on the webpage. The info being taken will apear random everytime the web page is refreshed.
            $(".character" + i).html(response.results[0].name);
            $(".character-image" + this.counter).html(`<img src= "${response.results[0].image}"/>`);
            $(".character-status"+ this.counter).html("Status: " + response.results[0].status);
            $(".character-species"+ this.counter).html("Species: " + response.results[0].species);
            $(".character-gender"+ this.counter).html("Gender: " + response.results[0].gender);
        $(".character-location"+ this.counter).html("Location: " + response.results[0].location.name);
        },
        //If information has not been retrieved then this error message will appear 
        error: function(){
            $("#display-error").fadeIn();
            $(".error-close").on("click", function(){
                $("#display-error").fadeOut();
            });
        }
            
    });
    }

    //Section 1 for the first page of the rick and morty API URL. This section gains information from 20 characters in page 1 of the Rick and morty API since they are devided into pages and not every information is on one page.
    $.ajax({
        //URL retreiving the API information 
        url: "https://rickandmortyapi.com/api/character",
        
        data:"data",
        dataType: "json",
        //If successful in calling the information, the current code shall follow
        success: function (response) {
            console.log(response);
            response.results.sort(function() { return 0.5 - Math.random() });
             //The information being retrieved through the URL API will be sent to these links on the webpage. The info being taken will apear random everytime the web page is refreshed.
            $(".character").html(response.results[0].name);
            
            $(".character-image").html(`<img src= "${response.results[0].image}"/>`);
            $(".character-status").html("Status: " + response.results[0].status);
            $(".character-species").html("Species: " + response.results[0].species);
            $(".character-gender").html("Gender: " + response.results[0].gender);
            $(".character-location").html("Location: " + response.results[0].location.name);
        },
        //If information has not been retrieved then this error message will appear 
        error: function(){
            console.log("hello");
            $("#display-error").fadeIn();
            $(".error-close").on("click", function(){
                $("#display-error").fadeOut();
            });
        }
        
    });
    //Section 2 of the rick and morty API containing  the second page of 20 characters.
    $.ajax({
        //URL retreiving the API information 
        url: "https://rickandmortyapi.com/api/character/?page=2",
        data:"data",
        dataType: "json",
        //If successful in calling the information, the current code shall follow
        success: function (response) {
            console.log(response);
            response.results.sort(function() { return 0.5 - Math.random() });
             //The information being retrieved through the URL API will be sent to these links on the webpage. The info being taken will apear random everytime the web page is refreshed.
            $(".character2").html(response.results[0].name);
            
            $(".character-image2").html(`<img src= "${response.results[0].image}"/>`);
            $(".character-status2").html("Status: " + response.results[0].status);
            $(".character-species2").html("Species: " + response.results[0].species);
            $(".character-gender2").html("Gender: " + response.results[0].gender);
            $(".character-location2").html("Location: " + response.results[0].location.name);
        },
        //If information has not been retrieved then this error message will appear 
        error: function(){
            console.log("hello");
            $("#display-error").fadeIn();
            $(".error-close").on("click", function(){
                $("#display-error").fadeOut();
            });
        }
    });

    //section 3 of the rick and morty API containing the third page of 20 characters
    $.ajax({
        //URL retreiving the API information 
        url: "https://rickandmortyapi.com/api/character/?page=3",
        data:"data",
        dataType: "json",
        //If successful in calling the information, the current code shall follow
        success: function (response) {
            console.log(response);
            response.results.sort(function() { return 0.5 - Math.random() });
             //The information being retrieved through the URL API will be sent to these links on the webpage. The info being taken will apear random everytime the web page is refreshed.
            $(".character3").html(response.results[0].name);
            
            $(".character-image3").html(`<img src= "${response.results[0].image}"/>`);
            $(".character-status3").html("Status: " + response.results[0].status);
            $(".character-species3").html("Species: " + response.results[0].species);
            $(".character-gender3").html("Gender: " + response.results[0].gender);
            $(".character-location3").html("Location: " + response.results[0].location.name);
        },
        //If information has not been retrieved then this error message will appear 
        error: function(){
            console.log("hello");
            $("#display-error").fadeIn();
            $(".error-close").on("click", function(){
                $("#display-error").fadeOut();
            });
        }
    });

    //section 4 of the rick and morty API containing the fourth page of 20 characters.
    $.ajax({
        //URL retreiving the API information 
        url: "https://rickandmortyapi.com/api/character/?page=4",
        
        data:"data",
        dataType: "json",
        //If successful in calling the information, the current code shall follow
        success: function (response) {
            console.log(response);
            response.results.sort(function() { return 0.5 - Math.random() });
             //The information being retrieved through the URL API will be sent to these links on the webpage. The info being taken will apear random everytime the web page is refreshed.
            $(".character4").html(response.results[0].name);
            
            $(".character-image4").html(`<img src= "${response.results[0].image}" />`);
            $(".character-status4").html("Status: " + response.results[0].status);
            $(".character-species4").html("Species: " + response.results[0].species);
            $(".character-gender4").html("Gender: " + response.results[0].gender);
            $(".character-location4").html("Location: " + response.results[0].location.name);
        },
        //If information has not been retrieved then this error message will appear 
        error: function(){
            console.log("hello");
            $("#display-error").fadeIn();
            $(".error-close").on("click", function(){
                $("#display-error").fadeOut();
            });
        }
        
    });
    
});

// Click for the character to appear. This sectioin contatins the same code as in the first part with 4 repetative code just calling from 4 different pages. When ever the get character funstioin is clicked it will replace the current API information with the new, this include picture and information regarding each character.
$("#get-character").on("click", function () { 
    // Each character sheet fades in. 
    $(".character_1").hide().fadeIn(3000);
    $(".character_2").hide().fadeIn(3000);
    $(".character_3").hide().fadeIn(3000);
    $(".character_4").hide().fadeIn(3000);

    //Section 1 of the rick and morty API chracter sheet containing information from the first page of 20 characters.
    $.ajax({
        //URL retreiving the API information 
        url: "https://rickandmortyapi.com/api/character/",
        data:"data",
        dataType: "json",
        //If successful in calling the information, the current code shall follow
        success: function (response) {
            console.log(response);
            response.results.sort(function() { return 0.5 - Math.random() });
             //The information being retrieved through the URL API will be sent to these links on the webpage. The info being taken will apear random everytime the web page is refreshed.
            $(".character").html(response.results[0].name);
            
            $(".character-image").html(`<img src= "${response.results[0].image}"/>`);
            $(".character-status").html("Status: " + response.results[0].status);
            $(".character-species").html("Species: " + response.results[0].species);
            $(".character-gender").html("Gender: " + response.results[0].gender);
            $(".character-location").html("Location: " + response.results[0].location.name);
        },
      //If information has not been retrieved then this error message will appear 
        error: function(){
            
            $("#display-error").fadeIn();
            $(".error-close").on("click", function(){
                $("#display-error").fadeOut();
            });
        }
    });
    
    //Section 2 of the rick and morty API chracter sheet containing information from the second page of 20 characters.
    $.ajax({
        //URL retreiving the API information 
        url: "https://rickandmortyapi.com/api/character/?page=2",
        data:"data",
        dataType: "json",
        //If successful in calling the information, the current code shall follow
        success: function (response) {
            console.log(response);
            response.results.sort(function() { return 0.5 - Math.random() });
             //The information being retrieved through the URL API will be sent to these links on the webpage. The info being taken will apear random everytime the web page is refreshed.
            $(".character2").html(response.results[0].name);
            
            $(".character-image2").html(`<img src= "${response.results[0].image}"/>`);
            $(".character-status2").html("Status: " + response.results[0].status);
            $(".character-species2").html("Species: " + response.results[0].species);
            $(".character-gender2").html("Gender: " + response.results[0].gender);
            $(".character-location2").html("Location: " + response.results[0].location.name);
        },
        //If information has not been retrieved then this error message will appear 
        error: function(){
            console.log("hello");
            $("#display-error").fadeIn();
            $(".error-close").on("click", function(){
                $("#display-error").fadeOut();
            });
        }
    });

    //Section 3 of the rick and morty API chracter sheet containing information from the third page of 20 characters.
    $.ajax({
        //URL retreiving the API information 
        url: "https://rickandmortyapi.com/api/character/?page=3",
        data:"data",
        dataType: "json",
        //If successful in calling the information, the current code shall follow
        success: function (response) {
            console.log(response);
            response.results.sort(function() { return 0.5 - Math.random() });
             //The information being retrieved through the URL API will be sent to these links on the webpage. The info being taken will apear random everytime the web page is refreshed.
            $(".character3").html(response.results[0].name);
            
            $(".character-image3").html(`<img src= "${response.results[0].image}"/>`);
            $(".character-status3").html("Status: " + response.results[0].status);
            $(".character-species3").html("Species: " + response.results[0].species);
            $(".character-gender3").html("Gender: " + response.results[0].gender);
            $(".character-location3").html("Location: " + response.results[0].location.name);
        },
        //If information has not been retrieved then this error message will appear 
        error: function(){
            console.log("hello");
            $("#display-error").fadeIn();
            $(".error-close").on("click", function(){
                $("#display-error").fadeOut();
            });
        }
    });

    //Section 4 of the rick and morty API chracter sheet containing information from the fourth page of 20 characters.
    $.ajax({
        //URL retreiving the API information 
        url: "https://rickandmortyapi.com/api/character/?page=4",
        data:"data",
        dataType: "json",
        //If successful in calling the information, the current code shall follow
        success: function (response) {
            console.log(response);
            response.results.sort(function() { return 0.5 - Math.random() });
             //The information being retrieved through the URL API will be sent to these links on the webpage. The info being taken will apear random everytime the web page is refreshed.
            $(".character4").html(response.results[0].name);
            
            $(".character-image4").html(`<img src= "${response.results[0].image}"/>`);
            $(".character-status4").html("Status: " + response.results[0].status);
            $(".character-species4").html("Species: " + response.results[0].species);
            $(".character-gender4").html("Gender: " + response.results[0].gender);
            $(".character-location4").html("Location: " + response.results[0].location.name);
        },
        //If information has not been retrieved then this error message will appear 
        error: function(){
            console.log("hello");
            $("#display-error").fadeIn();
            $(".error-close").on("click", function(){
                $("#display-error").fadeOut();
            });
        }
        
    });
    
});

// Location. Retrieves an location  at the start of the website upload and fades it in. This is then placed in the index page where the location information should be.
$("#get-location").append( function () {
    $.ajax({
        //The API URL being ussed to retrieve the information on location.
        url: "https://rickandmortyapi.com/api/location",
        data: "data",
        dataType: "json",
        //Upon success a random location and its additional information will be retrieved and placed in the web page where its link is set. the information will fade in.
        success: function (response) {
            response.results.sort(function() { return 0.5 - Math.random() });
            $(".location").html("Location: " + response.results[0].name).hide().fadeIn(2000);
            $(".location-type").html("Type: " + response.results[0].type).hide().fadeIn(2000);
            $(".location-dimension").html("Dimensions: " + response.results[0].dimension).hide().fadeIn(2000);
           
        },

        //If the infomration is not retrieved an error message will appear requesting the user try again at a later time.
        error: function(){
            console.log("hello");
            $("#display-error").fadeIn();
            $(".error-close").on("click", function(){
                $("#display-error").fadeOut();
            });
        }
    });
    
});
// Retrieve a random location once button is clicked and replace any existing information that may have been there.
$("#get-location").on("click", function () {
    $.ajax({
        //Uses the same API url information as when the page starts up.
        url: "https://rickandmortyapi.com/api/location/",
        data: "data",
        dataType: "json",

        //The same success as when then the web page is start up and retrieves information. 
        success: function (response) {
            console.log(response)
            response.results.sort(function() { return 0.5 - Math.random() });
            $(".location").html("Location: " + response.results[0].name).hide().fadeIn(2000);
            $(".location-type").html("Type: " + response.results[0].type).hide().fadeIn(2000);
            $(".location-dimension").html("Dimensions: " + response.results[0].dimension).hide().fadeIn(2000);
            
        },

        //The same error message to appear if no information has been retrieved.
        error: function(){
            console.log("hello");
            $("#display-error").fadeIn();
            $(".error-close").on("click", function(){
                $("#display-error").fadeOut();
            });
        }
    });
});
// Episode. Retrieves an episode  at the start of the website upload and fades it in. This is then placed in the index page where the episode information should be.
$("#get-episode").fadeIn(300, function(){
    $.ajax({
        //The api Url being used to retrieve the episode information
        url: "https://rickandmortyapi.com/api/episode/",
        
        dataType: "json",

        //Upon the Success of retrieving the URL the episode along with the name of it will fade in apear on the screen randomly. This will occur everytime upon refreshing the webpage.
        success: function (response) {
            response.results.sort(function() { return 0.5 - Math.random() });
            $(".episode").html("Episode: " + response.results[0].episode).hide().fadeIn(2000);
            $(".episode-name").html("Name: " + response.results[0].name).hide().fadeIn(2000);
            
        },

        //If the website is unable to retrieve the URL API information then this error message will appear. 
        error: function(){
            console.log("hello");
            $("#display-error").fadeIn();
            $(".error-close").on("click", function(){
                $("#display-error").fadeOut();
            });
        }
    });
});
// When the button is clicked upon it will act as if it was refreshed and retrieve another random episode or the user. 
$("#get-episode").on("click", function () {
    $.ajax({
        
        url: "https://rickandmortyapi.com/api/episode/",
        
        dataType: "json",

        //Upon the Success of retrieving the URL the episode along with the name of it will fade in apear on the screen randomly.
        success: function (response) {
            response.results.sort(function() { return 0.5 - Math.random() });
            $(".episode").html("Episode: " + response.results[0].episode).hide().fadeIn(2000);
            $(".episode-name").html("Name: " + response.results[0].name).hide().fadeIn(2000);
            
        },

        //If the website is unable to retrieve the URL API information then this error message will appear. 
        error: function(){
            console.log("hello");
            $("#display-error").fadeIn();
            $(".error-close").on("click", function(){
                $("#display-error").fadeOut();
            });
        }
    });
});
