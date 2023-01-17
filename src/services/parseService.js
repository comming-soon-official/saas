const Parse = require("parse");
Parse.initialize("myAppId", "YOUR_JAVASCRIPT_KEY");
// Parse.serverURL = (process.env.NODE_ENV === "development" ? process.env.REACT_APP_SERVER_URL_DEV : process.env.REACT_APP_SERVER_URL_PROD);
Parse.serverURL = "http://13.233.122.188:3031/parse";
// http://13.233.122.188:5001/

export default Parse;
