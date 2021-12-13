import React, { useMemo, useRef, useEffect } from "react";
import styled, { css, createGlobalStyle } from "styled-components";

export function ViewHealthCube() {
  return (
    <>
      <UpperLeft>sound</UpperLeft>
      <UpperRight></UpperRight>
      <LowerLeft>
        <h2>0.0</h2>
        <h1>scor</h1>
      </LowerLeft>

      <LowerRight>
        <div> hmmm </div>
      </LowerRight>
    </>
  );
}

const base = css`
  position: absolute;
`;

const UpperLeft = styled.div`
  ${base}
  top: 40px;
  left: 50px;
`;

const UpperRight = styled.div`
  ${base}
  text-align: right;
  top: 40px;
  right: 50px;
`;

const LowerLeft = styled.div`
  ${base}
  bottom: 5px;
  left: 50px;
`;

const LowerRight = styled.div`
  ${base}
  bottom: 70px;
  right: 50px;
`;
