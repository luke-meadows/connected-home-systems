import Image from 'next/image';
import styled from 'styled-components';
export default function ServicesItem({ item, idx }) {
  return (
    <ServicesItemContainer idx={idx}>
      <ImageContainer idx={idx}>
        <Image src={item.img} layout="fill" objectFit="cover" />
      </ImageContainer>
      <ItemText>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <a href={`/services/${item.category}`}>
          <span> Learn More</span>
        </a>
      </ItemText>
    </ServicesItemContainer>
  );
}

const ServicesItemContainer = styled.div`
  overflow: hidden;
  height: 65vh;
  display: flex;
  /* flex-direction: ${(props) =>
    props.idx % 2 > 0 ? 'row-reverse' : 'row-reverse'}; */
  margin-bottom: 3rem;
`;

const ImageContainer = styled.div`
  /* border-top-left-radius: ${(props) => (props.idx % 2 > 0 ? '3px' : '0')}; */
  border-top-right-radius: ${(props) => (props.idx % 2 > 0 ? '3px' : '3px')};
  /* border-bottom-left-radius: ${(props) =>
    props.idx % 2 > 0 ? '3px' : '0'}; */
  border-bottom-right-radius: ${(props) => (props.idx % 2 > 0 ? '3px' : '3px')};

  overflow: hidden;
  width: 50%;
  position: relative;
`;

const ItemText = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 6rem 0 3rem;
  h3 {
    margin-bottom: 1rem;
    line-height: 1.5;
    color: var(--teal);
    font-size: 1.5rem;
  }
  p {
    line-height: 2rem;
    margin-bottom: 1rem;
    font-weight: 300;
  }
  a {
    border-bottom: 1px solid var(--black);
    color: var(--black);
    padding-bottom: 0.4rem;
    width: fit-content;
    font-style: italic;
    font-size: 0.9rem;
    &:hover {
      color: var(--teal);
      border-bottom: 1px solid var(--teal);
    }
  }
`;
