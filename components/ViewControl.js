import styled from 'styled-components';
export default function ViewControl({ handleClick, option }) {
  const Control = ({ name, heading }) => {
    return (
      <p
        data-name={name}
        onClick={handleClick}
        className={option === name ? 'active' : ''}
      >
        {heading}
      </p>
    );
  };

  return (
    <Controls>
      <Control name="all" heading="All" />
      <Control name="smart-lighting" heading="Smart Lighting" />
      <Control name="home-cinema" heading="Home Cinema" />
      <Control name="home-automation" heading="Home Automation" />
    </Controls>
  );
}

const Controls = styled.div`
  display: flex;
  margin-bottom: 1rem;
  p {
    margin-right: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    font-family: 'Raleway', sans-serif;
    position: relative;
    font-size: 0.8rem;
    cursor: pointer;
  }
  .active {
    &:after {
      height: 0px;
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      height: 1px;
      bottom: -5px;
      background-color: black;
    }
  }
`;
