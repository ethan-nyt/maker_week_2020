import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Loader } from "semantic-ui-react";
import axios from "axios";
import BubbleChart from "./Bubbles";

const mockResponse = {
  /*
      Intensive Care: 0.3333333333333333
    Maternal Transfusion: 0.3333333333333333
    Pernieal Laceration: 0.3333333333333333
    Ruptured Uterus: 0.3333333333333333
    Unplanned Hysterectomy: 0.3333333333333333
    no_complication: 4.213991769547325
   */
  data: [0.05, 0.15, 0.25, 0.5, 0.05],
};

const numVisitsMapping = [0, 0, 0, 6, 6, 7, 7, 8, 8, 9, 9, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

const ageMapping = [8, 8, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7]

const wait = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(mockResponse), ms));

export default ({ userDetails }) => {
  const { age, race, hospitalVisits } = userDetails;
  const [response, setResponse] = useState(null);
  // if details are true, send to API!
  useEffect(() => {
    const payload = { input: [race, numVisitsMapping[hospitalVisits], ageMapping[age]] };
    // TODO replace wait with the actual axios.post when the server is ready
    axios.post('/api/predict', payload).then(({data}) => {
      console.log('response:', JSON.parse(data.response));
      const conditions = JSON.parse(data.response);
      setResponse(Object.values(conditions));
    }).catch(console.error)
    // wait(1500).then(({ data }) => {
    //   //
    //   setResponse(data);
    // });
  }, []);
  return (
    <div>
      {response ? (
        <BubbleChart results={response} />
      ) : (
        <Loader size="massive" active={true} />
      )}
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
