import styled from 'styled-components';
export default function HeaderContactDetails() {
  return (
    <StyledDetails>
      <div className="row">
        <i class="icon-phone" />
        <p>+447 4148828</p>
      </div>
      {/* <div className="row"></div> */}
    </StyledDetails>
  );
}

const StyledDetails = styled.div`
  flex: 1 1 0px;
  display: flex;
  justify-content: flex-end;
  i {
    font-size: 1.2rem;
  }
  .row {
    display: flex;
    align-items: center;
  }
  p {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;
