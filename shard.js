const Discord = require('discord.js')
const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./space-giveaway.js", {
    token: '',
    totalShards: 2,
});
const webhook_id = ''
const webhook_token = ''
manager.on('shardCreate', async(i) => {
console.log(`${Number(i.id)+1} / 2 Id' li Shard kullanıma hazır!`)
const shardlog = new Discord.WebhookClient({id: webhook_id, token: webhook_token});
const embed = new Discord.MessageEmbed() 
.setDescription(`<:sgs_tick:921392926683197460> **${Number(i.id)+1} / 2** Id' li Shard kullanıma hazır!`)
.setColor('GREEN')
shardlog.send({embeds: [embed]});
})
manager.on('shardDisconnect', async(i) => {
const shardlog = new Discord.WebhookClient({id: webhook_id, token: webhook_token});
const embed = new Discord.MessageEmbed() 
.setDescription(`<:sgs_error:921392927568195645> **${Number(i.id)+1} / 2** Id' li Shard' ın bağlantısı kesildi!`)
.setColor('RED')
shardlog.send({embeds: [embed]});
})
manager.on('shardReconnecting', async(i) => {
const shardlog = new Discord.WebhookClient({id: webhook_id, token: webhook_token});
const embed = new Discord.MessageEmbed() 
.setDescription(`<:sgs_tick:921392926683197460> **${Number(i.id)+1} / 2** Id' li Shard yeniden bağlandı!`)
.setColor('#FF7F00')
shardlog.send({embeds: [embed]});
})
manager.spawn();
