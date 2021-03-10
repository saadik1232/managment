import GenSer from './GenSer';
import { Url } from './Url';



class ResSer extends GenSer {
    constructor(){
        super();
    }

    getResponders = () => this.get(Url+"responder");
    getPanics = ()     => this.get(Url+"panic");
}

let responderser = new ResSer();
export default responderser;