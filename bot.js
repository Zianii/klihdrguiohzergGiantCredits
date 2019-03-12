const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'N'

client.on('ready', () => {
  client.user.setStatus("dnd")
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`Start ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
	
});






const aprefix = "^";
const dev = ['283580465862934539','283580465862934539'];
client.on('message', message => {
    var arg = message.content.split(` `).slice(1).join(' ');
      if (!dev.includes(message.author.id)) return;
     
  if (message.content.startsWith(aprefix + 'setg')) {
    client.user.setGame(arg);
      message.channel.send(``)
  } else
  if (message.content.startsWith(aprefix + 'setw')) {
  client.user.setActivity(arg, {type:'WATCHING'});
      message.channel.send(``)
  } else
  if (message.content.startsWith(aprefix + 'setl')) {
  client.user.setActivity(arg , {type:'LISTENING'});
      message.channel.send(``)
  } else
  if (message.content.startsWith(aprefix + 'sets')){
    client.user.setGame(arg, "https://www.twitch.tv/bot");
      message.channel.send(``)
  } else
  if (message.content.startsWith(aprefix + 'setname')) { //لتغير اسم البوت
  client.user.setUsername(arg).then
      message.channel.send(``)
} else
 
if (message.content.startsWith(aprefix + 'setavatar')) { //لتغير صورة البوت
  client.user.setAvatar(arg);
    message.channel.send(``);
} else
 
if (message.content.startsWith(aprefix + 'setonline')) { //لتغير حالت البوت لي  online
client.user.setStatus("online")
    message.channel.send(``);
} else
   
if (message.content.startsWith(aprefix + 'setdnd')) { //~~~ dnd
client.user.setStatus("dnd")
    message.channel.send(``);
} else
   
if (message.content.startsWith(aprefix + 'setidle')) { //~~~ idle
client.user.setStatus("idle")
    message.channel.send(``);
} else
 
if (message.content.startsWith(aprefix + 'setoffline')) { //~~~ offline
client.user.setStatus("offline")
    message.channel.send(``);
}
});
