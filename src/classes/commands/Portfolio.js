import Utils from '../Utils';
export default class Portfolio {

    static command = "portfolio"


    static action = () => {
        
        const projects = [
            'PyHost',
            'Ven'
        ];
        return Utils.arrayToLinks(projects).join(', ');
    }



}