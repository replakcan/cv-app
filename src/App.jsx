import { useState } from 'react'
import './App.css'
import CvForm from './components/CvForm'
import CvTemplate from './components/CvTemplate'

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
      <CvTemplate state={state} />
    </>
  )
}

export default App
