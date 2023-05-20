import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalArea = styled.div`
  position: relative;
  margin-bottom: 30px;
  width: calc(100vw - 20%);
  height: calc(100vh - 20%);
  margin: auto 0;
`;

export const ModalImg = styled.img`
  margin: 0 auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -40px;
  /* transform: (50px -20px); */
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.5);
  }
`;
