import React from "react";
import { Header, Form, Button, Icon } from "semantic-ui-react";

export default ({ incrementPage, decrementPage, formData, setFormData }) => {
  const races = [
    "AIAN (only)",
    "Asian Indian (only)",
    "Black (only)",
    "Chinese (only)",
    "Filipino (only)",
    "Guamanian (only)",
    "Hawaiian (only)",
    "Japanese (only)",
    "Korean (only)",
    "More than one race",
    "Other Asian (only)",
    "Other Pacific Islander (only)",
    "Samoan (only)",
    "Vietnamese (only)",
    "White (only)",
  ];

  /**
   * Slicing isn't ideal since thinking in indeces is pretty irritating, but was having problem with old code
   * Races str[] is sliced and mapped to radios in seperate groups for quick styling
   * When changing, remember to adjust value & checked props to match
   */
  return (
    <div>
      <Header
        content="Select A Race or Ethnicity"
        as="h1"
        textAlign="center"
        style={{
          fontSize: "4em",
          marginTop: "2.8em",
        }}
      />
      <div style={{ margin: "0 auto 0 auto", width: "32%" }}>
        <Form>
          <Form.Group>
            {races.slice(0, 4).map((raceStr, i) => (
              <Form.Radio
                key={raceStr}
                label={raceStr}
                value={i}
                checked={i === formData.race}
                onChange={(e, { value }) =>
                  setFormData({ ...formData, race: value })
                }
              />
            ))}
          </Form.Group>
          <Form.Group>
            {races.slice(4, 8).map((raceStr, i) => (
              <Form.Radio
                key={raceStr}
                label={raceStr}
                value={i + 4}
                checked={i + 4 === formData.race}
                onChange={(e, { value }) =>
                  setFormData({ ...formData, race: value })
                }
              />
            ))}
          </Form.Group>
          <Form.Group>
            {races.slice(8, 12).map((raceStr, i) => (
              <Form.Radio
                key={raceStr}
                label={raceStr}
                value={i + 8}
                checked={i + 8 === formData.race}
                onChange={(e, { value }) =>
                  setFormData({ ...formData, race: value })
                }
              />
            ))}
          </Form.Group>
          <Form.Group>
            {races.slice(12).map((raceStr, i) => (
              <Form.Radio
                key={raceStr}
                label={raceStr}
                value={i + 12}
                checked={i + 12 === formData.race}
                onChange={(e, { value }) =>
                  setFormData({ ...formData, race: value })
                }
              />
            ))}
          </Form.Group>
        </Form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={decrementPage}
            color="teal"
            style={{ marginTop: 50, width: 108 }}
            icon
            labelPosition="left"
          >
            <Icon name="left arrow" />
            Prev
          </Button>
          <Button
            onClick={incrementPage}
            color="teal"
            style={{ marginTop: 50 }}
            icon
            labelPosition="right"
          >
            Next
            <Icon name="right arrow"></Icon>
          </Button>
        </div>
      </div>
    </div>
  );
};
