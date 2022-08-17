import httpService from "./httpService";

// ==========Register============
export const RegisterService = async (userName, email, password) => {
  const data = await httpService.post("/Account/Register", {
    name: userName,
    email: email,
    password: password,
    rematchPassword: password,
  });
  return data;
};

// ==========Login==============
export const LoginService = async (userEmail, password) => {
  const data = await httpService.post("/Account/Login", {
    email: userEmail,
    password: password,
  });
  return data;
};

// ==========getUserData==============
export const GetUserData = async () => {
  const data = await httpService
    .get("/Account/GetUserData")
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => console.log(err));
  return data;
};
