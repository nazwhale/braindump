import React, { Component } from "react";
import Tabletop from "tabletop";
import styled from "styled-components";

import SheetData from "./Components/SheetData";

const AppWrapper = styled.div`
  padding: 16px 64px;
`;

const SPREADSHEET_URL =
  "https://docs.google.com/spreadsheets/d/1nhUo0SXzfVKOnwVJ91wk2gG6fhDr9eAXNhZhkQDP4Ig/edit?usp=sharing";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.initTabletop();
  }

  initTabletop() {
    Tabletop.init({
      key: SPREADSHEET_URL,
      callback: this.showInfo,
      simpleSheet: true
    });
  }

  showInfo = (sheetData, tabletop) => {
    this.setState({ data: sheetData });
  };

  render() {
    const { data } = this.state;

    return (
      <AppWrapper>
        <h1>London restaurants</h1>
        {data === null ? "loading..." : <SheetData data={this.state.data} />}
      </AppWrapper>
    );
  }
}

export default App;
