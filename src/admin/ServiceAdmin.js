import axios from 'axios';

class ServiceAdmin {
  getAllUsers() {
    return axios.get("http://localhost:8080/getUsers");
  }

  getAllGroups() {
    return axios.get("http://localhost:8080/getGroups");
  }

  last_min() {
    return axios.post("http://localhost:8080/createGroups", "last_min");
  }

  last_max() {
    return axios.post("http://localhost:8080/createGroups", "last_max");
  }

  cree_groups(nbGroup) {
    return axios.post("http://localhost:8080/createGroups", nbGroup);
  }
}

export default new ServiceAdmin();
