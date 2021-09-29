import React from "react";
import styled from "styled-components";
import Search from "./components/Search";
import AdvancedSearch from "./components/AdvancedSearch";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr) 60%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100%;
  .search {
    background: #313233;
    width: 100%;
    padding: 0 15%;
    grid-area: 1 / 1 / 2 / 2;
  }
  .advanced {
    background: #616161;
    width: 100%;
    grid-area: 2 / 1 / 3 / 2;
  }
  .content {
    background: red;

    grid-area: 3 / 1 / 4 / 2;
  }
`;
export default function Browser() {
  return (
    <Container>
      <Search />
      <AdvancedSearch />
      <div className="content"></div>
    </Container>
  );
}
