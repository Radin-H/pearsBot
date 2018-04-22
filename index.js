const Discord = require("discord.js");

const TOKEN = "NDM3NDc2NzcyODU0ODkwNTA3.Db2opw.qWyrtGgBgRRGLcSMkSK1cKjXfp4";
const PREFIX = "!";

var bot = new Discord.Client();

bot.on("message", function(message){
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()){

        case "ban":
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("no permission.")
        if(!args[1]){
            message.channel.send("Please provide a name.");
            return;
          }
        const member = message.mentions.members.first();
        if(!member) return message.reply('Invalid Usage.');
        member.ban({days: args[1] || null});
        break;

        case "kick":
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("no permission.")
        if(!args[1]){
            message.channel.send("Please provide a name.");
            return;
          }
        const member = message.mentions.members.first();
        if(!member) return message.reply('Invalid Usage.');
        member.kick();
        break;

        case "help":
        const member = message.mentions.members.first();
        if(!member) return message.reply('Invalid Usage.');
        message.author.send("!help \n !ban (user) (time) \n !kick (user)");
        break;
    }
});
        bot.login(TOKEN);