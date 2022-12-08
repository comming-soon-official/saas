import { notification } from "antd";
import Parse from "./parseService";

export function resetPassword(username) {
  return Parse.User.requestPasswordReset(username);
}

export function getCurrentUser() {
  return Parse.User.current();
}
export const ParseAnonymousUser = () => {
  return Parse.AnonymousUtils.logIn();
};

export function login(username, password) {
  return Parse.User.logIn(username, password, { usePost: true });
}

export function logout() {
  return Parse.User.logOut();
}

export function createRoles() {
  //creating Roles and Users
  const adminRoleACL = new Parse.ACL();
  adminRoleACL.setPublicReadAccess(true);
  adminRoleACL.setPublicWriteAccess(true);
  var adminRole = new Parse.Role("Administrator", adminRoleACL);
  adminRole.save();
  const userRoleACL = new Parse.ACL();
  userRoleACL.setPublicReadAccess(true);
  userRoleACL.setPublicWriteAccess(true);
  var userRole = new Parse.Role("User", userRoleACL);
  userRole.save();
  const superAdminRoleACL = new Parse.ACL();
  superAdminRoleACL.setPublicReadAccess(true);
  superAdminRoleACL.setPublicWriteAccess(true);
  var superAdminRole = new Parse.Role("Admin", superAdminRoleACL);
  superAdminRole.save();
}
export const sendEmail = () => {
  Parse.Cloud.run("notificationmail").then((data) => {
    console.log(data);
  });
};

export function signup(username, password) {
  const user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("email", username);
  user.set("Themecolor", "#a03c64");
  user.set("BGcolor", "#000");
  user.set("Textcolor", "#fff");
  var query = new Parse.Query(Parse.Role);
  query.equalTo("name", "Administrator");
  query.first().then(function (role) {
    var relation = role.getUsers();
    relation
      .query()
      .find()
      .then(function (results) {
        if (results.length < 1) {
          // signing up the user
          user
            .signUp()
            .then(() => {
              var query = new Parse.Query(Parse.Role);
              query.equalTo("name", "Administrator");
              return query.first().then(function (role) {
                var relation = role.relation("users");
                relation.add(user);
                return role.save();
              });
            })
            .then(() => {
              window.location = "/auth/login";
            })
            .catch((error) => {
              //setErrorMessage(error.message);
            });
        } else {
          // signing up the user as a User Role if more than one user on Administrator role
          user
            .signUp()
            .then(() => {
              var query = new Parse.Query(Parse.Role);
              query.equalTo("name", "User");
              return query.first().then(function (role) {
                var relation = role.relation("users");
                relation.add(user);
                return role.save();
              });
            })
            .then(() => {
              window.location = "/auth/login";
            })
            .catch((error) => {
              //setErrorMessage(error.message);
            });
        }
      });
  });
}

export function checkIfAdmin() {
  var query = new Parse.Query(Parse.Role);
  query.equalTo("name", "Administrator");
  query.first().then(function (role) {
    var relation = role.getUsers();
    relation
      .query()
      .find()
      .then(function (results) {
        results.forEach(function (user) {
          return user.get("email");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

export function checkIfSuperAdmin() {
  var query = new Parse.Query(Parse.Role);
  query.equalTo("name", "Admin");
  query.first().then(function (role) {
    var relation = role.getUsers();
    relation
      .query()
      .find()
      .then(function (results) {
        results.forEach(function (user) {
          // setAdminlist([...adminlist, adminlist])
          //if (user.get("email") === CurrentUserMail) {
          //setSuperAdminuser(user.get("email"));
          // console.log(Admin);
          //}
          return user.get("email");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

export function setAdmin() {}

export const FileuploadDataset = (file) => {
  let roundvalue = 0;
  let parseFile = new Parse.File(file.name, file);
  return parseFile
    .save({
      progress: (value) => {
        roundvalue = Math.round(value * 100);
        // console.log(roundvalue);
      },
    })
    .then((res) => {
      console.log(res);
      console.log(res._url);

      getCurrentUser().set("dataset", res._url);
      getCurrentUser().save();
      var newStore = new Parse.Object("File");
      newStore.set("File", parseFile);
      newStore.save();
      console.log(res);
      return roundvalue;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const FileuploadModal = (file) => {
  let roundvalue = 0;
  let parseFile = new Parse.File(file.name, file);
  return parseFile
    .save({
      progress: (value) => {
        roundvalue = Math.round(value * 100);
        // console.log(roundvalue);
      },
    })
    .then((res) => {
      getCurrentUser().set("model", res._url);
      getCurrentUser().save();
      var newStore = new Parse.Object("File");
      newStore.set("File", parseFile);
      newStore.save();
      console.log(res);
      return roundvalue;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const FileuploadEmbedded = (file) => {
  let roundvalue = 0;
  let parseFile = new Parse.File(file.name, file);
  return parseFile
    .save({
      progress: (value) => {
        roundvalue = Math.round(value * 100);
        // console.log(roundvalue);
      },
    })
    .then((res) => {
      getCurrentUser().set("embedded", res._url);
      getCurrentUser().save();
      var newStore = new Parse.Object("File");
      newStore.set("File", parseFile);
      newStore.save();
      console.log(res);
      return roundvalue;
    })
    .catch((error) => {
      console.log(error);
    });
};
