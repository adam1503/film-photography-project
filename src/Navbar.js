import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import LikedBtn from "./LikedBtn";

function Navbar() {
  const { toggleSidebar, sidebar } = useGlobalContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="title">
            Film Photography
          </Link>
          <button
            className={`nav-toggle ${sidebar && "rotate"}`}
            type="button"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <LikedBtn />
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    90deg,
    rgba(203, 233, 249, 0.9308765742625175) 0%,
    rgba(159, 159, 162, 1) 84%
  );

  .title {
    font-size: 2.3rem;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: "Fira Sans Extra Condensed", sans-serif;
    color: black;
  }

  .nav-links {
    display: none;
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    background: transparent;
    border: none;
    font-size: 1.7rem;
    cursor: pointer;
    transition: all 0.1s linear;

    :active {
      /* transform: scale(1.2); */
      /* transform: rotate(90deg); */
    }
  }
  .rotate {
    transform: rotate(90deg);
  }

  @media (min-width: 800px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;

      a {
        margin: 0 4rem;
        font-size: 2rem;
        font-weight: 500;
        text-transform: capitalize;
        font-family: "Fira Sans Extra Condensed", sans-serif;
        color: black;
        transition: all 0.1s linear;
        &:hover {
          color: #1f5565d6;
        }
      }
    }
  }
`;

export default Navbar;
