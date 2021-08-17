const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { paginationEmbed } = require("../../handlers/functions");
module.exports = {
    name: "aliases",
    category: "Information",
    aliases: ["alias", "ali"],
    cooldown: 4,
    usage: "aliases",
    description: "Shows all available Aliaes for all Commands",
    run: async (client, message, args, user, text, prefix) => {
      try{
       
        //SONG CMD
let string1 = `\`\`\`fix
${prefix} disconnect -- dc, leave, dis
${prefix} forward    -- fwd
${prefix} grab       -- save, yoink
${prefix} loop       -- repeat
${prefix} lyrics     -- l, ly
${prefix} nowplaying -- np
${prefix} pause      -- stop
${prefix} play       -- p
${prefix} playskip   -- ps, pskip, playnow, pn
${prefix} playtop    -- ptop, pt
${prefix} replay     -- Resets the progress of the current song
${prefix} resume     -- continue, re, res
${prefix} rewind     -- rwd
${prefix} search     -- find
${prefix} seek       -- 
${prefix} skip       -- next, s
${prefix} soundcloud -- sc
\`\`\``
//QUEUE CMD
let string2 = `\`\`\`fix
${prefix} clear      -- clearqueue, clearqu, clearq, cl
${prefix} loopqueue  -- loopqu, loopq, qloop, lq, queueloop
${prefix} shuffle    -- random, mix
\`\`\``
//Information CMD 
let string3 = `\`\`\`fix
${prefix} commands   -- cmds, cmd
${prefix} aliases    -- alias, ali
${prefix} help       -- h, halp
${prefix} ping       -- latency
${prefix} uptime     -- 
\`\`\``     
        let pages = [
          {"title": "SONG COMMANDS - ALIASES", "msg": string1},
          {"title": "QUEUE COMMANDS - ALIASES", "msg": string2},
          {"title": "INFORMATION COMMANDS - ALIASES", "msg": string3},
        ]
        paginationEmbed(message, pages, ['⏪', '⏩', "⏹"], 60000)

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
  * Please mention Him / Milrato Development, when using this Code${prefix} 
  * @INFO
*/
