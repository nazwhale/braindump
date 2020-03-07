import React, { Component } from "react";
import styled from "styled-components";
import ClassCard from "./ClassCard";

const SearchInput = styled.input`
  margin: -8px 0 1.5rem 0;
  width: 300px;
  border: none;
  border-bottom: 0.5px solid #a6a2a2;
  padding: 8px 0;
  background-color: inherit;
  font-size: 16px;
  color: #a6a2a2;

  &::placeholder {
    color: #a6a2a2;
  }

  &:focus {
    outline: none;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-template-rows: minmax(auto, max-content);
  grid-gap: 1.5rem;

  min-height: 100vh;
  max-width: 100%;
`;

class SheetData extends Component {
  state = {
    searchTerm: ""
  };

  searchFilter = () => {
    let arr = [];
    const { data } = this.props;
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i]["name"].toLowerCase().includes(this.state.searchTerm)) {
        arr.push(data[i]);
      }
    }

    return arr;
  };

  render() {
    let { data } = this.props;

    if (data === null)
      return (
        <CardWrapper style={{ margin: "0", color: "#A6A2A2" }}>
          loading...
        </CardWrapper>
      );

    // randomise order every time
    data.sort(function(a, b) {
      return 0.5 - Math.random();
    });

    data = this.searchFilter();

    return (
      <>
        <SearchInput
          placeholder="search something"
          onChange={e =>
            this.setState({ searchTerm: e.target.value.toLowerCase() })
          }
        />
        <CardWrapper>
          {data.map(row => {
            return <ClassCard restaurant={row} key={row.id} />;
          })}
        </CardWrapper>
      </>
    );
  }
}

export default SheetData;
