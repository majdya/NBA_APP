import { SIGN_IN, SIGN_UP } from "../types";
import axios from "axios";
import { DBURL, SIGNUP, SIGNIN, F } from "../../utils/misc";
export function signUp(data) {
  const request = axios({
    method: "POST",
    url: SIGNUP,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true
    },
    headers: {
      "Content-Type": "Application.json"
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(e => "false");
  return {
    type: SIGN_UP,
    payload: request
  };
}
export function signIn(data) {
  const request = axios({
    method: "POST",
    url: SIGNIN,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true
    },
    headers: {
      "Content-Type": "Application.json"
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(e => "false");
  return {
    type: SIGN_IN,
    payload: request
  };
}
