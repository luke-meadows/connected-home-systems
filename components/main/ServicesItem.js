import Image from 'next/image';
import styled from 'styled-components';
export default function ServicesItem({ item, idx }) {
  return (
    <ServicesItemContainer idx={idx}>
      <ImageContainer>
        <Image src={item.img} layout="fill" objectFit="cover" />
      </ImageContainer>
      <ItemText>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <a href="">
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
  flex-direction: ${(props) => (props.idx % 2 > 0 ? 'row-reverse' : 'row')};
  margin-bottom: 6rem;
`;

const ImageContainer = styled.div`
  width: 60%;
  position: relative;
`;

const ItemText = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 6rem;
  h3 {
    margin-bottom: 1rem;
    line-height: 1.5;
    color: var(--teal);
  }
  p {
    line-height: 2rem;
    margin-bottom: 1rem;
    font-weight: 300;
  }
  a {
    border-bottom: 1px solid black;
    padding-bottom: 0.4rem;
    width: fit-content;
    font-style: italic;
    font-size: 0.9rem;
    &:hover {
      color: var(--teal);
    }
  }
`;
