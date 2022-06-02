import Image from 'next/image';
import LogoImage from '../../public/logo.svg';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Logo({ width, setMobileNavActive }) {
  const router = useRouter();
  return (
    <StyledLogo width={width}>
      <Link href="/" onClick={() => setMobileNavActive(false)}>
        <ImageContainer>
          <Image src={LogoImage} layout="responsive" objectFit="contain" />
        </ImageContainer>
      </Link>
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  flex: 1 1 0px;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  width: 200px;
  position: relative;
  @media only screen and (max-width: 1000px) {
    width: 130px;
  }
`;
