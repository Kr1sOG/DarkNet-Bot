const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js')
const bot = new Discord.Client();
const fetch = require('node-fetch')

bot.on('ready', async () => console.log(`${bot.user.tag} is online!`))

bot.on('message', async message => {
    if(message.author.bot) return;
  
  if(message.channel.id === "745542265409241198"){ //dark chat channelid
message.channel.send(message.content, message.attachments.first())
message.delete({ timeout: 3 })
}
if(message.channel.id === "745542265409241198"){ //dark chat channelid
  let channel = message.guild.channels.cache.get("802606398100865025") //dark chat logs channelid
  if(!message.attachments.first()){ 
    let embed = new MessageEmbed()
    .setTitle("Dark Logs")
    .addField("Egrapse o:", `${message.author.tag}`)
  .addField("Mhnuma:", `${message.content}`)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter("Dark Chat System Edited By Kr1z")
  channel.send(embed)
  }
  
  if(!message.content){
    let channel2 = message.guild.channels.cache.get("802606398100865025") //dark chat logs channelid
    let embed2 = new MessageEmbed()
    .setTitle("Dark Logs")
  .addField("Egrapse o:", `${message.author.tag}`)
  .addField("Mhnuma:", `Den egrapse tipota.Apla esteile eikona.`)
  .setImage(message.attachments.first().proxyURL)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter("Dark Chat System Edited By Kr1z")
    channel2.send(embed2)
  }
  else if(message.content, message.attachments.first()){
    let channel3 = message.guild.channels.cache.get("802606398100865025") //dark chat logs channelid
    let embed3 = new MessageEmbed()
    .setTitle("Dark Logs")
  .addField("Egrapse o:", `${message.author.tag}`)
  .addField("Mhnuma:", `${message.content}`)
  .setImage(message.attachments.first().proxyURL)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter("Dark Chat System Edited By Kr1z")
    channel3.send(embed3)
  }
} 
    });
    
setInterval(async () => {
  await fetch('https://Kr1s-Bot.kr1sdv.repl.co').then(console.log('Pinged!'))
}, 240000)
    
    
bot.login("ODEwNjczNzk4OTY1MTAwNTY0.YCnEzw.PEcn2ORWmXL0cP45L09PW3nyO94")
