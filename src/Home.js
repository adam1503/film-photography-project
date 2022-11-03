import { useState } from "react";
import Buttons from "./Buttons";
import Images from "./Images";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import LikedPage from "./LikedPage";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Home = () => {
  const { setShowSidebar } = useGlobalContext();

  const [arrowTop, setArrowTop] = useState(false);

  window.addEventListener("scroll", () => {
    const windowScroll = window.scrollY;
    if (windowScroll > 500) {
      setArrowTop(true);
    } else {
      setArrowTop(false);
    }
  });

  return (
    <main>
      <Wrapper>
        <Buttons />
        <Images />
        {arrowTop && (
          <div className="arrow-top" onClick={() => window.scroll(0, 0)}>
            <BsFillArrowUpCircleFill />
          </div>
        )}
      </Wrapper>

      <Sidebar />
    </main>
  );
};

const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  padding: 3rem 0;

  .title {
    text-align: center;
    margin-bottom: 7px;
  }
  .underline {
    margin-top: 5px;
    width: 10rem;
    height: 7px;
    background: gray;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
  }
  .arrow-top {
    position: fixed;
    font-size: 3.5rem;
    right: 1.5rem;
    bottom: 1.5rem;
    cursor: pointer;
    color: #7eaebe;
    transition: all 0.1s linear;
    :hover {
      color: #a7d1ee;
    }
    :active {
      transform: scale(1.2);
    }
  }
`;

export default Home;
