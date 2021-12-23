const api_url = 'https://retoolapi.dev/mxOQka'

const fullURL = path => `${api_url}/${path}`;

const ServiceList = {
  login: 'login',
}

export const login = async data => {
  const { userName , password } = data;

  let resp = await fetchAPI(
    fullURL(ServiceList.login),
    {
      method: 'GET',
    },
  );

  //Login credentials check
  let success = false;
  resp.map(data => {
    if(data.userName === userName && data.password === password) {
      success = true;
    }
  })

  return success;
};

const fetchAPI = async (url, header) => {
  console.log(`API CALL ${url}`)
  console.log(header)

  const resp = await fetch(url, header);
  const respJson = await resp.json();

  console.log(`API RESP ${url}`)
  console.log(respJson)

  return respJson;
}