import httpService from "./httpService";

// ==========createEmployer==============
export const CreateEmployer = async (employerInformation) => {
  const data = await httpService.post("/Employer/CreateEmployer", {
    firstName: employerInformation.firstName,
    lastName: employerInformation,
    address: employerInformation,
    phoneNumber: employerInformation,
    email: employerInformation,
    websiteLink: employerInformation,
    necessaryExplanation: employerInformation,
    isFixed: true,
    exactAmountRecived: 0,
    fieldOfActivityId: 5,
  });
  return data;
};
