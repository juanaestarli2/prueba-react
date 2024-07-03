import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: -webkit-fill-available; 
  max-width: 100%;
  
  `;
export const CarouselSlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: -webkit-fill-available; 
  max-width: 45vw;
`;
export const Slide = styled.div`
  flex: 0 0 100%;
`;
export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;
export const Dot = styled.button<{ isActive: boolean; }> `
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin: 0 4px;
  /* TODO: THEME */
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
