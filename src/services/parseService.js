const Parse = require("parse");
Parse.initialize("myAppId", "YOUR_JAVASCRIPT_KEY");

// Parse.serverURL = "http://localhost:3031/parse";
Parse.serverURL = "https://saas-api.aiensured.com/parse";

export default Parse;
