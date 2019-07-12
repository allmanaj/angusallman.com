import Utils from '../Utils';
export default class Portfolio {

    static command = "portfolio"
    static description = "Print portfolio"


    static action = () => {
        
        const projects = [
            'project:pyhost',
            'project:ven',
        ];
        let output = "<br>Please type one of the following commands for more information:<br>";
        output += "--------------------------------------------<br>";
        output += Utils.arrayToLinks(projects).join('<br>');
        output += '<br>';
        return output;
    }



}