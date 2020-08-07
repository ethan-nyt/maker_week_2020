import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Loader } from "semantic-ui-react";
import axios from 'axios';
import BubbleChart from './Bubbles'


const mockResponse = {
  data: [0.05, 0.15, 0.25, 0.5, 0.05]
};

const wait = (ms) => new Promise(resolve => setTimeout(() => resolve(mockResponse), ms));

export default ({ userDetails }) => {
  const { age, race, hospitalVisits } = userDetails;
  const [response, setResponse] = useState(null)
  // if details are true, send to API!
  useEffect(() => {
    const payload = { input: [race, hospitalVisits, age] }
    // TODO replace wait with the actual axios.post when the server is ready
    // axios.post('/api/predict', payload).then(console.log).catch(console.error)
    wait(3000).then(({ data }) => {
      //
      setResponse(data)
    })
  }, [])
  return (
    <div>
      {
        response ? <BubbleChart /> : <Loader size="massive" active={true} />
      }
      <p>
        Age: {age}, Race: {race}, Prenatal visits: {hospitalVisits}
      </p>
      <Button
        color="teal"
        style={{ marginTop: 50 }}
        icon
        labelPosition="right"
        as={Link}
        to="/"
      >
        Home
        <Icon name="home"></Icon>
      </Button>
    </div>
  );
};
