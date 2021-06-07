const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const DIG = require("discord-image-generation");

module.exports = {
    name: "wanted",
    category: "Image",
    description: "Converts a user's in wanted meme !!",
    example: `${config.Prefix}wanted @wasted <$`,

    run: async (client, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(`${emoji.Error} Provide a valid user !!`)

        const avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });

        let img = await new DIG.Wanted().getImage(avatar, `$`);

        let attach = new Discord.MessageAttachment(img, "wanted.png");

        message.channel.send(attach)
    }
}