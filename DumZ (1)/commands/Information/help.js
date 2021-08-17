const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "help",
    category: "Information",
    aliases: ["h", "halp"],
    cooldown: 4,
    usage: "help",
    description: "Shows you Help for DumZ",
    run: async (client, message, args, user, text, prefix) => {
      try{
        let string = `:wave_tone2: Hello, Thanks for using our bot. :wave_tone2:
        ▰▰▰▰▰▰
        
        :o: Prefix: ${prefix}, 
        
        ▰▰▰▰▰▰

         Please use \`${prefix} commmands \`  for all the commands
         
        ▰▰▰▰▰▰
       
        DumZ Website: **https://dumzbot.weebly.com**`
         
      
        let embed = new MessageEmbed()
        .setTitle("DumZ bot help & Commands")
        .setURL("https://dumzbot.weebly.com/")
        .setThumbnail('https://i.imgur.com/WMdop80.gif')
        .setImage('https://i.imgur.com/lkwzGlH.gif')
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
