import useSWRFetch from "../useSWRFetch";

const useSkills = (studentId) => {
  // finish it by yourself
  const { data } = useSWRFetch(`https://api.projectszero.tech/skills/${studentId}`);
  return {
    labels: data && Object.keys(data),
    values: data && Object.values(data)
  };  

};

export default useSkills;
