import { useState } from 'react'

function PracticalExperienceSection(props) {
  const { setState } = props
  const [formData, setFormData] = useState({
    companyName: '',
    position: '',
    responsibility: '',
    workStartDate: '',
    workEndDate: '',
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
    setState((prevData) => ({
      ...prevData,
      workExperience: [...prevData.workExperience, formData],
    }))

    setFormData({
      companyName: '',
      position: '',
      responsibility: '',
      workStartDate: '',
      workEndDate: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Practical Experience</legend>
        <label htmlFor="companyName">Company Name </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          minLength={2}
          value={formData.companyName}
          onChange={handleChange}
        />
        <label htmlFor="position">Position Title </label>
        <input type="text" id="position" name="position" required value={formData.position} onChange={handleChange} />
        <label htmlFor="responsibility">Main Responsibility </label>
        <textarea
          type="text"
          id="responsibility"
          name="responsibility"
          required
          placeholder="what was your main responsibility?"
          value={formData.responsibility}
          onChange={handleChange}
        />
        <div className="dateGroup">
          <label htmlFor="workStartDate">
            From&nbsp;&nbsp;
            <input
              type="date"
              id="workStartDate"
              name="workStartDate"
              value={formData.workStartDate}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="workEndDate">
            Until&nbsp;&nbsp;
            <input
              type="date"
              id="workEndDate"
              name="workEndDate"
              value={formData.workEndDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">+ Add Work Experience</button>
      </fieldset>
    </form>
  )
}

export default PracticalExperienceSection
