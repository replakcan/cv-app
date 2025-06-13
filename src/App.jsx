import { useState } from "react";
import "./App.css";
import EducationalExperienceSection from "./components/EducationalExperienceSection";
import GeneralInformationSection from "./components/GeneralInfoSection";
import PracticalExperienceSection from "./components/PracticalExperienceSection";

function App() {
  const [state, setState] = useState({
    generalInfo: { name: "", email: "", phone: "" },
    education: [],
    workExperience: [],
  });

  console.log(state)
  return (
    <>
      <GeneralInformationSection
        generalInfo={state.generalInfo}
        setGeneralInfo={setState}
      />
      <EducationalExperienceSection />
      <PracticalExperienceSection />
    </>
  );
}

export default App