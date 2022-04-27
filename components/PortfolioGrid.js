import styled from 'styled-components';
export default function PortfolioGrid() {
  const PortfolioGridItem = () => {
    return <GridItem>Item</GridItem>;
  };

  return (
    <Grid>
      <PortfolioGridItem />
      <PortfolioGridItem />
      <PortfolioGridItem />
      <PortfolioGridItem />
      <PortfolioGridItem />
      <PortfolioGridItem />
      <PortfolioGridItem />
      <PortfolioGridItem />
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin: 6rem;
`;
const GridItem = styled.div`
  aspect-ratio: 1;
  border: 1px solid black;
`;
