const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "vote",
    category: "Information",
    aliases: ["vo", "up"],
    cooldown: 0,
    usage: "vote",
    description: "Shows the website of dumZ",
    run: async (client, message, args, user, text, prefix) => {
      try{
        let string = `**__VOTE DumZ__**
        ***VOTE dumZ Bot On!**
         ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂`
         
      
        let embed = new MessageEmbed()
        .setTitle("**DumZ Bot**")
        .setURL("https://dumzbot.weebly.com")
        .setImage('https://i.imgur.com/ISLV4zu.jpg')
        .setThumbnail('https://i.imgur.com/WMdop80.gif')
        .setDescription(`**VOTE US ON**
        ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        **Vcodez.xyz** [vote here](https://vcodez.xyz/bot/875724141607665714/vote)
        ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        **Top.gg**[vote here](https://top.gg/bot/875724141607665714/vote)
        
        ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        **disbots**
        coming soon
        **[SUPPORT SERVER](https://dsc.gg/dumz)**`)
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
