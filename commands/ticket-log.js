const Discord = require('discord.js');
  const db = require("croxydb")

  exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **To use this command "\`Executive\`" You must have the authority.**`);
    let log = message.mentions.channels.first()
    if(!log) return message.reply({content: "> Üzgünüm Bir Kanal Belirtmen Gerekiyor."})
    
    
    
  message.reply("Sorry You Need To Specify A Channel.")
  
    db.set(`log_${message.guild.id}`, log.id)
    
  
  
  
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ticket-log"
};

  