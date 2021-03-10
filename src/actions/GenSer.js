import axios from "axios";


class GenSer{
    
    constructor () {

    }
    
    get = (url) => new Promise((resolve, reject) => {
        axios.get(url).then(res => {resolve(res.data);
        }).catch(err =>{
            reject(err);
        });
    });

    post = (url, data) =>new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {resolve(res.data);
        }).catch(err =>{
            reject(err);
        });
    });;
    
    delete = (url) => new Promise((resolve, reject) => {
        axios.delete(url).then(res => {resolve(res.data);
        }).catch(err =>{
            reject(err);
        });
    });
    
    put = (url, data) =>new Promise((resolve, reject) => {
        axios.put(url, data).then(res => {resolve(res.data);
        }).catch(err =>{
            reject(err);
        });
    });;

}

export default GenSer;