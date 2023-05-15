const Discord = require('discord.js');
  const db = require("croxydb")

  exports.run = async (client, button, args) => {
    if(!button.member.permissions.has("ADMINISTRATOR")) return button.channel.send("To use this command **Executive** You need to have the authority!")


      let role = button.mentions.roles.first();
      if (!role)
        return button.reply("**You Need to Tag a Support Team Role!**").catch(() => {})
     
  
          button.react("✅")


.then(async (cs) => {
  db.set("support" + button.guild.id, {
    rolID: role.id
  });
    }).catch(() => {})
  
  
  
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ticket-manager"
};

  