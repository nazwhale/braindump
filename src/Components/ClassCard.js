import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as Link } from "../link.svg";

const CardWrapper = styled.div`
  background-color: white;
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

const WebsiteLink = props => (
  <a href={props.website} target="_blank" rel="noopener noreferrer">
    <Link style={{ height: "16px" }} />
  </a>
);

export default class ClassCard extends Component {
  render() {
    const {
      name,
      area,
      level,
      teacher,
      price,
      website
    } = this.props.restaurant;
    let { imageUrl } = this.props.restaurant;

    if (imageUrl === "") {
      imageUrl = "https://fakeimg.pl/300x180";
    }

    return (
      <CardWrapper>
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
          <CardHeader>
            {name}{" "}
            <span style={{ margin: "0 8px" }}>
              {website !== "" && <WebsiteLink website={website} />}
            </span>
          </CardHeader>
          <p>{area}</p>
          <p>{level}</p>
          <p>{teacher}</p>
          <p>£{price}</p>
        </CardInfo>
      </CardWrapper>
    );
  }
}
