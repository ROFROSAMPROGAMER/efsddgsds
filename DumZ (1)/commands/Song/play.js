const { MessageEmbed } = require(`discord.js`);
const playermanager = require(`../../handlers/lavalink/playermanager`);
module.exports = {
    name: `play`,
    category: `Song`,
    aliases: [`p`],
    description: `Plays a song from youtube`,
    usage: `play <link/query>`,
    run: async (client, message, args, cmduser, text, prefix) => {
      const { channel } = message.member.voice;
      if (!channel) return message.channel.send(`💡*Join a voice channel* 
      \` please make sure to join a voice channel before running this command\``);
      //send error if member is Deafed
      if(message.member.voice.selfDeaf) return message.channel.send(`:scream: **you can't run this command if you are Deafened, Please Undeafen yourself to run the command.**`);
      const botchannel = message.guild.me.voice.channel;
      //if no args added return error message if allowed to send an embed
      if (!args[0]) {
        let string = `${prefix}play <link/query>`
        let embed = new MessageEmbed()
        .setTitle("**:scream: Please give me a link of the music you want to play or name it.**")
        .setDescription(string)
        .setColor("#ff0000")
        if(message.guild.me.hasPermission("EMBED_LINKS")){
          message.channel.send(embed)
        }else{
          message.channel.send("**:x: Invalid usage**\n"+string)
        }
        return;
      }
      ///get the player
      const player = client.manager.players.get(message.guild.id);
      //if user is not in the right channel as bot, then return error
      if(player && channel.id !== player.voiceChannel)
        return message.channel.send(`**💡__Please join a voice channel and run command again, Thank you.__**`);
      //if bot connected bot not with the lavalink player then try to delete the player
      if(player && botchannel && channel.id !== botchannel.id){
        player.destroy();
      }
      //IF YOUTUBE SEND INFO WITH YOUTUBE
      if(message.content.includes("youtu")){
        //send searching
        message.channel.send(`🤟🏼**Searching your music** 🤟🏼 \`${args.join(" ")}\``)
        //play the song from our playermanager
        playermanager(client, message, args, `play:youtube`);
      //IF SPOTIFY SEARCH SEND INFO WITH SPOTIFY
      } else if(message.content.includes("spotify")){
        //send searching
        message.channel.send(`🤟🏼**Searching your pog music** 🤟🏼 \`${args.join(" ")}\``)
        //play the song from our playermanager
        playermanager(client, message, args, `play:youtube`);
      //IF SOUNDCLOUD SEARCH SEND INFO WITH SOUNDCLOUD
      } else if(message.content.includes("soundcloud")){
        //send searching
        message.channel.send(`🤟🏼 **Searching your op music** 🤟🏼 \`${args.join(" ")}\``)
        //play the song from our playermanager
        playermanager(client, message, args, `play:soundcloud`);
      //ELSE SEND RYTHM INFO
    } else if(message.content.includes("http")){
      //send searching
      message.channel.send(`🤟🏼 **Searching** 🤟🏼 \`${args.join(" ")}\``)
      //play the song from our playermanager
      playermanager(client, message, args, `play:youtube`);
    } else {
      //send searching
      message.channel.send(`🤟🏼**Searching** 🤟🏼\`${args.join(" ")}\``)
      //play the song from our playermanager
      playermanager(client, message, args, `play:youtube`);
    }
  }
};
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention Him / Milrato Development, when using this Code!
  * @INFO
*/
