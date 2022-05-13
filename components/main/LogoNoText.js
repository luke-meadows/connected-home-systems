import Image from 'next/image';
import LogoImage from '../../public/logoNoText.svg';
import styled from 'styled-components';
export default function LogoNoText({ width }) {
  return (
    <StyledLogo width={width}>
      <ImageContainer>
        <Image src={LogoImage} layout="fill" objectFit="contain" />
      </ImageContainer>
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  flex: 1 1 0px;
  max-width: 100px;
  height: 100px;
`;
const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;
