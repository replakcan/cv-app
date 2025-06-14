import { Fragment } from 'react/jsx-runtime'
import GenInfoSection from './GenInfoSection'
import EducationSection from './EducationSection'
import WorkExperienceSection from './WorkExperienceSection'
import CvCard from './CvCard'
import '../styles/CvCard.css'
import '../styles/CvTemplate.css'

function CvTemplate({ state }) {
  return (
    <section className="cv-template">
      <CvCard>
        <h2>General Information</h2>
        <GenInfoSection state={state.generalInfo} />
      </CvCard>
      <CvCard>
        <h2>Education</h2>
        {state.education.map((edu, i) => {
          return (
            <Fragment key={i}>
              <EducationSection state={edu} />
            </Fragment>
          )
        })}
      </CvCard>
      <CvCard>
        <h2>Work Experience</h2>
        {state.workExperience.map((we, i) => {
          return (
            <Fragment key={i}>
              <WorkExperienceSection state={we} />
            </Fragment>
          )
        })}
      </CvCard>
    </section>
  )
}

export default CvTemplate
