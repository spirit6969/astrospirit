module.exports ={
  name: "planet",
  code: `
  
  
  $title[1;info]
  $color[1;WHITE]
  $addField[1;avgTemp;$jsonRequest[https://api.le-systeme-solaire.net/rest/bodies/$message;avgTemp;er]]
  $addField[1;gravity;$jsonRequest[https://api.le-systeme-solaire.net/rest/bodies/$message;gravity;er]]
 $addField[1;moons;$jsonRequest[https://api.le-systeme-solaire.net/rest/bodies/$message;moons;er]]
 $addField[1;density;$jsonRequest[https://api.le-systeme-solaire.net/rest/bodies/$message;density;er]]
 $addField[1;escape;$jsonRequest[https://api.le-systeme-solaire.net/rest/bodies/$message;escape;er]]
  
  
  
  $onlyIf[$checkContains[$message;earth;venus;mercury;mars;jupiter;saturn;uranus;neptune;pluto]==true;please enter a planet name]
  $argsCheck[1;please enter the planet name]
  `
}