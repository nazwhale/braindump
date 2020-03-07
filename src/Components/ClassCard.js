import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as Link } from "../link.svg";

const CardWrapper = styled.div`
  background-color: white;
  width: 300px;
  overflow: hidden;
  border-radius: 15px;
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
      style,
      variant,
      level,
      dayOfWeek,
      teacher,
      price,
      time,
      website
    } = this.props.restaurant;
    let { imageUrl } = this.props.restaurant;

    if (imageUrl === "") {
      imageUrl =
        "https://cdn-az.allevents.in/events4/banners/08cdaaf2e6ca566f337d29d85531cbcf7b5f69aac6d8ba1a6237724303a83c4f-rimg-w506-h320-gmir.jpg?v=1578017579";
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
            {`${dayOfWeek}s`} with {teacher}
            <span style={{ margin: "0 8px" }}>
              {website !== "" && <WebsiteLink website={website} />}
            </span>
          </CardHeader>
          <p>{area}</p>
          <p>{level}</p>
          <p>
            {style} {variant}
          </p>
          <p>{time}</p>
          <p>£{price}</p>
        </CardInfo>
      </CardWrapper>
    );
  }
}
