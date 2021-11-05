let weather ={
    "apikey": "dadc0affd11f0a808bf2fb3654d57a94",
    fetchWeather: function(city){
        fetch("http://api.openweathermap.org/data/2.5/weather?q="
         + city + 
         "&units=metric&appid="
         + this.apikey)
        .then((response) => response.json() )
        .then((data) => this.displayWeather(data));

    },
    displayWeather : function (data){
        const  { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "C"
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText  = "Wind:" + speed + "Km/h"
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click"  , ()=>{
        weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup" , function(event){
        if(event.key == "Enter"){
            weather.search();
        }
})