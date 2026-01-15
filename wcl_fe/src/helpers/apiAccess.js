var urlBase = 'https://localhost:7078/';

async function postData(url, body, callback) {

  const fullUrl = urlBase + url
  const request = new Request(fullUrl, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await fetch(request);
  // ###TODO: handle any non-200 response
  const result = await response.json();
  if (result.Result) {
    callback(result.Data)
  }

}

export function login(un, pw, callback) {
  const body = { Email: un, Password: pw }
  postData("Account/Login", body, callback)
}

export function getGymId(callback) {
  const body = { Token: sessionStorage.getItem('token') }
  postData("Account/GetGymForToken", body, callback)
}