import React, { useState } from "react";
import { Form } from "semantic-ui-react";

export default () => {
  const raceGroups = [
    ["White (only)", "Black (only)", "AIAN (only)", "Asian Indian (only)"],
    ["Chinese (only)", "Filipino (only)", "Japanese (only)", "Korean (only)"],
    [
      "Vietnamese (only)",
      "Other Asian (only)",
      "Hawaiian (only)",
      "Guamanian (only)",
    ],
    ["Samoan (only)", "Other Pacific Islander (only)", "More than one race"],
  ];

  const [race, setRace] = useState(null);
  console.log(race);

  return (
    <div style={{ margin: "0 15% 0 15%" }}>
      <p>Race: {race}</p>
      <Form size="huge">
        <label>Select a Race!</label>
        <div>
          {raceGroups.map((raceGroup) => (
            <Form.Group widths="equal">
              {raceGroup.map((raceStr, i) => (
                <Form.Radio
                  label={raceStr}
                  value={i}
                  checked={i === race}
                  key={raceStr}
                  onChange={(e, { value }) => setRace(value)}
                />
              ))}
            </Form.Group>
          ))}
        </div>
      </Form>
    </div>
  );
};
