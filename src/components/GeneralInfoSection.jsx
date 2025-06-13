import { useState } from 'react'

function GeneralInformationSection({ setState }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setState((prevInfo) => ({
      ...prevInfo,
      generalInfo: { formData },
    }))

    setFormData({ name: '', email: '', phone: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>General Information</legend>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength={2}
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone </label>
        <small>Format: 123-456-7890</small>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          placeholder="123-456-7890"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
        />
        <button type="submit">Confirm</button>
      </fieldset>
    </form>
  )
}

export default GeneralInformationSection
