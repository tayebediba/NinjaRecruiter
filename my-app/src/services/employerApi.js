import httpService from "./httpService";

// ==========createEmployer==============
export const CreateEmployer = async (employerInformation) => {
  const data = await httpService.post("/Employer/CreateEmployer", {
    firstName: employerInformation.firstName,
    lastName: employerInformation.lastName,
    address: employerInformation.address,
    phoneNumber: employerInformation.phoneNumber,
    email: employerInformation.email,
    websiteLink: employerInformation.websiteLink,
    necessaryExplanation: employerInformation.necessaryExplanation,
    isFixed: employerInformation.isFixed,
    exactAmountRecived: employerInformation.exactAmountRecived,
    fieldOfActivityId: employerInformation.fieldOfActivityId,
  });
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
