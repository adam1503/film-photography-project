import { useGlobalContext } from "./context";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCamera } from "react-icons/bs";
import { Link } from "react-router-dom";
import LikedBtn from "./LikedBtn";
import { useState } from "react";
import styled from "styled-components";

const Sidebar = () => {
  const { sidebar, closeSidebar, liked, rotate } = useGlobalContext();

  return (
    <Wrapper>
      <aside className={`sidebar ${sidebar && "show-sidebar"}`}>
        <div className="sidebar-header">
          <h1>Film Photography</h1>
          <button className="close-btn" onClick={closeSidebar}>
            <AiOutlineCloseCircle />
          </button>
        </div>
        {/* <div className="links"> */}
        <ul className="links">
          <li>
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeSidebar}>
              About
            </Link>
          </li>
          <Link to="/liked-photos" onClick={closeSidebar}>
            Liked photos ({liked.length})
          </Link>
        </ul>
        <div className="icon">
          <BsCamera className={`icon-img ${rotate && "rotate"}`} />
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    transform: translate(-100%);
    transition: all 0.3s linear;
    /* z-index: -1; */
  }
  h1 {
    font-family: "Fira Sans Extra Condensed", sans-serif;
    font-size: 3rem;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 100;
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .links a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: black;
    transition: all 0.1s linear;
    &:hover {
      color: #97ccf1;
    }
  }
  .icon {
    font-size: 10rem;
    text-align: center;
  }
  .icon-img {
    color: #97ccf1;
    transition: all 0.5s linear;
  }
  .rotate {
    transform: rotate(360deg);
  }

  @media screen and (min-width: 600px) {
    .sidebar {
      width: 400px;
    }
  }
  h1 {
    color: #97ccf1;
    font-weight: 500;
  }
  .close-btn {
    position: fixed;
    right: 1rem;
    top: 1.5rem;
    font-size: 2.2rem;
    background: none;
    color: gray;
    cursor: pointer;
    border: none;
    transition: all 0.1s linear;

    &:hover {
      color: gray;
      transform: scale(1.1);
    }
  }
`;

export default Sidebar;
