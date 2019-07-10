import Utils from '../Utils';
export default class Pyhost {

    static command = "project:pyhost"
    static description = "Show information about my project Pyhost"


    static action = () => {
        
            return '<span class="long-text">Pyhost is a server provisioning tool I built with the express aim of assisting people with deployment of Django apps. You can find more information about it here: <a href="https://pyhost.io/" class="hover:underline text-terminal" target="_blank">https://pyhost.io/</a></span>'
    }



}