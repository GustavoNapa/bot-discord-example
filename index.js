const Discord = require('discord.js');
const config = require('./config.json');

const prefix = "!";

const client = new Discord.Client({ intents: [
  Discord.Intents.FLAGS.GUILDS, 
  Discord.Intents.FLAGS.GUILD_MESSAGES, 
  Discord.Intents.FLAGS.DIRECT_MESSAGES
] });

client.on('message', msg => {
  // Para não responder outros bots
  if (msg.author.bot) return;
  // Não responder se não tiver com o prefixo na mensagem
  if (!msg.content.startsWith(prefix)) return;

  // Recupera a mensagem sem o prefixo
  const commandBody = msg.content.slice(prefix.length);
  console.log("Corpo do comando: " + commandBody);
  // Cria um array com os argumentos
  const args = commandBody.split(' ');
  // Normaliza para minusculo para padronizar
  const command = args.shift().toLowerCase();

  if (command === "tudo bem?"){
    msg.reply("Sim, e com você?");
  }else if(command == "hello"){
    msg.reply("Relo oque mano?");
  }else if (command === "ping") {
    const timeTaken = Date.now() - msg.createdTimestamp;
    msg.reply(`Pong! Esta mensagem teve uma latência de ${timeTaken}ms.`);
  }else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    msg.reply(`A soma dos argumentos enviados é ${sum}!`);
  }

})

client.login(config.BOT_TOKEN);