import Link from 'next/link';
import styled from 'styled-components';
export default function ServicesGrid() {
  return (
    <>
      <Grid>
        <h3>
          Desc of what CHS can offer.
          <br />
          <span>
            Think why does customer want it? Why are they on this webpage in the
            first place. What are their next port of calls?
          </span>
        </h3>
        <Link href="/">Smart Home</Link>
        <Link href="/">Cinema Rooms</Link>
        <Link href="/">Design and Consultancy</Link>
        <Link href="/">Networks</Link>
        <Link href="/">CCTV</Link>
      </Grid>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 12rem 6rem;
  grid-gap: 6rem;
  h3 {
    font-weight: 500;
    color: var(--teal);
    margin: 0 auto;
    font-size: 1.5rem;

    span {
      font-size: 1.2rem;
      color: black;
    }
  }
  a {
    /* border: 2px solid var(--black); */
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
    /* background-color: var(--teal); */
    border: 5px solid var(--teal);
    color: var(--teal);
  }
`;
