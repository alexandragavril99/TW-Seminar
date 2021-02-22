import React, { useState } from "react";

const RobotForm = (props) => {
  const { onAdd } = props;
  const [robotName, setRobotName] = useState("");
  const [robotMass, setRobotMass] = useState("");
  const [robotType, setRobotType] = useState("");

  const data = { robotName, robotType, robotMass };

  const submitForm = (e) => {
    e.preventDefault();
    onAdd(data);
  };

  return (
    <form>
      <label>
        Robot Name:
        <input
          id={"name"}
          type="text"
          value={robotName}
          onChange={(event) => setRobotName(event.target.value)}
        />
      </label>
      <label>
        Robot Type:
        <input
          id={"type"}
          type="text"
          value={robotType}
          onChange={(event) => setRobotType(event.target.value)}
        />
      </label>
      <label>
        Robot Mass:
        <input
          id={"mass"}
          type="text"
          value={robotMass}
          onChange={(event) => setRobotMass(event.target.value)}
        />
      </label>
      <input type="submit" value="add" onClick={submitForm} />
    </form>
  );
};

export default RobotForm;
