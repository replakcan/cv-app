import { useState } from 'react'

function EducationalExperienceSection(props) {
  const { setState } = props
  const [formData, setFormData] = useState({
    school: '',
    department: '',
    graduationDate: '',
  })

  function handleChange(e) {
    const { name, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setState((prevData) => ({ ...prevData, education: [...prevData.education, formData] }))

    setFormData({ school: '', department: '', graduationDate: '' })
  }

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
          value={formData.school}
          onChange={handleChange}
        />
        <label htmlFor="department">Title of Study </label>
        <input
          type="text"
          id="department"
          name="department"
          required
          autoComplete="department"
          value={formData.department}
          onChange={handleChange}
        />
        <label htmlFor="graduationDate">Graduation Date </label>
        <input
          type="date"
          id="graduationDate"
          name="graduationDate"
          required
          value={formData.graduationDate}
          onChange={handleChange}
        />
        <button type="submit">+ Add Education</button>
      </fieldset>
    </form>
  )
}

export default EducationalExperienceSection
