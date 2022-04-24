import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import remote from '../public/imgs/ico/remote.png';
export default function ServicesGrid() {
  return (
    <>
      <Grid>
        <OuterCard>
          <Link href="/">
            <InnerCard>
              <i className="icon-facebook" />
              <h3>Smart Home</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                laborum corrupti molestias. Numquam, dignissimos amet quisquam
                tempore error accusamus quos.
              </p>
              <LearnMore>
                Learn More
                <span>
                  <i className="icon-right-dir" />
                </span>
              </LearnMore>
            </InnerCard>
          </Link>
        </OuterCard>
        <OuterCard>
          <Link href="/">
            <InnerCard>
              <i className="icon-facebook" />
              <h3>Cinema Rooms</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                laborum corrupti molestias. Numquam, dignissimos amet quisquam
                tempore error accusamus quos.
              </p>
              <LearnMore>
                Learn More
                <span>
                  <i className="icon-right-dir" />
                </span>
              </LearnMore>
            </InnerCard>
          </Link>
        </OuterCard>
        <OuterCard>
          <Link href="/">
            <InnerCard>
              <i className="icon-facebook" />
              <h3>Design and Consultancy</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                laborum corrupti molestias. Numquam, dignissimos amet quisquam
                tempore error accusamus quos.
              </p>
              <LearnMore>
                Learn More
                <span>
                  <i className="icon-right-dir" />
                </span>
              </LearnMore>
            </InnerCard>
          </Link>
        </OuterCard>
        <OuterCard>
          <Link href="/">
            <InnerCard>
              <i className="icon-facebook" />
              <h3>Networks</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                laborum corrupti molestias. Numquam, dignissimos amet quisquam
                tempore error accusamus quos.
              </p>
              <LearnMore>
                Learn More
                <span>
                  <i className="icon-right-dir" />
                </span>
              </LearnMore>
            </InnerCard>
          </Link>
        </OuterCard>
        <OuterCard>
          <Link href="/">
            <InnerCard>
              <i className="icon-facebook" />
              <h3>CCTV</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                laborum corrupti molestias. Numquam, dignissimos amet quisquam
                tempore error accusamus quos.
              </p>
              <LearnMore>
                Learn More
                <span>
                  <i className="icon-right-dir" />
                </span>
              </LearnMore>
            </InnerCard>
          </Link>
        </OuterCard>
      </Grid>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 12rem 6rem;
  grid-gap: 2rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
  }
`;

const OuterCard = styled.div`
  box-shadow: 0px 0px 18px 8px rgba(0, 0, 0, 0.1);
  background: var(--teal);
  color: var(--white);
  border-radius: 3px;
`;
const InnerCard = styled.div`
  padding: 1.5rem;
  h3 {
    font-weight: 500;
    margin: 1rem 0;
    font-size: 1.5rem;

    span {
      font-size: 1.2rem;
      color: black;
    }
  }
  p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  i {
    color: white;
    font-size: 2rem;
    background: var(--white);
    color: black;
    border-radius: 2px;
  }
`;

const LearnMore = styled.div`
  border-bottom: 2px solid white;
  width: fit-content;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  span {
    i {
      color: white;
      font-size: 1rem;
      margin-left: 0;
      background: none;
    }
  }
`;
