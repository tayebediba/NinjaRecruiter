import httpService from "./httpService";


// ==========Register============
export const senOtpService = async (userName, email, password) => {
  const data = await httpService.post("/Account/Register", {
    name: userName,
    email: email,
    password: password,
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
