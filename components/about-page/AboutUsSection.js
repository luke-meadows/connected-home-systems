import styled from 'styled-components';
export default function AboutUsSection() {
  return (
    <StyledAbout>
      <h2 className="">About us</h2>
      <p>
        For over 15 years we have been improving people&apos;s homes and
        lifestyles, solving problems through technology. Over this time, we
        built long term relationships with hundreds of clients who benefit from
        our innovation, experience and expertise.
      </p>
      <p>
        With our knowledge and experience we can offer a complete range of
        services. Whatever you require, we can provide the complete solution.
        From concept to completion, we can guide you through the options
        available by offering sound professional advice and the right products,
        backed up with expert installation and after care service.
      </p>
      <p>
        Technology today is becoming more and more advanced. Your TV now
        connects to the internet allowing for video streaming; games consoles
        enable you to play against your global friends; your music system can
        stream thousands of albums that you don&apos;t own; the lights in your
        home can turn on when you enter a room and off again when you leave and
        your heating knows when and how you like the temperature set by learning
        your routines. These are just some of the capabilities of a smart home
        which are achievable through independent products and multiple
        interfaces but our aim is to make the smart home a simple home.
      </p>
      <p>
        Simple to use, a truly smart home should be intuitive and effortless. No
        more switching from one app to another or multiple remote controls
        cluttering up the coffee table. It can monitor and change according to
        the internal and external environment. Multiple events can occur at the
        press of a single button. We can design systems that enable control over
        every aspect of a smart home from a single user interface, these systems
        are fully adaptable so as things change the system can be reprogrammed
        to suit.
      </p>
      <p>
        All of this technology is all well and good, but it relies on a solid
        backbone. If the infrastructure it is using to communicate is not up to
        standard then undoubtedly it will fail or there may be constant issues.
        We are passionate about cabling and we truly understand the importance
        of infrastructure.
      </p>
      <p>
        With ever evolving technology, we are at the forefront to assist you
        through the ongoing developments and future proofing. We like to cable
        for what we know is needed today, but also know it&apos;s critical to
        install cabling for what may be required tomorrow.
      </p>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  padding: 4rem 6rem 4rem 6rem;
  h2 {
    margin-bottom: 2rem;
  }
  p {
    line-height: 2;
    margin-top: 1rem;
  }
`;
