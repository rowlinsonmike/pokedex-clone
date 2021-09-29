import React from "react";
import styled from "styled-components";
import SearchIcon from "../../../assets/search.png";
const Container = styled.div`
  color: #fff;
  width: 430px;
  display: flex;
  align-items: center;
  .left {
    .title {
      font-size: 1.6rem;
      margin-bottom: 10px;
    }
    .input-ctn {
      display: flex;
    }
    .input {
      height: 2rem;
      line-height: 1.6rem;
      width: 300px;
      font-size: 1rem;
      background: #fff;
      border: 2px solid grey;
      border-radius: 7px;
      outline: none;
      padding: 0 10px;
      margin-right: 1rem;
      &:focus {
        border: 2px solid pink;
      }
    }
    .search-btn {
      background: #ed6b2f;
      padding: 0.5rem 0.8rem;
      outline: none;
      border: none;
      border-radius: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .info {
      margin-top: 15px;
      font-size: 0.9rem;
      width: 380px;
    }
  }
  .right {
    margin-left: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .info {
      background: #4dad5b;
      font-size: 1.2rem;
      width: 420px;
      padding: 1rem;
      border-radius: 7px;
    }
  }
`;
export default function Search() {
  return (
    <Container className="search">
      <div className="left">
        <div className="title">Name or Number</div>
        <div className="input-ctn">
          <input type="text" className="input" />
          <button className="search-btn">
            <img src={SearchIcon} alt="search-icon" />
          </button>
        </div>
        <p className="info">
          Use the Advanced Search to explore Pokémon by type, weakness, Ability,
          and more!
        </p>
      </div>
      <div className="right">
        <p className="info">
          Search for a Pokémon by name or using its National Pokédex number.
        </p>
      </div>
    </Container>
  );
}
