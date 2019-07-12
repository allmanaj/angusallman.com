import Utils from '../Utils';
export default class Portfolio {

    static command = "stack"
    static description = "Display information about technologies used"


    static action = () => {
        
        const tech = [
            'HTML',
            'CSS',
            'Vanilla JavaScript',
            'Laravel',
            'Vue',
            'React',
            'React Native',
            'Tailwind CSS',
            'Bootstrap 4',
            'MySQL'
        ];
        let output = '<br><span class="long-text">The following items are technologies I have professional experience in working with:<br></span>';
        output += "--------------------------------------------<br>";
        output += Utils.arrayToLinks(tech).join('<br>');
        output += '<br>';
        return output;
    }



}