import axios from 'axios';

class ServiceUser {
    getAllUsers() {
        return axios.get("http://localhost:8080/getUsers");
    }

    getAllGroups() {
        return axios.get("http://localhost:8080/getGroups");
    }
}

export default new ServiceUser();
