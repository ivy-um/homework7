function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector("#forecast").style.display = "block";

    //Set default location if one isn't provided
    let location = document.querySelector("#location").value || "Ann Arbor, US";

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format = document.querySelectorAll("input[name=temp]:checked")[0];
    if (format) {
        format = format.value;
    } else {
        format = "imperial";
    }

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query = 'https://api.openweathermap.org/data/2.5/weather?q='+location+'&units='+format+'&appid=936e4de0cd28fde44e7c4e2f5f773f9f';
    //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=936e4de0cd28fde44e7c4e2f5f773f9f
    //api.openweathermap.org/data/2.5/weather?q=London&units=imperial
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, highs and lows, 
    //the image, etc.

    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");
    // Your code here.

    //<img src="http://openweathermap.org/img/wn/01n@2x.png" width="50" height="50">

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
	    //Use json to update the values.  I would 
	    //print it to the console
        console.log(JSON.stringify(json));
        //console.log(json.weather[0].main)
        //console.log(json.weather[0].description)
        //console.log(json.weather[0].icon)
        loc.innerHTML = json.name;
        temp.innerHTML = json.main.temp + " with " + json.weather[0].description;
        tempImg.src ="http://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png";
        tempImg.alt = json.weather[0].description;
        tempImg.title = "weather icon";

    });
}
