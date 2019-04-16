const _BASEURL = "https://clipboardy.azurewebsites.net";
// const _BASEURL = "http://localhost:1337";
fetch._BASEURL;
export const fetchClients = async clientid => {
  try {
    let result = await fetch(`${_BASEURL}/clients?client=${clientid}`, {
      method: "GET"
    });
    if (result.ok) {
      return result.json();
    } else {
      let err = new Error("Response was not OK");
      throw err;
    }
  } catch (err) {
    throw err;
  }
};

export const sendClientEmail = async client => {
  let params = {};
  params["from"] = "test@email.com";
  params["message"] = `https://clippy.netlify.com/client/${client.id}`;
  Object.assign(params, client);
  try {
    let result = await fetch(`${_BASEURL}/sendemail`, {
      body: JSON.stringify(params),
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    return result.json();
  } catch (err) {
    throw err;
  }
};

export const sendAppOpenEmail = async client => {
  let params = {};
  params["from"] = "test@email.com";
  params["message"] = `https://clippy.netlify.com/appopen?clientid=${
    client.id
  }`;
  Object.assign(params, client);
  try {
    let result = await fetch(`${_BASEURL}/sendemail`, {
      body: JSON.stringify(params),
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    return result.json();
  } catch (err) {
    throw err;
  }
};

export const getClientConfig = async clientId => {
  try {
    let result = await fetch(`${_BASEURL}/clients/${clientId}/config`);
    return result.json();
  } catch (err) {
    throw err;
  }
};
