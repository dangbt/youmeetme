import axios from 'axios';

const baseURL = 'http://localhost:3000/api';
const defaultHeaders = [{ 'Content-Type': 'javascript/json' }];
var _helper = {
    fetchGET: function(reqURL, headers) {
      return axios({
        method: 'GET',
        url: baseURL + reqURL,
        headers: headers || defaultHeaders,
        withCredentials: true
      })
      .then((response) => {
        return {
          data: response.data,
          status: response.status
        }
      })
      .catch((error) => {
        if(error.response) {
          return {
            data: error.response.data,
            status: error.response.status
          }
        }
        else {
          console.log(error);
          return null;
        }
      })
    },
    fetchAPI: function(reqURL, dataToBeSent, headers,type) {
      return axios({
        method: type || "POST",
        url: baseURL + reqURL,
        heaers: headers || defaultHeaders,
        data: dataToBeSent,
        withCredentials: true
      })
      .then((response) => {
          return {
              data: response.data,
              status: response.status
          }
      })
      .catch((error) => {
          if (error.response) {
          return {
              data: error.response.data,
              status: error.response.status
          }}
          else {
              console.log(error);
              return null;
          }
      })
    }
}
export {_helper}
