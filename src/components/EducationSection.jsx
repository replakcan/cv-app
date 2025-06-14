function EducationSection({ state }) {
  const { school, department, graduationDate } = state

  return (
    <div>
      <p>
        <span>School: </span>
        {school}
      </p>
      <p>
        <span>Departmant: </span>
        {department}
      </p>
      <p>
        <span>GraduationDate: </span>
        {graduationDate}
      </p>
    </div>
  )
}

export default EducationSection
