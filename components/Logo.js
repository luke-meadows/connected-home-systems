import Image from 'next/image';
import LogoImage from '../public/logo.svg';
import styled from 'styled-components';
export default function Logo({ width }) {
  return (
    <StyledLogo width={width}>
      <ImageContainer>
        <Image src={LogoImage} layout="responsive" objectFit="contain" />
      </ImageContainer>
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  flex: 1 1 0px;
`;
const ImageContainer = styled.div`
  width: 200px;
  position: relative;
`;
