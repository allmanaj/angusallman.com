import Utils from '../Utils';
export default class Education {

    static command = "education"
    static description = "Print education Information"


    static action = () => {
        
        let output = "<br>University of Kent:<br>";
        output += "First Class Honours in German and Italian<br>";
        return output;
    }



}