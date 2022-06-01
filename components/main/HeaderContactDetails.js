import styled from 'styled-components';
export default function HeaderContactDetails() {
  return (
    <StyledDetails>
      <div className="contact">
        {/* <div className="row top">
          <i className="icon-phone" />
          <p>+447 41488 2844</p>
        </div> */}
        <div className="row bottom">
          <a
            target="blank"
            href="https://www.facebook.com/connectedhomesystems"
          >
            <i className="icon-facebook" />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/connected_home_systems/"
          >
            <i className="icon-instagram" />
          </a>
          <a target="blank" href="https://twitter.com/ConnectedJon">
            <i className="icon-twitter" />
          </a>
        </div>
      </div>
      <i className="icon-menu" />
    </StyledDetails>
  );
}

const StyledDetails = styled.div`
  flex: 1 1 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .icon-menu {
    display: none;
  }
  @media only screen and (max-width: 800px) {
    .contact {
      display: none;
    }
    .icon-menu {
      display: initial;
    }
  }
  i {
    font-size: 1.2rem;
    &:hover {
      color: var(--teal);
      cursor: pointer;
    }
  }
  .top {
    margin-bottom: 0.25rem;
    p {
      font-weight: 400;
    }
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
