module.exports ={
  name: "weather",
  code: `
  $color[1;WHITE]
  $thumbnail[1;$jsonRequest[https://weatherdbi.herokuapp.com/data/weather/$message;currentConditions.iconURL]]
 $title[1;$jsonRequest[https://api.openweathermap.org/data/2.5/weather?q=$message&units=metric&appid=e382c3f3dded6fe7826bb9e0b661b8a8;name;err] - $jsonRequest[https://api.openweathermap.org/data/2.5/weather?q=$message&units=metric&appid=e382c3f3dded6fe7826bb9e0b661b8a8;sys.country;err]]
 $addField[1;FeelS Like;$jsonRequest[https://api.openweathermap.org/data/2.5/weather?q=$message&units=metric&appid=e382c3f3dded6fe7826bb9e0b661b8a8;main.feels_like;err] °C;yes]
 $addField[1;Cloudiness;$jsonRequest[https://api.openweathermap.org/data/2.5/weather?q=$message&units=metric&appid=e382c3f3dded6fe7826bb9e0b661b8a8;clouds.all;err]%;yes]
 $addField[1;humidity;$jsonRequest[https://api.openweathermap.org/data/2.5/weather?q=$message&units=metric&appid=e382c3f3dded6fe7826bb9e0b661b8a8;main.humidity;err]%;yes]
 $addField[1;Visibility;$divide[$jsonRequest[https://api.openweathermap.org/data/2.5/weather?q=$message&units=metric&appid=e382c3f3dded6fe7826bb9e0b661b8a8;visibility;err];1000] km;yes]
 $addField[1;Skies;$jsonRequest[https://api.openweathermap.org/data/2.5/weather?q=$message&units=metric&appid=e382c3f3dded6fe7826bb9e0b661b8a8;weather[0].main;err];yes]
 $addField[1;Wind Speed;$jsonRequest[https://api.openweathermap.org/data/2.5/weather?q=$message&units=metric&appid=e382c3f3dded6fe7826bb9e0b661b8a8;wind.speed]m/s;yes]
  $addField[1;Longitude;$jsonRequest[https://api.openweathermap.org/data/2.5/weather?q=$message&units=metric&appid=e382c3f3dded6fe7826bb9e0b661b8a8;coord.lon;err];yes]
 $addField[1;Latitude;$jsonRequest[https://api.openweathermap.org/data/2.5/weather?q=$message&units=metric&appid=e382c3f3dded6fe7826bb9e0b661b8a8;coord.lat;err];yes]
 $addField[1;Temperature;$jsonRequest[https://api.openweathermap.org/data/2.5/weather?q=$message&units=metric&appid=e382c3f3dded6fe7826bb9e0b661b8a8;main.temp;err] °C;yes]
  `
}

