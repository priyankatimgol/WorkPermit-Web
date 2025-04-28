import axios from 'axios';
//export const BaseURL = `http://216.48.180.83/api`;
//export const BaseURL = `https://perhfomsrv.vepsystem.com/ptw_backend/api`;
//export const BaseURL = `https://csi-mcr-md01.pcnrdmp.Local/ptw_backend/api`;
//export const BaseURL = `https://csi-mcr-md01.dmz.rdmp.Local/ptw_backend/api`;
const BaseUrl = localStorage.getItem('BaseUrl');

export const ApiGetNoAuth = (type) => {
  return new Promise(async (resolve, reject) => {
    let BaseUrl = localStorage.getItem('BaseUrl');

    if (!BaseUrl) {
      try {
        const response = await fetch(`${window.location.origin}/url.json`);
        const result = await response.json();
        BaseUrl = result.BaseURL;
        localStorage.setItem('BaseUrl', BaseUrl);
      } catch (error) {
        console.error('Error fetching base URL:', error);
        reject(error);
        return;
      }
    }

    axios
      .get(BaseUrl + '/api' + type)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty('response') &&
          error.response &&
          error.response.hasOwnProperty('data') &&
          error.response.data &&
          error.response.data.hasOwnProperty('error') &&
          error.response.data.error
        ) {
          reject(error.response.data);
        } else {
          reject(error.response.data);
        }
      });
  });
};
export const ApiPut = (type, userData) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseUrl + '/api' + type, userData)
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        if (
          error &&
          error.hasOwnProperty('response') &&
          error.response &&
          error.response.hasOwnProperty('data') &&
          error.response.data &&
          error.response.data.hasOwnProperty('error') &&
          error.response.data.error
        ) {
          reject(error.response.data);
        } else {
          reject(error.response.data);
        }
      });
  });
};

export const apiRequest = async (url, options = {}) => {
  let BaseUrl = localStorage.getItem('BaseUrl');

  if (!BaseUrl) {
    try {
      const response = await fetch(`${window.location.origin}/url.json`);
      const result = await response.json();
      BaseUrl = result.BaseURL;
      localStorage.setItem('BaseUrl', BaseUrl);
    } catch (error) {
      console.error('Error fetching base URL:', error);
      return Promise.reject(error);
    }
  }

  const _options = {
    method: 'get',
    url: BaseUrl + '/api' + url,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...options.headers, // Merge custom headers if provided
    },
    ...options,
  };

  try {
    const responseJson = await axios(_options);
    return Promise.resolve(responseJson);
  } catch (error) {
    if (
      error &&
      error.hasOwnProperty('response') &&
      error.response &&
      error.response.hasOwnProperty('data') &&
      error.response.data &&
      error.response.data.hasOwnProperty('error') &&
      error.response.data.error
    ) {
      return Promise.reject(error.response.data);
    } else {
      return Promise.reject(error.response.data);
    }
  }
};
