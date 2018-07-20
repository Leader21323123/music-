const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`67N-SYSTEM `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
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

client.on("guildMemberAdd", member => {
  let words = [`Welcome ${member}
To Server ${member.guild.name}
`]
client.on('voiceStateUpdate', (Codes, ReBeL) => {
    let channel3 = ["467743925914828810"];
client.channels.get(channel3)
ReBeL.guild.member(ReBeL).addRole(ReBeL.guild.roles.find("name", "- 67N KINGDOM  ◆")).then(r => {
      });
console.log("Done");
});
  client.on('voiceStateUpdate', (codes, ReBeL) => {
if(ReBeL.voiceChannelID !== "468129294149877760") return console.log("أيرور . ");
ReBeL.guild.createChannel(ReBeL.user.username , 'voice').then((rebeeel) =>{
    rebeeel.setParent("468154162102796299");
ReBeL.guild.members.get(ReBeL.id).setVoiceChannel(rebeeel.id).then((codess) =>{
  console.log("تــــــم .");
  let scan = setInterval(()=>{
  rebeeel.delete();
  }, 305);
});
});
});
  

client.login(process.env.BOT_TOKEN);
