import axios from 'axios'

// URL du serveur
const API_ENDPOINT = '//localhost:9000'

export default {
  fetchAll() {
    return axios.get(`${API_ENDPOINT}/collaborateurs`)
      .then(res => res.data)
      .then(res => {
        if (res.error == 1) {
          return Promise.reject(res);
        } else {
          return Promise.resolve(res);
        }
      });
  },

  fetchOne(id) {
    return axios.get(`${API_ENDPOINT}/collaborateur/${id}`)
      .then(res => res.data)
      .then(res => {
        if (res.error == 1) {
          return Promise.reject(res);
        } else {
          return Promise.resolve(res);
        }
      });
  },

  remove(user) {
    return axios.delete(`${API_ENDPOINT}/collaborateur/${user.id}`)
      .then(res => res.data)
      .then(res => {
        if (res.error == 1) {
          return Promise.reject(res);
        } else {
          return Promise.resolve(res);
        }
      });
  },

  create(user) {
    return axios.post(`${API_ENDPOINT}/collaborateur`, user)
      .then(res => res.data)
      .then(res => {
        if (res.error == 1) {
          return Promise.reject(res);
        } else {
          return Promise.resolve(res);
        }
      });
  },

  update(user) {
    return axios.put(`${API_ENDPOINT}/collaborateur/` + user.id, user)
      .then(res => res.data)
      .then(res => {
        if (res.error == 1) {
          return Promise.reject(res);
        } else {
          return Promise.resolve(res);
        }
      });
  }
}
