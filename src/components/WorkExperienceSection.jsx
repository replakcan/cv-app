function WorkExperienceSection({ state }) {
  const { companyName, position, responsibility, workStartDate, workEndDate } = state

  return (
    <div>
      <p>
        <span>Comapny: </span>
        {companyName}
      </p>
      <p>
        <span>Position: </span>
        {position}
      </p>
      <p>
        <span>Responsibility: </span>
        {responsibility}
      </p>
      <p>
        <span>Work Start Date: </span>
        {workStartDate}
      </p>
      <p>
        <span>Work End Date: </span>
        {workEndDate}
      </p>
    </div>
  )
}

export default WorkExperienceSection
