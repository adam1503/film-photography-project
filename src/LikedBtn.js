import React from "react";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

function LikedBtn() {
  const { closeSidebar, liked } = useGlobalContext();
  return (
    <Wrapper className="like-btn-wrapper">
      <Link to="/liked-photos" className="liked-btn" onClick={closeSidebar}>
        <AiFillLike className="btn" />
        {liked.length > 0 && (
          <span className="liked-value">{liked.length}</span>
        )}
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .liked-btn {
    display: none;
  }

  @media (min-width: 800px) {
    .liked-btn {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      transition: all 0.1s linear;
      color: black;

      &:active {
        transform: scale(1.2);
      }
    }
  }

  .liked-value {
    position: absolute;
    font-size: 1.7rem;
    font-weight: 500;
    margin-left: 5px;
    color: white;
    top: -19px;
    right: -8px;
    &:active {
      color: blue;
    }
  }
  .show-value {
    opacity: 1;
  }
`;

export default LikedBtn;
