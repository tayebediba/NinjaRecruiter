import httpService from "./httpService";

// // ==========getCommonFilter==============
export const CommonFilter = async (id, term) => {
  const data = await httpService
    .get(`CommonFilter/Filter?type=${id}&term=${term}`)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
  return data;
};
