import { Fragment } from 'react/jsx-runtime'
import GenInfoSection from './GenInfoSection'
import EducationSection from './EducationSection'
import WorkExperienceSection from './WorkExperienceSection'

function CvOutput({ state }) {
  return (
    <>
      <h2>General Information</h2>
      <GenInfoSection state={state.generalInfo} />
      <h2>Education</h2>
      {state.education.map((edu, i) => {
        return (
          <Fragment key={i}>
            <EducationSection state={edu} />
          </Fragment>
        )
      })}
      <h2>Work Experience</h2>
      {state.workExperience.map((we, i) => {
        return (
          <Fragment key={i}>
            <WorkExperienceSection state={we} />
          </Fragment>
        )
      })}
    </>
  )
}

export default CvOutput
