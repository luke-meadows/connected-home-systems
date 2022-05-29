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
  margin: 0rem 6rem 3rem 6rem;
`;

const ImageContainer = styled.div`
  border: 3px;
  overflow: hidden;
  width: 50%;
  position: relative;
  border-radius: 3px;
  margin-right: 3rem;
`;

const ItemText = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h3 {
    line-height: 2;
    color: var(--black);
    font-size: 1.8rem;
    font-weight: 400;
  }
  p {
    line-height: 2rem;
    margin-bottom: 1.2rem;
    font-weight: 300;
  }
  a {
    outline: none;
    border: none;
    background-color: var(--white);
    color: var(--teal);
    padding: 0.5rem 0.7rem 0.6rem 0.7rem;
    /* color: white; */
    border: 1px solid var(--teal);
    border-radius: 5px;
    font-size: 0.8rem;
    cursor: pointer;
    width: fit-content;
    font-weight: 400;

    &:hover {
      color: var(--teal);
      border-bottom: 1px solid var(--teal);
    }
  }
`;
