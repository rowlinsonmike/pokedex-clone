import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  .tile {
    width: 114px;
    height: 32px;
    ${({ color }) => {
      const [color1, color2] = color.split(",");
      return `background: linear-gradient(180deg, ${color1} 50%, ${color2} 50%);`;
    }}

    border: 2px solid #a4a4a4;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .type,
  .weakness {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      margin-top: 2px;
      margin-left: 2px;
      font-weight: bold;
      font-size: 0.7rem;
    }
  }

  & > * + * {
    margin-left: 10px;
  }
`;
export default function Type({ name, color }, key) {
  return (
    <Container key={key} color={color}>
      <span className="tile">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </span>
      <span className="type">
        <span>T</span>
      </span>
      <span className="weakness">
        <span>W</span>
      </span>
    </Container>
  );
}
