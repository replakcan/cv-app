import EducationalExperienceSection from './EducationalExperienceSection'
import GeneralInformationSection from './GeneralInfoSection'
import PracticalExperienceSection from './PracticalExperienceSection'

function CvForm(props) {
  const { setState } = props

  return (
    <>
      <GeneralInformationSection setState={setState} />
      <EducationalExperienceSection setState={setState} />
      <PracticalExperienceSection setState={setState} />
    </>
  )
}

export default CvForm
