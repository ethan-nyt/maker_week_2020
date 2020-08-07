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
        content="Predicting Maternal Morbidity"
        as="h2"
        textAlign="center"
        style={{
          fontSize: "8em",
          marginTop: "2.8em",
        }}
      />
      <Header
        content="The US is currently experiencing the largest increase in maternal morbidity in the developed world since the 1990’s."
        as="h4"
        textAlign="center"
        style={{
          fontSize: "2em",
          fontWeight: "normal",
        }}
      />
      <Header
        content=" According to the CDC (Center for Disease Control and Prevention), roughly 60% of these deaths are preventable."
        as="h5"
        textAlign="center"
        style={{
          fontSize: "2em",
          fontWeight: "normal",
        }}
      />
      <Header
        content="There exist wide racial and ethnic gaps in the maternal morbidity data. The CDC reports that the death rate during childbirth is much higher for people of color."
        as="h5"
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
