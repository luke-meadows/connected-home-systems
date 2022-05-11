import styled from 'styled-components';
export default function AboutUsSection() {
  return (
    <StyledAbout>
      <h2>About us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        pariatur dolor voluptates sint nam ea quis animi culpa, et, tempore quam
        qui nobis impedit voluptas fugit earum delectus! Expedita minima sed
        atque architecto culpa perferendis officia, asperiores laboriosam ullam
        dicta quod vero quas rem illo natus numquam iste ipsa molestiae incidunt
        labore corporis nisi deleniti? Sapiente placeat repellendus deserunt
        facere a.
      </p>
      <p>
        Magnam quia delectus molestiae, culpa deserunt quos animi error ab
        voluptates dolorum officiis aspernatur ullam temporibus magni placeat
        cupiditate cum accusamus recusandae repellat consequuntur quam sapiente
        sed. Recusandae iste totam cupiditate. Commodi beatae, voluptatum
        ducimus voluptatem nemo, quod aperiam temporibus assumenda neque illum
        libero reiciendis quis suscipit reprehenderit perferendis similique non.
      </p>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  padding: 3rem 6rem 6rem 6rem;
  h2 {
    margin-bottom: 2rem;
  }
  p {
    line-height: 2;
    margin-top: 1rem;
  }
`;
