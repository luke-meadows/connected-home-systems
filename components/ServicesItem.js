import Image from 'next/image';
import styled from 'styled-components';
import home from '../public/imgs/home.png';
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
  height: 80vh;
  display: flex;
  flex-direction: ${(props) => (props.idx % 2 > 0 ? 'row' : 'row-reverse')};
`;

const ImageContainer = styled.div`
  width: 70%;
  position: relative;
`;

const ItemText = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 6rem;
  h3 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 2rem;
  }
  p {
    line-height: 2rem;
    margin-bottom: 2rem;
    color: var(--grey-text);
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
