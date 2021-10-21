import React, { useState } from "react";
import styled from "styled-components";
import Type from "./Type";
import Ability from "./Ability";
import VizSelect from "./VizSelect";
import ExpandArrow from "../../../assets/logout.png";
import Search from "../../../assets/search.png";
import Close from "../../../assets/close.png";

// :::'###:::::'######:::'######::'########:'########::'######::
// ::'## ##:::'##... ##:'##... ##: ##.....::... ##..::'##... ##:
// :'##:. ##:: ##:::..:: ##:::..:: ##:::::::::: ##:::: ##:::..::
// '##:::. ##:. ######::. ######:: ######:::::: ##::::. ######::
//  #########::..... ##::..... ##: ##...::::::: ##:::::..... ##:
//  ##.... ##:'##::: ##:'##::: ##: ##:::::::::: ##::::'##::: ##:
//  ##:::: ##:. ######::. ######:: ########:::: ##::::. ######::
// ..:::::..:::......::::......:::........:::::..::::::......:::

import Rayquaza from "../../../assets/rayquaza.png";
import Charizard from "../../../assets/charizard.png";
import Pikachu from "../../../assets/pikachu.png";
import Blastoise from "../../../assets/blastoise.png";
import Totadile from "../../../assets/totadile.png";
import Snorlax from "../../../assets/snorlax.png";

const Container = styled.div`
  position: relative;
  transition: 0.3s;
  margin-bottom: 35px;
  ${({ expanded }) => {
    if (expanded) {
      return "height: 600px;";
    } else {
      return "height: 100px;";
    }
  }}
  .selectors-min {
    ${({ expanded }) =>
      `
      opacity: ${!expanded ? 1 : 0};
      transition: all ${!expanded ? 150 : 50}ms linear ${
        !expanded ? 150 : 50
      }ms;
    `}
    display: flex;
    align-items: center;
    height: 90px;
    margin: 0 20%;
  }
  .tag-ctn {
    height: 40px;
    width: 130px;
    background: #a4a4a4;
    &:hover {
      background: #8b8b8b;
    }
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 10px;
    .tag {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
      p {
        font-weight: bold;
        letter-spacing: 1.5px;
        span {
          font-weight: inherit;
          letter-spacing: inherit;
        }
        & > span:nth-child(1) {
          color: #313131;
        }
        & > span:nth-child(2) {
          color: #fff;
          margin-left: 3px;
        }
      }
      button {
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #313131;
        outline: none;
        border: none;
        border-radius: 3px;
        margin-left: 10px;
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  .selectors {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr repeat(2, 1.2fr) 2fr 1fr;
    grid-template-rows: 5fr 2fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100%;
    ${({ expanded }) =>
      `
      opacity: ${expanded ? 1 : 0};
      transition: all ${expanded ? 150 : 50}ms linear ${expanded ? 150 : 50}ms;
    `}
    .col-1,
    .col-2 {
      height: 100%;
      display: flex;
      flex-direction: column;
      & > * + * {
        margin-top: 8px;
      }
    }
    .col-1 {
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
    .col-2 {
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
    .col-3 {
      margin-left: 4rem;
      grid-area: 1 / 4 / 2 / 5;
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

const NumberRange = styled.div`
  grid-area: 2 / 2 / 3 / 4;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 16px 0;
  span {
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    letter-spacing: 3px;
    height: 1.5rem;
    display: flex;
    align-items: center;
  }
  .number-range-input-ctn {
    display: flex;
    input {
      display: inline;
      width: 75px;
      height: 40px;
      padding: 8px;
      border-radius: 5px;
      outline: none;
      border: none;
    }
    span {
      height: 40px;
      width: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const OptionButtons = styled.div`
  grid-area: 2 / 4 / 3 / 5;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > * + * {
    margin-left: 10px;
  }
  button {
    transition: background 300ms;
    height: 53px;
    width: 137px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 700;
    letter-spacing: 2px;
    img {
      margin-right: 5px;
    }
    &:nth-child(1) {
      background: #a4a4a4;
      &:hover {
        background: #808080;
      }
    }
    &:nth-child(2) {
      background: #ed6b2f;
      &:hover {
        background: #e64901;
      }
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
      {!expanded && (
        <div className="selectors-min">
          <div className="tag-ctn">
            <div className="tag">
              <p>
                <span>Height:</span>
                <span>short</span>
              </p>
              <button>
                <img src={Close} alt="close" />
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="selectors">
        <div className="col-1">
          <h3>
            <span>Type & Weakness</span>
          </h3>
          {TypePills1.map(Type)}
        </div>
        <div className="col-2">
          <h3>
            <span>T = Type W = Weakness</span>
          </h3>
          {TypePills2.map(Type)}
        </div>
        <div className="col-3">
          <Ability />
          <VizSelect title="Height" options={[Pikachu, Charizard, Rayquaza]} />
          <VizSelect title="Weight" options={[Totadile, Blastoise, Snorlax]} />
        </div>
        <NumberRange className="number-range">
          <span>Number Range</span>
          <div className="number-range-input-ctn">
            <input type="text" placeholder="1" />
            <span>-</span>
            <input type="text" placeholder="898" />
          </div>
        </NumberRange>
        <OptionButtons>
          <button>Reset</button>
          <button>
            <img height="15px" src={Search} alt="search" />
            <label>Search</label>
          </button>
        </OptionButtons>
      </div>
      <div onClick={() => setExpanded(!expanded)} className="expander">
        <p>
          {expanded ? "Hide" : "Show"} Advanced Search
          <span>
            <img
              height="17.5px"
              width="17.5px"
              src={ExpandArrow}
              alt="expand-search"
              style={{
                transform: expanded ? "" : "rotate(180deg)",
                marginLeft: "7.5px",
                filter: "brightness(0) invert(1)",
              }}
            />
          </span>
        </p>
      </div>
    </Container>
  );
}
