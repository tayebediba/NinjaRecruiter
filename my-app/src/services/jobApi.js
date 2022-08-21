import httpService from "./httpService";

// ==========createJob==============
export const CreateJob = async (jobDefinition) => {
  const data = await httpService.post("/Job/CreateJob", {
    jobDefinition,
  });
  return data;
};
// // ==========getJobs==============
export const GetJobs = async () => {
  const data = await httpService
    .get("/Job/GetJobs")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
  return data;
};
// // ==========GetSkills==============
export const GetSkills = async () => {
  const data = await httpService
    .get("/Skill/GetSkills")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
  return data;
};
