import { styled } from "styled-components";

interface IProps {
  w?: string;
  h?: string;
  t?: string;
  b?: string;
  l?: string;
  r?: string;
  mh?: string;
  m?: string;
  p?: string;
  fd?: string;
  jc?: string;
  ai?: string;
  fw?: string;
  aSelf?: string;
  bg?: string;
  ff?: string;
  mw?: string;
  zI?: number;
  br?: string;
  boxS?: string;
  gap?: string;
  overflow?: string;
  cursor?: string;
  border?: string;
  position?: string;
  transition?: string;
}

export const FBox = styled.div<IProps>`
  display: flex;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  min-height: ${(props) => props.mh};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  flex-direction: ${(props) => props.fd};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  flex-wrap: ${(props) => props.fw};
  align-self: ${(props) => props.aSelf};
  background-color: ${(props) => props.bg};
  transition: ${(props) => props.transition};
  font-family: ${(props) => props.ff};
  box-shadow: ${(props) => props.boxS};
  max-width: ${(props) => props.mw};
  z-index: ${(props) => props.zI};
  gap: ${(props) => props.gap};
  border-radius: ${(props) => props.br};
  border: ${(props) => props.border};
  cursor: ${(props) => props.cursor};
  overflow: ${(props) => props.overflow};
  position: ${(props) => props.position};
  top: ${(props) => props.t};
  bottom: ${(props) => props.b};
  left: ${(props) => props.l};
  right: ${(props) => props.r};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin: 0px 10px;
`;
