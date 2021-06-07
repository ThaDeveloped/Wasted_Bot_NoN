const config = require('../config.json');

module.exports = async (client) => {
        
    process.on('unhandledRejection', err => console.log(err))
    console.log(`${client.user.tag} is now conneted to Discord !!`)
    client.user.setActivity(`Wasted | ${config.Prefix}help`, {type: "PLAYING"}, {status: "idle"})
    
}
