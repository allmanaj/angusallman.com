import Utils from '../Utils';
export default class About {

    static command = "about"
    static description = "print a short 'about me' section"


    static action = () => {
        
        let output = "<br>About Me:<br>";
        output += "<span class='long-text'>I'm a full stack web developer based in London. I work with I'm lead Laravel devloper at a company called <a href='https://purrgroup.com'>Purr Group</a>";
        output += "<br>";
        output += "<br>";
        output += "I'm a self-taught programmer with a formal background in languages (German and Italian)</span><br><br>";
        return output;
    }



}