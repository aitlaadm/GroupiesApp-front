import axios from 'axios';

class HomeService {
    addUser(user) {
        return axios.post("http://localhost:8080/join", user);
    }
}

export default new HomeService();
