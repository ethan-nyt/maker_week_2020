import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

export default = () => {
    const HosptialVisits = ["0", "1-2", "3-4", "5-6", "7-8", "9-10","more than 10" ]
    return (
    <Form>
        <Form.Group>
            <label>Number of HosptialVisits </label>
            <Form.Field 
            label="0"
            control="input"
            type="radio"
            name="HospitalVisitOption"
            />
        </Form.Group>
    </Form>
    )
}