import React, { useState } from 'react'
import { Header, Button, Icon } from 'semantic-ui-react'

export default () => {
  const [numVisits, setNumVisits] = useState(0)

  return (
    <div>
      <Header as='h1' textAlign='center' style={{ marginTop: 200 }}>
        Number of Hospital Visits
      </Header>
      <Header as='h2' textAlign='center'>
        {numVisits}
      </Header>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type='range'
          list='tickmarks'
          value={numVisits}
          onChange={(event) => {
            setNumVisits(event.target.value)
          }}
          min='0'
          max='20'
          style={{ width: 500 }}
        />
      </div>

      <datalist id='tickmarks'>
        <option value='0'></option>
        <option value='5'></option>
        <option value='10'></option>
        <option value='15'></option>
        <option value='20'></option>
      </datalist>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          color='teal'
          style={{ marginTop: 50, width: 108 }}
          icon
          labelPosition='left'
        >
          <Icon name='left arrow' />
          Prev
        </Button>
        <Button
          color='teal'
          style={{ marginTop: 50, width: 108 }}
          icon
          labelPosition='right'
        >
          Results
          <Icon name='right arrow'></Icon>
        </Button>
      </div>
    </div>
  )
}
