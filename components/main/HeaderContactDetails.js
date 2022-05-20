import styled from 'styled-components';
export default function HeaderContactDetails() {
  return (
    <StyledDetails>
      <div className="row top">
        <i className="icon-phone" />
        <p>+447 41488 2844</p>
      </div>
      <div className="row bottom">
        <i className="icon-facebook" />
        <i className="icon-instagram" />
        <i className="icon-twitter" />
      </div>
    </StyledDetails>
  );
}

const StyledDetails = styled.div`
  flex: 1 1 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  i {
    font-size: 1.2rem;
    &:hover {
      color: var(--teal);
      cursor: pointer;
    }
  }
  .top {
    margin-bottom: 0.25rem;
  }
  .bottom {
    margin-top: 0.25rem;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;
