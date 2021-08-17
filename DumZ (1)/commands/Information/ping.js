const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "ping",
    category: "Information",
    aliases: ["latency"],
    cooldown: 2,
    usage: "ping",
    description: "Gives you information on how fast the Bot can respond to you",
    run: async (client, message, args, user, text, prefix) => {
    try{
      let oldate = new Date().getMilliseconds()
      message.channel.send(new MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`🏓 Pinging My Self, Please wait MrPogger.....`)
      ).then(msg=>{
        let newtime = new Date().getMilliseconds() - oldate;
        msg.edit(new MessageEmbed()
          .setColor("#1C1E1E")
          .setTitle("**DumZ current ping**")
          .setURL("")
          .setFooter("By ViveLaSam#0001,Powered By: Https://www.milrato.eu")
          .setDescription(`
          ▰▰▰▰▰▰▰▰▰▰▰▰
        
          <a:595750ac08874111b9dd8e2eb01b9781:876091457797242932>**Bot Ping** ${client.ws.ping}ms
          
          ▰▰▰▰▰▰▰▰▰▰▰▰\n\n
          
          <a:9717ed45d4924294a66d6264e1d59ca7:876091456828358666> **Host Ping:** ${client.ws.ping + newtime}ms\n\n
          
          ▰▰▰▰▰▰▰▰▰▰▰▰

         <:8484greensmalldot:876091455893041173>**Latency** ${newtime}ms \n\n 
         
         ▰▰▰▰▰▰▰▰▰▰▰▰
         
         **[Check Bot's Uptime](https://bit.ly/3iLRQuU)**`)
          .setThumbnail("https://i.imgur.com/WMdop80.gif")
        );
      })
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.black)
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
