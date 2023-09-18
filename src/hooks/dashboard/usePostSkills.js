import axios from "axios";
import { useCookies } from "react-cookie";

const usePostSkills = () => {
  const [, setCookie] = useCookies(["studentId"]);
  return async (studentId, skills) => {
    // console.log(skills);
    try {
      await axios.post(`https://api.projectszero.tech/skills/${studentId}`, 
      skills,
      // {
      //   skill: skills,
      //   thisIsDefinitelyWrong: true
      // }
      );
      // console.log(skills);
      setCookie("studentId", studentId);
      alert("送出成功");
    } catch (error) {
      alert(error);
    }
  };
};

export default usePostSkills;
