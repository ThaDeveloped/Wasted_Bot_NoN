const config = require('../../config.json');
const Discord = require("discord.js");


module.exports = {
    name: "policy",
    category: "Info",
    example: `${config.Prefix}policy`,
    aliases: ["privacypolicy"],

    run: async (client, message, args) => {

        const embed = new Discord.MessageEmbed()

        .setTitle('__Our Policy__')
        .setDescription(`\`\`\` use for halal purposes \`\`\`\n\n[Add It](${config.Invite}) | [Join Server](${config.Server})`)
        .setFooter(`Requested by ${message.author.username}`,  message.author.displayAvatarURL({ dynamic: true }))
        .setColor(message.guild.me.displayHexColor)
        .setTimestamp()
        
        message.channel.send(embed) 
    }
}
