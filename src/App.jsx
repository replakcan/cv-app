import { useState } from 'react'
import './App.css'
import CvForm from './components/CvForm'
import CvOutput from './components/CvOutput'

function App() {
  const [state, setState] = useState({
    generalInfo: { name: '', email: '', phone: '' },
    education: [],
    workExperience: [],
  })

  console.log(state)

  return (
    <>
      <CvForm setState={setState} />
      <CvOutput state={state} />
    </>
  )
}

export default App
