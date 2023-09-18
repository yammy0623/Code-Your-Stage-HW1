import { useState } from "react";
import usePostSkills from "../../hooks/dashboard/usePostSkills";

function SkillsForm() {
  const [studentId, setStudentId] = useState();
  const [skills, setSkills] = useState({
    "UIUX": 0,
    "backend": 0,
    "business analysis": 0,
    "design thinking": 0,
    "frontend": 0
  });
  const postForm = usePostSkills();
  

  const handleSelectChange = (skill, value) => {
    setSkills({
      ...skills,
      [skill]: value
    });
  };
  // console.log(skills);
  return (
    // here is layout
    <div className="flex flex-col col-span-12 sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <form
        className="p-6 px-8"
        onSubmit={(e) => {
          e.preventDefault();
          postForm(studentId, skills);
        }}
      >
        <div className="mb-4">
          <label className="mb-2">請輸入學號</label>
          <input
            type="text"
            className="w-full border rounded"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        {Object.keys(skills).map((skill) => (
          <div className="" key={skill}>
            <label className="">{skill}</label>
            <select
              className="border rounded ml-4 mb-2"
              value={skills[skill]}
              onChange={(e) =>
                handleSelectChange(skill, Number(e.target.value))
              }
            >
              {[...Array(11).keys()].map(
                (
                  number // option value from 0 to 10
                ) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                )
              )}
            </select>
          </div>
        ))}
        <button
          type="submit"
          className="bg-school text-white px-4 py-2 rounded mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SkillsForm;
