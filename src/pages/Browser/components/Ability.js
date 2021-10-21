import React, { useState } from "react";
import styled from "styled-components";
import Pokeball from "../../../assets/pokeball-50.png";
import Arrow from "../../../assets/arrow.png";

const Container = styled.div`
  grid-area: 1 / 4 / 2 / 5;
  width: 356px;
  h3 {
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    letter-spacing: 3px;
    height: 1.5rem;
    display: flex;
    align-items: center;
  }
  .dropdown {
    position: relative;
    cursor: pointer;
    .selected {
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      background-color: #313131;
      color: #ffffff;
      label {
        cursor: pointer;
        display: flex;
        align-items: center;
        width: 320px;
        height: 41px;
        margin-left: 10px;
        & > * + * {
          cursor: pointer;
          margin-left: 10px;
        }
      }
      .arrow {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 41px;
      }
    }
    .content {
      cursor: pointer;
      display: ${({ expand }) => (expand ? "flex" : "none")};
      background-color: #a4a4a4;
      position: absolute;
      left: 0;
      right: 0;
      flex-direction: column;
      overflow-y: scroll;
      overflow-x: hidden;
      padding-top: 10px;
      max-height: 350px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      .ability {
        background-color: transparent;
        padding: 0.75em 3.125% 0.675em;
        margin-left: 10px;
        &:hover {
          color: #4dad5b;
          background-color: #313131;
        }
      }
    }
  }
`;
export default function Ability() {
  const [expand, setExpand] = useState(false);
  return (
    <Container expand={expand}>
      <h3>
        <span>Ability</span>
      </h3>
      <div onClick={() => setExpand(!expand)} className="dropdown">
        <div className="selected">
          <label>
            <img
              height="25px"
              width="25px"
              src={Pokeball}
              alt="pokeball-icon"
            />
            <span>All</span>
          </label>
          <div className="arrow">
            <span>
              {" "}
              <img
                height="15px"
                width="15px"
                style={{ transform: expand ? "rotate(180deg)" : "" }}
                src={Arrow}
                alt="expand-arrow"
              />
            </span>
          </div>
        </div>
        <div className="content">
          <div className="ability">ability 1</div>
          <div className="ability">ability 1</div>
          <div className="ability">ability 1</div>
          <div className="ability">ability 1</div>
          <div className="ability">ability 1</div>
          <div className="ability">ability 1</div>
          <div className="ability">ability 1</div>
          <div className="ability">ability 1</div>
          <div className="ability">ability 1</div>
          <div className="ability">ability 1</div>
        </div>
      </div>
    </Container>
  );
}
