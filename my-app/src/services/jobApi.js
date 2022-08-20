import httpService from "./httpService";

// ==========createJob==============
export const CreateJob = async (jobDefinition) => {
  const data = await httpService.post("/Job/CreateJob", {
    jobDefinition,
  });
  return data;
};
// // ==========getJobEssentialSkills==============
// export const GetJobEssentialSkills = async () => {
//   const data = await httpService
//     .get("/JobEssentialSkills/GetJobEssentialSkills")
//     .then((res) => {
//       return res.data.data;
//     })
//     .catch((err) => console.log(err));
//   return data;
// };
// ==========createJobEssentialSkills==============
// export const CreateJobEssentialSkills = async (jobDefinition) => {
//   const data = await httpService.post(
//     "JobEssentialSkills/CreateJobEssentialSkills",
//     {
//       jobDefinition,
//     }
//   ); bbb   
//   return data;
// };
