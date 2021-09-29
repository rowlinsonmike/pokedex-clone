import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  transition: 0.3s;
  ${({ expanded }) => {
    if (expanded) {
      return "height: 500px;";
    } else {
      return "height: 40px;";
    }
  }}
  .selectors {
    display: grid;
    grid-template-columns: 1fr repeat(2, 1.2fr) 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100%;
    .type-1 {
      grid-area: 1 / 2 / 2 / 3;
      background: red;
      height: 100%;
    }
    .type-2 {
      grid-area: 1 / 3 / 2 / 4;
      background: white;
    }
    .stats {
      grid-area: 1 / 4 / 2 / 5;
      background: blue;
    }
  }
  .expander {
    color: #fff;
    position: absolute;
    bottom: -20px;
    left: 45%;
    background: #616161;
    padding: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;
export default function AdvancedSearch() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Container expanded={expanded} className="advanced">
      <div className="selectors">
        <div className="type-1"></div>
        <div className="type-2"></div>
        <div className="stats"></div>
      </div>
      <div onClick={() => setExpanded(!expanded)} className="expander">
        <p>Show Advanced Search</p>
      </div>
    </Container>
  );
}