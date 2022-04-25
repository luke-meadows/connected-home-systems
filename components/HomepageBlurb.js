import styled from 'styled-components';
export default function HomepageBlurb() {
  return (
    <StyledBlurb>
      <p>
        We are connected home systems, we install technology systems into your
        home. Whether it be a new build or rennovation - from design to
        installation our experienced team of engineers can help you every step
        of the way.
        <span className="placeholder">
          **placeholder, needs to be rewritten**
        </span>
      </p>
    </StyledBlurb>
  );
}

const StyledBlurb = styled.div`
  padding: 6rem;
  p {
    font-weight: 500;
    font-size: 1.6rem;
    width: 80ch;
    color: var(--teal);
    margin: 0 auto;
  }
  .placeholder {
    color: red;
    opacity: 0.6;
    font-size: 0.8rem;
    margin-left: 10rem;
  }
`;
