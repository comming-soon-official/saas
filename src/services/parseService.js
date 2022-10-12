const Parse = require('parse');
Parse.initialize("myAppId", "YOUR_JAVASCRIPT_KEY");
// Parse.serverURL = (process.env.NODE_ENV === "development" ? process.env.REACT_APP_SERVER_URL_DEV : process.env.REACT_APP_SERVER_URL_PROD);
Parse.serverURL = "http://localhost:3031/parse";

export default Parse;
