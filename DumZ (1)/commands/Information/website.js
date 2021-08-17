const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "website",
    category: "Information",
    aliases: ["w", "web"],
    cooldown: 10,
    usage: "website",
    description: "Shows the website of dumZ",
    run: async (client, message, args, user, text, prefix) => {
      try{
        let string = `:wave_tone2:***《Hello, Thanks for using our bot.》*** :wave_tone2:
         ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        
        ➠ **My Prefix is** \`${prefix} \` 
         ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        
         :call_me: **want to see my commands?**
         visit, [DumZ Website](https://dumzbot.weebly.com)
         **Join our [Support Server](https://dsc.gg/dumz)**
         ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂`
         
      
        let embed = new MessageEmbed()
        .setTitle("DumZ Bot Website")
        .setURL("https://dumzbot.weebly.com")
        .setImage('https://i.imgur.com/YYAkesP.gif')
        .setDescription(string)
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
