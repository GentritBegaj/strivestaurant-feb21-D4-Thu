import React from "react";
import { Alert } from "react-bootstrap";

class MyAlert extends React.Component {
  render() {
    return <Alert variant="warning">This dish has ratings below 5</Alert>;
  }
}

export default MyAlert;
