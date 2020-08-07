import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Button, Icon } from "semantic-ui-react";

/**
 * Inline styles used for speed
 * To properly align vertically, change top margin of first header
 */

export default () => {
  return (
    <Container textAlign="center">
      <Header
        content="Huge Title"
        as="h1"
        textAlign="center"
        style={{
          fontSize: "8em",
          marginTop: "2.8em",
        }}
      />
      <Header
        content="The purpose here. Very simple but powerful."
        as="h2"
        textAlign="center"
        style={{
          fontSize: "2em",
          fontWeight: "normal",
        }}
      />
      <Button
        size="huge"
        color="teal"
        icon
        labelPosition="right"
        as={Link}
        to="/form"
      >
        Start
        <Icon name="right arrow" />
      </Button>
    </Container>
  );
};
