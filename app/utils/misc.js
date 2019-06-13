import AsyncStorage from "@react-native-community/async-storage";

//www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]

// https:
export const firebaseConfig = {
  apiKey: "AIzaSyAqnjdMI5nk63vPg6pqWhqDuC3EbjVDVx0",
  authDomain: "rn-nba-app-9d073.firebaseapp.com",
  databaseURL: "https://rn-nba-app-9d073.firebaseio.com",
  projectId: "rn-nba-app-9d073",
  storageBucket: "rn-nba-app-9d073.appspot.com",
  messagingSenderId: "322066355662",
  appId: "1:322066355662:web:77cce553b11a5388"
};
export const DBURL = "https://rn-nba-app-9d073.firebaseio.com";
export const APIKEY = `AIzaSyAqnjdMI5nk63vPg6pqWhqDuC3EbjVDVx0`;
export const SIGNUP = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${APIKEY}`;
export const SIGNIN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${APIKEY}`;
export const REFRESH = "";
// export const FIREBASEURL

export const getTokens = cb => {
  AsyncStorage.multiGet([
    "@nab_app@token",
    "@nab_app@refreshToken",
    "@nab_app@expireToken",
    "@nab_app@uid"
  ]).then(values => {
    cb(values);
  });
};

export const setTokens = (values, cb) => {
  const dateNow = new Date();
  const expiration = dateNow.getTime + 3600 * 1000;

  console.log("values", values);
  AsyncStorage.multiSet([
    ["@nab_app@token", values.token],
    ["@nab_app@refreshToken", values.refToken],
    ["@nab_app@expireToken", expiration.toString()],
    ["@nab_app@uid", values.uid]
  ]).then(response => {
    cb();
  });
};
