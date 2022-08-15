import httpService from "./httpService";

// ==========createJob==============
export const CreateJob = async (JobDefinition) => {
  const data = await httpService.post("/Job/CreateJob", {
    title: JobDefinition,
    hoursOfWork: 0,
    salaryMin: 0,
    salaryMax: 0,
    annualLeave: 0,
    exactAmountRecived: 0,
    description: JobDefinition,
    essentialSkills: JobDefinition,
    unnecessarySkills: JobDefinition,
    employerId: 0,
  });
  return data;
};
