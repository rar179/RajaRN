import { store } from '../redux/store';
import { toggleLoader } from '../redux/action';

const onboarding_api_url = 'https://retoolapi.dev/pXr29u'
const luno_price_url = 'https://ajax.luno.com/ajax/1/price_page_info'

const generate = (url,endpoint) => `${url}/${endpoint}`;

const Header = () => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return headers;
};

const onboardingEndPoint = {
  login: 'data',
  signup: 'data',
}

export const login = async data => {
  const { userName , password } = data;
  let resp = await fetchAPI(
    generate(onboarding_api_url,onboardingEndPoint.login),
    {
      method: 'GET',
      headers: Header(),
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

export const signup = async data => {

  let resp = await fetchAPI(
    generate(onboarding_api_url,onboardingEndPoint.signup),
    {
      method: 'POST',
      headers: Header(),
      body: JSON.stringify(data),
    },
  );

  //check resp
  let success = false;
  const { userName:respUserName, password:respPassword } = resp;
  if(respUserName === data.userName && respPassword === data.password) {
    success = true;
  }

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
  console.log(`=========================================================`)
  console.log(`API CALL ${url}`)
  console.log(header)

  store.dispatch(toggleLoader(true));

  const resp = await timeout(5000 ,fetch(url, header));

  store.dispatch(toggleLoader(false));

  console.log(`API RESP ${url}`)
  console.log(resp)
  console.log(`=========================================================`)

  return resp;
}

function timeout(ms, promise) {
  return new Promise(function(resolve, reject) {
  setTimeout(function() {
      reject(new Error("Connection timeout"))
  }, ms);
  promise.then(
      (response) => response.json()
  ).then((res) => {
      // result data
      resolve(res);
  }).catch((error) => {
      reject(error);
  }).done();
  });
}