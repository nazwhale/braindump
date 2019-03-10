import React, { Component } from "react";
import Tabletop from "tabletop";
import styled from "styled-components";

import SheetData from "./Components/SheetData";

const AppWrapper = styled.div`
  background-color: #f4f7f6;
  padding: 16px 64px;
`;

const Footer = styled.footer`
  margin: 32px;
  text-align: center;
  text-size: 10px;
  font-weight: lighter;
  color: #a6a2a2;
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
      <>
        <AppWrapper>
          <h1>london restaurants</h1>
          <SheetData data={data} />
          <Footer>Curated by Joe, Marie, Caitlin, Rach, Jay, & Naz</Footer>
        </AppWrapper>
      </>
    );
  }
}

export default App;
