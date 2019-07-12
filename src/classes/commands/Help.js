import Utils from '../Utils';
export default class Help {

    static command = "help"
    static description = "Print available commands"

    static action = (router) => {
        
        return Object.keys(router.commands).sort().map(key => {
            return `<br>${router.commands[key].command}  ----  ${router.commands[key].description}`
        }).join('') + '<br><br>';
    }



}