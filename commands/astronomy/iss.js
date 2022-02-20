module.exports ={
  name: "iss",
  code: `
  
  $title[1;Iss live View]
  $addField[1;visibility;$jsonRequest[https://api.wheretheiss.at/v1/satellites/25544;visibility;error];yes]
  $addField[1;velocity;\`\`$roundTenth[$jsonRequest[https://api.wheretheiss.at/v1/satellites/25544;velocity;error];2] km/hr\`\`;yes]
  $addField[1;altitude;\`\`$roundTenth[$jsonRequest[https://api.wheretheiss.at/v1/satellites/25544;altitude;error];2] km\`\`;yes]
  $color[1;WHITE]
  $image[1;https://www.mapquestapi.com/staticmap/v5/map?key=fARXOTG6FtYvG9SWaJi6Mn4y0GN3D3pc&type=hyb&size=1400,800&locations=$get[a],$get[b]|marker-lg-FF0000-FFFFFF&includeRoadMetadata=true&scalebar=false&zoom=3&rand=-2122449774]
  

  $let[b;$jsonRequest[https://api.wheretheiss.at/v1/satellites/25544;longitude;error]]
  $let[a;$jsonRequest[https://api.wheretheiss.at/v1/satellites/25544;latitude;error]]
  `
}