function gettingJSON(){
    //Display the forecast
    
    document.querySelector("#forecast").style.display = "block";

    //如果没有输入值的时候默认返回“Ann Arbor, US”的值
    let location = document.querySelector("#location").value || "Ann Arbor, US";

    // Your code here.
    console.log("Location is : " + location);

    //如果没有输入值的时候，默认选择华氏天气度数单位
    let unit = 'metric';

    const isHuashi = document.querySelector("#fahrenheit").checked;
    
    if (isHuashi) {
        unit = 'imperial';
    }

    //api引用查询在这里
    let query = 'https://api.openweathermap.org/data/2.5/weather?q='+location+'&units='+unit+'&appid=936e4de0cd28fde44e7c4e2f5f773f9f';
    //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=936e4de0cd28fde44e7c4e2f5f773f9f
    //api.openweathermap.org/data/2.5/weather?q=London&units=imperial

    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, highs and lows, 
    //the image, etc.

    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");


    //<img src="http://openweathermap.org/img/wn/01n@2x.png" width="50" height="50">

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console

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
