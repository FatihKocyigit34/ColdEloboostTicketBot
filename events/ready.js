const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")
const config = require("../config.js")
let prefix = config.prefix
client.on("ready", () => {
client.user.setActivity(`${prefix}help`)

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`Toplam ${files.length} You Have Command!`);
files.forEach(f => {
let props = require(`../commands/${f}`);
    
console.log(`${props.help.name} Named Command Loaded!`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});
