import React from 'react'
import { Button } from 'semantic-ui-react'
import Landing from './components/Landing'
import RaceQuestion from './components/RaceQuestion'
import HospitalVisits from './components/HospitalVisits'
import AgeQuestion from './components/AgeQuestion'
export default () => {
  return (
    <div id='app'>
      <HospitalVisits />
    </div>
  )
}
