const aoijs = require("aoi.js")
const keepAlive = require("./server");
keepAlive()
const bot = new aoijs.Bot({
token: process.env.TOKEN,
prefix: "*",
intents: "all"
})

const Lavalink = new aoijs.Lavalink(bot);
Lavalink.addNode({
 url: "lava.link:80",
 password: "neo",
 name: "aoi.js",
 secure: false,
 })
bot.onMessage()


bot.command({
name: "ping",
code: `Pong! $pingms`
})


bot.readyCommand({
    channel: "943337416956198973",
    code: `Ready on $userTag[$clientID]`
})

const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")


 bot.loopCommand({
code: `

$editMessage[944783093431169044;{newEmbed:
{title:Iss live View}
{field:visibility:$jsonRequest[https://api.wheretheiss.at/v1/satellites/25544;visibility;error]:yes}
{field:velocity:\`\`$roundTenth[$jsonRequest[https://api.wheretheiss.at/v1/satellites/25544;velocity;error];2] km/hr\`\`:yes}
{field:altitude:\`\`$roundTenth[$jsonRequest[https://api.wheretheiss.at/v1/satellites/25544;altitude;error];2] km\`\`:yes}
{color:#FFFFFF}
{image:https://www.mapquestapi.com/staticmap/v5/map?key=fARXOTG6FtYvG9SWaJi6Mn4y0GN3D3pc&type=hyb&size=1400,800&locations=$get[a],$get[b]|marker-lg-FF0000-FFFFFF&includeRoadMetadata=true&scalebar=false&zoom=3&rand=-2122449774}

  $let[b;$jsonRequest[https://api.wheretheiss.at/v1/satellites/25544;longitude;error]]
  $let[a;$jsonRequest[https://api.wheretheiss.at/v1/satellites/25544;latitude;error]]

`,
channel: "944782347478388787",
executeOnStartup: true,
every: 30000
})
