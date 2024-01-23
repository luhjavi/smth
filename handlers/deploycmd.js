const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const filePath = path.join(commandsPath, file);
	const command = require(filePath);
    if ('data' in comamnd && 'execute' in command) {
        commands.push(command.data.toJSON());
    }else{
        console.log(`[⚠] The command at ${filepath} is missing a required "data" or execute property.`)
    }
}

const rest = new REST().setToken(token);

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        const data = await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );
        
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    }catch (error) {
        console.error(error);
    }
})