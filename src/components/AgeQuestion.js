import React, { useState } from 'react'
import { Header, HeaderContent } from 'semantic-ui-react'

export default () => {
  const [Age, setAge] = useState(15)

  return (
    <div>
      <Header as='h1' textAlign='center' style={{ marginTop: 200 }}>
        What's your age?
      </Header>
      <Header as='h2' textAlign='center'>
        {Age}
      </Header>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          type='range'
          list='tickmarks'
          value={Age}
          onChange={(event) => {
            setAge(event.target.value)
          }}
          min='13'
          max='54'
          style={{ width: 500 }}
        />

        <datalist id='tickmarks'>
          <option value='0'></option>
          <option value='24'></option>
          <option value='34'></option>
          <option value='44'></option>
          <option value='54'></option>
        </datalist>
      </div>
    </div>
  )
}
