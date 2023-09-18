import useSWRFetch from "../useSWRFetch";

const useGradeStats = () => {
  const { data } = useSWRFetch("https://api.projectszero.tech/getGradeStats");
  return {
    labels: data && Object.keys(data),
    values: data && Object.values(data)
  };
};

export default useGradeStats;
