module.exports ={
  name: "volume",
  code: `
  
  
 $lavalinkExecute[volume;$message]
 volume change to \`\`$message\`\`
  $argsCheck[1;please give me the volume number]
  `
}