function EducationSection({ state }) {
  const { school, department, graduationDate } = state

  return (
    <>
      <p>{school}</p>
      <p>{department}</p>
      <p>{graduationDate}</p>
    </>
  )
}

export default EducationSection
