import Utils from '../Utils';

export default class Social {

    static command = "social"
    static description = "Where you can find me"


    static action = () => {
        
        let output = "<br>Twitter: <a href='https://twitter.com/allmanajD' class='hover:underline'>@allmanajD</a><br>";
        output += "GitHub: <a href='https://github.com/allmanaj' class='hover:underline'>github.com/allmanaj</a><br>";
        output += "LinkedIn: <a href='https://www.linkedin.com/in/angus-allman-2a8a08127/' class='hover:underline'>linkedin.com/in/angus-allman-2a8a08127/</a><br><br>";
        return output;
    }



}