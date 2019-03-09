import React, { Component } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  max-width: 100%;
  margin-left: -12px;
  margin-right: -12px;
`;

const RestaurantCard = styled.div`
  background-color: white;
  margin: 12px;
  width: 300px;
  overflow: hidden;
`;

const CardImageWrapper = styled.div`
  width: 300px;
  overflow: hidden;
`;

const CardImage = styled.div`
  width: inherit;
  min-height: 180px;
  max-height: 180px;
  overflow: hidden;
  transition: all 0.5s;

  max-width: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardInfo = styled.div`
  padding: 8px 16px;
  font-size: 14px;
`;

const CardHeader = styled.h5`
  font-size: 14px;
  margin: 1em 0;
`;

const Restaurant = ({ props }) => {
  const { name, area, cuisine, meal, price, imageUrl } = props;

  return (
    <RestaurantCard>
      <CardImageWrapper>
        <CardImage>
          <img
            src={imageUrl}
            style={{ width: "inherit", height: "inherit" }}
            alt={`${name}`}
          />
        </CardImage>
      </CardImageWrapper>
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

    if (data === null)
      return <CardWrapper style={{ margin: "0" }}>loading...</CardWrapper>;

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
