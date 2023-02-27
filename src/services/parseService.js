const Parse = require("parse");
Parse.initialize("myAppId", "YOUR_JAVASCRIPT_KEY");

Parse.serverURL = "http://localhost:3031/parse";
// Parse.serverURL = "http://api-saas.aiensured.com/parse";

export default Parse;
