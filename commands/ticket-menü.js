const {ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle} = require('discord.js')
const db = require("croxydb")
const config = require("../config.js")
const prefix = config.prefix
exports.run = async (client, message, args) => {
	let tit = message.content.slice(prefix.length + 'create-ticket'.length);
	if(!tit.includes("+")) return message.reply("!create-ticket Button Text + Embed Text")
        let tit2 = tit.split('+');
 
	
  let hm = await db.get("support"+ message.guild.id)
  if(!hm) return message.channel.send('You Cant See The Menu Without Setting Up A Support Role.')
  let hm2 = await db.get(`log_${message.guild.id}`)
  if (!hm2) return message.channel.send("You cannot see the menu without setting the ticket log.")
        const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
				.setLabel(`${tit2[0]}`)
				.setStyle(ButtonStyle.Primary)
				.setCustomId("ticket")
			)
			const embed = new EmbedBuilder()
			.setTitle("Cold Eloboost - Ticket Bot")
			.setDescription(`${tit2[1]}`)
			.setColor(0x0099ff)
		
        message.channel.send({embeds: [embed], components: [row]})
    }
	exports.conf = {
	  aliases: []
	};
	
	exports.help = {
	  name: "create-ticket"
	};
	


