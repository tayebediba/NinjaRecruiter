import httpService from "./httpService";

// ==========createEmployer==============
export const CreateEmployer = async (employerInformation) => {
  const data = await httpService.post(
    "/Employer/CreateEmployer",
    employerInformation
  );
  return data;
};

// ==========employerAcivityField==============
export const CreateEmployerAcivityField = async (title) => {
  const data = await httpService.post(
    "/EmployerAcivityField/CreateEmployerAcivityField",
    {
      title: title,
    }
  );
  return data;
};

// ===============getEmployerList=================

export const GetEmployerList = async () => {
  const data = await httpService
    .get("/Employer/GetEmployer")
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => console.log(err));
  return data;
};
// ===============getEmployerAcivityFields=================

export const GetEmployerAcivityFields = async () => {
  const data = await httpService
    .get("/EmployerAcivityField/GetEmployerAcivityFields")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
  return data;
};
