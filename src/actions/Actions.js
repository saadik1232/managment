import axios from 'axios'
import { Url } from './Url';

class Actions {   
    getResponders =  () =>{
    let url = Url+"responder"
    let data=[];
    //console.log(url)
    axios.get(url).then((response) => {
             //console.log("this is respomse",response)
            data = response.data.result.data;
            return data;
             //console.log("in fucntion",data);
        })
}

}

let action = new Actions()
export default action;