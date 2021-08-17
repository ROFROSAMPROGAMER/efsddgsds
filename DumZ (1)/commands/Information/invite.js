const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "invite",
    category: "Information",
    aliases: ["i", "inv","in"],
    cooldown: 10,
    usage: "invite",
    description: "Give INVITE link for DumZ",
    run: async (client, message, args, user, text, prefix) => {
      try{
        let string = ``
         
      
        let embed = new MessageEmbed()
        .setTitle("**__DUMZ BOT__**")
        .setImage('https://i.imgur.com/lkwzGlH.gif')
        .setDescription("**[INVITE ME](https://discord.com/oauth2/authorize?client_id=875724141607665714&scope=bot&permissions=36703304) <--- ENJOY THE BEST MUSIC! <a:595750ac08874111b9dd8e2eb01b9781:876091457797242932>**")
        .setFooter('A bot by ViveLaSam, Powered By https://milrato.eu', 'https://media.discordapp.net/attachments/875725781198860290/875725808323403787/61cdd3b39b63a04f25f0d01b5dab54a2.gif?width=528&height=396');
        if(message.guild.me.permissionsIn(message.channel).has("EMBED_LINKS")){
          message.reply(embed)
        }else{
          message.reply(string)
        }
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention Him / Milrato Development, when using this Code!
  * @INFO
*/
