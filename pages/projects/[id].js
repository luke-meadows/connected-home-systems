import Image from 'next/image';
import styled from 'styled-components';
import IMG from '../../public/imgs/service-imgs/smart-home.jpg';
import ContactSection from '../../components/main/ContactSection';
import Cinema from '../../public/imgs/ico/Cinema icon.jpg';
import Control from '../../public/imgs/ico/Control icon.jpg';
import SmartLighting from '../../public/imgs/ico/Lighting Icon.jpg';
import Multiroom from '../../public/imgs/ico/Multiroom icon.jpg';
import Network from '../../public/imgs/ico/Network icon.jpg';
export default function ProjectPage() {
  const serviceIcons = {
    'smart-lighting': SmartLighting,
    control: Control,
    'home-cinema': Cinema,
    'media-room': Cinema,
    multiroom: Multiroom,
    network: Network,
  };
  const data = {
    title: 'Coventry',
    completionDate: 'March 2022',
    img: '',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tenetur cum omnis sequi eligendi eos adipisci, illum consequuntur numquam debitis quisquam,',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tenetur cum omnis sequi eligendi eos adipisci, illum consequuntur numquam debitis quisquam, totam ex quia fugit eius ab! Eaque, amet corrupti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tenetur cum omnis sequi eligendi eos adipisci, illum consequuntur numquam debitis quisquam, totam ex quia fugit eius ab! Eaque, amet corrupti.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tenetur cum omnis sequi eligendi eos adipisci, illum consequuntur numquam debitis quisquam, totam ex quia fugit eius ab! Eaque, amet corrupti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tenetur cum omnis sequi eligendi eos adipisci, illum consequuntur numquam debitis quisquam, totam ex quia fugit eius ab! Eaque, amet corrupti.',
    ],

    services: [
      'smart-lighting',
      'control',
      'media-room',
      'multiroom',
      'network',
      'home-cinema',
    ],
  };
  return (
    <>
      <PageContainer>
        <HeaderStyles style={{}}>
          <p>{data.completionDate}</p>
          <h2>{data.title}</h2>
        </HeaderStyles>
        <Top>
          <ImageContainer>
            <Image src={IMG} layout="responsive" objectFit="cover" />
          </ImageContainer>
          <div>
            <p className="header">Job spec: </p>
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Spacer />
            <p className="header">Technology we installed: </p>
            <IconsContainer>
              {data.services.map((service) => {
                const img = serviceIcons[service];
                return (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginRight: '2rem',
                    }}
                  >
                    <IconContainer key={service}>
                      <Image src={img} layout="responsive" alt="" />
                    </IconContainer>
                    <p>
                      {service[0].toLocaleUpperCase() +
                        service.slice(1, service.length).replace(/-/g, ' ')}
                    </p>
                  </div>
                );
              })}
            </IconsContainer>
          </div>
        </Top>
      </PageContainer>
      <ContactSection />
    </>
  );
}

const PageContainer = styled.div`
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
  padding: 3rem 6rem;
`;

const HeaderStyles = styled.div`
  align-items: flex-end;
  margin-bottom: 3rem;
  h2 {
    color: var(--black);
    margin-bottom: 0;
  }
  p {
    margin-bottom: 1rem;
    color: var(--black);
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const Top = styled.div`
  display: flex;
  p {
    line-height: 1.5;
    margin-bottom: 1rem;
    max-width: 100ch;
  }
  .header {
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 1.8rem;
  p {
    font-size: 0.8rem;
  }
`;

const IconContainer = styled.div`
  position: relative;
  width: 4rem;
  margin-bottom: 0.5rem;
`;
const ImageContainer = styled.div`
  position: relative;
  min-width: 25rem;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 3rem;
`;

const Spacer = styled.div`
  height: 2rem;
`;