module.exports ={
  name : "queue",
  code : `
  
  $title[1;Player's queue - $lavalinkExecute[queueLength;total]]
    $image[1;$lavalinkExecute[getthumbnail;$lavalinkExecute[songinfo;identifier];hqdefault]]
    $description[1;Now playing [$lavalinkExecute[songinfo;title]]($lavalinkExecute[songinfo;url])
$lavalinkExecute[queue]]
    $color[1;RANDOM]
  `
}