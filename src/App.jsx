import { useState } from 'react'
import './App.css'
import CvForm from './components/CvForm'

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
    </>
  )
}

export default App
