import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

export default ({ userDetails }) => {
  const { age, race, hospitalVisits } = userDetails;
  // if details are true, send to API!
  return (
    <div>
      <p>Results coming up!</p>
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
