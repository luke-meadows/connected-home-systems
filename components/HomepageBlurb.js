import styled from 'styled-components';
export default function HomepageBlurb() {
  return (
    <StyledBlurb>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui debitis
        officiis alias cumque itaque error magni culpa voluptate dolorum, quo
        aperiam autem soluta distinctio natus, eligendi amet modi, porro eum
        cupiditate quis sapiente.
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
