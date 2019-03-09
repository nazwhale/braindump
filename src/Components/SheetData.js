import React, { Component } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RestaurantCard = styled.div`
  background-color: white;
  margin: 8px 16px 16px 0;
  width: 300px;
`;

const CardImage = styled.div`
  width: inherit;
  height: 180px;
  overflow: hidden;
`;

const CardInfo = styled.div`
  padding: 0 16px;
  font-size: 14px;
`;

const CardHeader = styled.h5`
  font-size: 14px;
  padding-bottom: 0;
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
    critic,
    imageUrl
  } = props;
  return (
    <RestaurantCard>
      <CardImage>
        <img src={imageUrl} style={{ width: "inherit" }} alt={`${name}`} />
      </CardImage>
      <CardInfo>
        <CardHeader>{name}</CardHeader>
        <p>
          {cuisine} ({meal})
        </p>
        <p>{area}</p>
        <p>£{price}</p>
      </CardInfo>
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
