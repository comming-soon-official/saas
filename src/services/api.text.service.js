var BASE_API = (process.env.NODE_ENV === "development" ? process.env.REACT_APP_SERVER_URL_DEV : process.env.REACT_APP_SERVER_URL_PROD);

export function fetchTextMainConfig(){
  return fetch(BASE_API + "/config/text/main")
    .then(response => response.json());
}

export function postTextMainConfig(config_main){
  return fetch(BASE_API + "/config/text/main", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(config_main)
  });
}

export function fetchTextModelingConfig(){
  return fetch(BASE_API + "/config/text/model")
    .then(response => response.json());
}

export function postTextModelingConfig(config_main){
  return fetch(BASE_API + "/config/text/model", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(config_main)
  });
}

export function fetchTextLoadingConfig(){
  return fetch(BASE_API + "/config/text/loading")
    .then(response => response.json());
}

export function postTextLoadingConfig(config_main){
  return fetch(BASE_API + "/config/text/loading", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(config_main)
  });
}

/*export function fetchTextConfigMain(){
  return fetch(BASE_API + "/config/", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(config_main)
  });
}*/

/*
export function fetchTextConfig(){

}

export function postTextConfigMain(){

}
*/
