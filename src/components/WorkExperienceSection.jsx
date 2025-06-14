function WorkExperienceSection({ state }) {
  const { companyName, position, responsibility, workStartDate, workEndDate } = state

  return (
    <>
      <p>{companyName}</p>
      <p>{position}</p>
      <p>{responsibility}</p>
      <p>{workStartDate}</p>
      <p>{workEndDate}</p>
    </>
  )
}

export default WorkExperienceSection
