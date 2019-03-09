import React, { Component } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RestaurantCard = styled.div`
  background-color: mediumseagreen;
  padding: 16px;
  margin: 8px 16px 16px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 0.1px 2px;
  width: 30%;
`;

const Restaurant = ({ props }) => {
  const {
    name,
    area,
    cuisine,
    meal,
    price,
    website,
    articles,
    comments,
    critic
  } = props;
  return (
    <RestaurantCard>
      <h3>{name}</h3>
      <p>
        {cuisine} ({meal})
      </p>
      <p>{area}</p>
      <p>£{price}</p>
    </RestaurantCard>
  );
};

class SheetData extends Component {
  render() {
    const { data } = this.props;

    return (
      <CardWrapper>
        {data.map(row => {
          return <Restaurant props={row} key={row.name} />;
        })}
      </CardWrapper>
    );
  }
}

export default SheetData;
