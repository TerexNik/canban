import React,{Component} from 'react'
import createRequest from "../../HttpClient";
import UserContainer from "./UserContainer";
let user = {"results":[{"gender":"female","name":{"title":"miss","first":"filippa","last":"johansen"},"location":{"street":"6484 byvænget","city":"hirtsals","state":"syddanmark","postcode":47187},"email":"filippa.johansen@example.com","login":{"username":"yellowelephant849","password":"litle","salt":"wN4MNJ9M","md5":"bd5da627f1bc299909088f68a477e9dd","sha1":"012a1d47a85903d02c9a2d0b3a8f1e61d4c70705","sha256":"ee01f49af58d190cee178500e8ca8412032228488f30af7a0462272ed672a352"},"dob":"1980-09-05 12:08:37","registered":"2016-07-12 22:16:51","phone":"69993032","cell":"19179135","id":{"name":"CPR","value":"788390-7002"},"picture":{"large":"https://randomuser.me/api/portraits/women/40.jpg","medium":"https://randomuser.me/api/portraits/med/women/40.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/40.jpg"},"nat":"DK"}],"info":{"seed":"dc63027e1085c450","results":1,"page":1,"version":"1.1"}}

function getUserInfo() {
    createRequest('https://randomuser.me/api/', response => parseRequest(JSON.parse(response)))
};

function parseRequest(response) {
    console.log('Response user object');
    console.log(response.results[0]);
    return response.results[0];
};

class User extends Component {
    render() {
        return (
            <UserContainer user={getUserInfo()}/>
        )
    }
}

export default User;