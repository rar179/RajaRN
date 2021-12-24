const login_api_url = 'https://retoolapi.dev/mxOQka'
const luno_price_url = 'https://ajax.luno.com/ajax/1/price_page_info'

const generate = (url,endpoint) => `${url}/${endpoint}`;

const loginEndPoint = {
  login: 'login',
}

export const login = async data => {
  const { userName , password } = data;

  let resp = await fetchAPI(
    generate(login_api_url,loginEndPoint.login),
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

export const getLunoPrices = async () => {
  let resp = await fetchAPI(
    generate(luno_price_url,''),
    {
      method: 'POST',
      body: "{\"currency\":\"BTC\"}",
    },
  );

  return resp;
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