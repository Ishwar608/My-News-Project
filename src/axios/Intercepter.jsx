import axios from "axios";

const authFetch = axios.create({
  
  baseURL: "https://63ac1dfa34c46cd7ae77dabf.mockapi.io/api"

})

authFetch.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
          //to handle or save data in cloud
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND');
    }
    if (error.response.status === 401) {
      // do something
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }
);


export default authFetch;