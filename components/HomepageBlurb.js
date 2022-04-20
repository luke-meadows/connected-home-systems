import styled from 'styled-components';
export default function HomepageBlurb() {
  return (
    <StyledBlurb>
      <p>
        We are connected home systems. We install technology systems into your
        home. Whether it be a new build or rennovation - From design to
        installation our experienced engineers can help you every step of the
        way.
      </p>
    </StyledBlurb>
  );
}

const StyledBlurb = styled.div`
  padding: 6rem;
  p {
    font-weight: 500;
    font-size: 1.2rem;
    width: 70ch;
    color: var(--teal);
    margin: 0 auto;
  }
`;
