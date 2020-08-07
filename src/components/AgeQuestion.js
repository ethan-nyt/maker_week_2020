import React from "react";
import { Header, Button, Icon } from "semantic-ui-react";

export default ({ incrementPage, decrementPage, formData, setFormData }) => {
  return (
    <div>
      <Header as="h1" textAlign="center" style={{ marginTop: 200 }}>
        What's your age?
      </Header>
      <Header as="h2" textAlign="center">
        {formData.age}
      </Header>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="range"
          list="tickmarks"
          value={formData.age}
          onChange={(event) => {
            setFormData({ ...formData, age: Number(event.target.value) });
          }}
          min="13"
          max="54"
          style={{ width: 500 }}
        />

        <datalist id="tickmarks">
          <option value="0"></option>
          <option value="24"></option>
          <option value="34"></option>
          <option value="44"></option>
          <option value="54"></option>
        </datalist>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
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
  );
};
