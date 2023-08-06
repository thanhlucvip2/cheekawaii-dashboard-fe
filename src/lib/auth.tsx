import { configureAuth } from "react-query-auth";

import {
  loginWithEmailAndPassword,
  getUser,
  registerWithEmailAndPassword,
  UserResponse,
  LoginCredentialsDTO,
  RegisterCredentialsDTO,
} from "./auth-api";
import cookie from "src/utils/cookie";

async function handleUserResponse(data: UserResponse) {
  const {
    data: { token },
  } = data;
  cookie.setToken(token);
  return await getUser();
}

let userData: any = null;
async function userFn() {
  if (cookie.getToken()) {
    if (userData === null) {
      userData = await getUser();
    }
    return userData;
  }

  return null;
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  cookie.clearToken();
}

const authConfig = {
  userFn,
  loginFn,
  registerFn,
  logoutFn,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);
