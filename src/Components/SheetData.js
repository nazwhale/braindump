import React, { Component } from "react";
import styled from "styled-components";
import RestaurantCard from "./RestaurantCard";

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 1.5rem;

  min-height: 100vh;
  max-width: 100%;
`;

class SheetData extends Component {
  render() {
    const { data } = this.props;

    if (data === null)
      return <CardWrapper style={{ margin: "0" }}>loading...</CardWrapper>;

    return (
      <CardWrapper>
        {data.map(row => {
          return <RestaurantCard restaurant={row} key={row.name} />;
        })}
      </CardWrapper>
    );
  }
}

export default SheetData;
