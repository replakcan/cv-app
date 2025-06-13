import { useState } from "react";

function EducationalExperienceSection() {
  const [education, setEducation] = useState([]);
  const [formData, setFormData] = useState({
    school: "",
    department: "",
    graduationDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEducation((prevEdu) => [...prevEdu, formData]);

    setFormData({ school: "", department: "", graduationDate: "" });
  }
  console.log(education);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Educational Experience</legend>
        <label htmlFor="school">School Name </label>
        <input
          type="text"
          id="school"
          name="school"
          required
          minLength={5}
          autoComplete="school"
          value={education.school}
          onChange={handleChange}
        />
        <label htmlFor="department">Title of Study </label>
        <input
          type="text"
          id="department"
          name="department"
          required
          autoComplete="department"
          value={education.department}
          onChange={handleChange}
        />
        <label htmlFor="graduationDate">Graduation Date </label>
        <input
          type="date"
          id="graduationDate"
          name="graduationDate"
          required
          value={education.graduationDate}
          onChange={handleChange}
        />
        <button type="submit">+ Add Education</button>
      </fieldset>
    </form>
  );
}

export default EducationalExperienceSection;
