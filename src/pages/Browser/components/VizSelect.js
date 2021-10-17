import React from "react";
import styled from "styled-components";

const Height = styled.div`
  margin-top: 2rem;
  h3 {
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    letter-spacing: 3px;
    height: 1.5rem;
    display: flex;
    align-items: center;
  }
  .options {
    display: flex;
    justify-content: space-between;
  }
`;
const BodyTypeOption = styled.div`
  width: 90px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ed6b2f;
    img {
      filter: brightness(0) invert(1);
    }
  }
`;

export default function VizSelect({ title, options }) {
  const Option = (item, idx) => (
    <BodyTypeOption className="option">
      <img height="45px" src={item} alt="option" />
    </BodyTypeOption>
  );
  return (
    <Height className="body-type">
      <h3>{title}</h3>
      <div className="options">{options.map(Option)}</div>
    </Height>
  );
}
