module.exports ={
  name: "apod",
  code: `
  $title[1;Apod For Today]
  $image[1;$jsonRequest[https://api.nasa.gov/planetary/apod?api_key=DkDMAyt14nikD8WXkrClwXUu5JxmORb2Y1aHLsOh;hdurl]]
  $color[1;WHITE]
  $footer[1;Powered By NASA API;https://cdn.discordapp.com/emojis/943341231931527198.webp?size=96&quality=lossless]
  
  `
}