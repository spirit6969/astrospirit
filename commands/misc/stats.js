module.exports = {
 name: "stats",
 code: `
 $color[1;WHITE]
 $title[1;Botinfo ($username[$clientID])]
 $thumbnail[1;$userAvatar[$clientID]]
 $addField[1;CPU Usage; $cpu/100;yes]
 $addField[1;Uptime;$uptime;yes]
 $addField[1;Commands; $commandsCount;yes]
 $addField[1;Ping; $ping ms;yes]
 $addField[1;Servers;$serverCount;yes]
 $addField[1;Created;$creationDate[$clientID];yes]
 $addField[1;Developer;$userTag[$botOwnerID];yes]
 $addField[1;Users;$allMembersCount;yes]
 
 `
}