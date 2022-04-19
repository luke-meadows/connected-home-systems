import styled from 'styled-components';
export default function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: none;
  border: 1px solid blue;
`;
