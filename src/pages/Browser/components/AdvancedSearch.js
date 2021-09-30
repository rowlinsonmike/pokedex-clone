import React, { useState } from "react";
import styled from "styled-components";
import Type from "./Type";
const Container = styled.div`
  position: relative;
  transition: 0.3s;
  margin-bottom: 35px;
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
    ${({ expanded }) =>
      `
      opacity: ${expanded ? 1 : 0};
      transition: all ${expanded ? 150 : 50}ms linear ${expanded ? 150 : 50}ms;
    `}
    .type-1,
    .type-2 {
      height: 100%;
      display: flex;
      flex-direction: column;
      & > * + * {
        margin-top: 8px;
      }
    }
    .type-1 {
      grid-area: 1 / 2 / 2 / 3;
      h3 {
        color: #fff;
        margin-bottom: 1rem;
        font-size: 1.4rem;
        letter-spacing: 3px;
        height: 1.5rem;
        display: flex;
        align-items: center;
      }
    }
    .type-2 {
      margin-left: 2rem;
      grid-area: 1 / 3 / 2 / 4;
      h3 {
        height: 1.5rem;
        color: #fff;
        margin-bottom: 1rem;
        font-size: 0.7rem;
        display: flex;
        align-items: center;
      }
    }
    .stats {
      grid-area: 1 / 4 / 2 / 5;
      background: blue;
    }
  }
  .expander {
    color: #fff;
    position: absolute;
    bottom: -52px;
    left: 50%;
    height: 35px;
    transform: translate(-50%, -50%);
    background: #616161;
    padding: 5px;
    width: 400px;
    p {
      text-align: center;
    }
    &:hover {
      cursor: pointer;
    }
    &:before {
      content: "";
      left: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-bottom: 35px solid #fff;
      border-right: 35px solid transparent;
      position: absolute;
    }
    &:after {
      content: "";
      right: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-bottom: 35px solid #fff;
      border-left: 35px solid transparent;
      position: absolute;
    }
  }
`;

const TypePills1 = [
  { name: "Bug", color: "#729f3f,#729f3f" },
  { name: "Dragon", color: "#53a4cf, #f16e57" },
  { name: "Fairy", color: "#fdb9e9,#fdb9e9" },
  { name: "Fire", color: "#fd7d24,#fd7d24" },
  { name: "Ghost", color: "#7b62a3,#7b62a3" },
  { name: "Ground", color: "#f7de3f,#ab9842" },
  { name: "Normal", color: "#a4acaf,#a4acaf" },
  { name: "Psychic", color: "#f366b9,#f366b9" },
  { name: "Steel", color: "#9eb7b8,#9eb7b8" },
];
const TypePills2 = [
  { name: "Dark", color: "#707070,#707070" },
  { name: "Electric", color: "#eed535, #eed535" },
  { name: "Fighting", color: "#d56723,#d56723" },
  { name: "Flying", color: "#3dc7ef,#bdb9b8" },
  { name: "Grass", color: "#9bcc50,#9bcc50" },
  { name: "Ice", color: "#51c4e7,#51c4e7" },
  { name: "Poison", color: "#b97fc9,#b97fc9" },
  { name: "Rock", color: "#a38c21,#a38c21" },
  { name: "Water", color: "#4592c4,#4592c4" },
];
export default function AdvancedSearch() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Container expanded={expanded} className="advanced">
      <div className="selectors">
        <div className="type-1">
          <h3>
            <span>Type & Weakness</span>
          </h3>
          {TypePills1.map(Type)}
        </div>
        <div className="type-2">
          <h3>
            <span>T = Type W = Weakness</span>
          </h3>
          {TypePills2.map(Type)}
        </div>
        <div className="stats"></div>
      </div>
      <div onClick={() => setExpanded(!expanded)} className="expander">
        <p>{expanded ? "Hide" : "Show"} Advanced Search</p>
      </div>
    </Container>
  );
}
