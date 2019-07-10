export default class Utils{
    
    static arrayToLinks = (array) => {
        return array.map(item => {
            return `<a href="#" class="hover:underline">${item}</a>`
        })
    }
}