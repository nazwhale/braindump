import React from "react";
import ReactQuill from "react-quill";

import styled from "styled-components";

const TodayDate = styled.h1`
  letter-spacing: 0.1rem;
`;

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function nth(d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    const date = new Date();
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = monthNames[date.getMonth()];
    var yyyy = date.getFullYear();
    const today = dd + nth(dd) + " " + mm + " " + yyyy;

    return (
      <>
        <TodayDate>{today}</TodayDate>
        <ReactQuill
          theme="bubble"
          placeholder="What's on your mind?"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </>
    );
  }
}
