import { runInThisContext } from 'vm';

export default class CommandRouter{

    commands = {}

    constructor(){
        this.registerCommands();
    }


    run(command){
        if(command in this.commands){
            return this.commands[command].action(this);
        } else {
            return `command '${command}' not found`;
        }
    }


    registerCommands = async () => {
        const files = require.context("./commands", true, /\.js$/i);
        files.keys()
            .map(async key => {
                const fileName = key.split("/").pop().split(".")[0];
                import(`./commands/${fileName}`).then(module => {
                    let {default: cmdFile} = module;
                    this.commands[cmdFile.command] = cmdFile
                });
            });
    }

  
}