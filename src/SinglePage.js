import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import data from "./data";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import { AiOutlineLike } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const SinglePage = () => {
  const { id, liked, addToLike, nextPhoto, prevPhoto } = useGlobalContext();
  const found = data.find((item) => item.id === id);
  const { desc, image, title, alert } = found;
  const ifLiked = liked.find((i) => i.id === id);

  useEffect(() => {
    window.scrollTo(0, 130);
  }, []);

  return (
    <>
      <Wrapper>
        <div className="btns-container">
          <div className="buttons">
            <button className="btn prev-btn" onClick={prevPhoto}>
              <BsFillArrowLeftCircleFill />
            </button>
            <button className="btn next-btn" onClick={nextPhoto}>
              <BsFillArrowRightCircleFill />
            </button>
          </div>
        </div>
        <div className="section-center">
          <h1 className="title">{title}</h1>
          <div className="photo-desc">
            {desc && <h4>{desc}</h4>}
            <img src={image} alt="photo" className="photo" />
          </div>

          {!ifLiked && (
            <button
              className="like-btn"
              onClick={() => addToLike(id, image, title)}
            >
              <AiOutlineLike />
            </button>
          )}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .section-center {
    width: 90vw;
    display: grid;
    justify-items: center;
    margin: 1rem auto;
  }
  .title {
    width: 70vw;
    text-align: center;
    margin-top: 1rem;
  }
  /* .header {
    text-align: center;
    width: 400px;
  } */
  .photo-desc {
    display: grid;
    row-gap: 0.5rem;
    margin: 0.5rem 0;
    width: 80%;
    justify-content: center;
  }

  .photo {
    margin: auto;
    width: 100%;
    height: 350px;
    object-fit: cover;
    display: block;
    border-radius: 20px;
    transition: all 0.2s linear;
    box-shadow: 0px 3px 22px 10px rgba(0, 0, 0, 0.2);

    /* grid-column: 1; */
  }

  /* .btns-container {
    display: grid;
    justify-content: center;
    margin-top: 5px;
  } */
  /* .buttons {
    display: flex;
    justify-content: space-between;
    width: 90vw;
  } */
  .buttons {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    height: 3rem;
    left: 0;
    right: 0;
    padding: 0 10px;
    margin: 12rem auto;
  }
  .btn {
    font-size: 3.5rem;
    border: none;
    background: transparent;
    color: #6a95a3d6;
    transition: all 0.1s linear;
    cursor: pointer;
    &:hover {
      color: #6a95a3;
    }
    &:active {
      transform: scale(1.1);
    }
  }

  .link:active {
    transform: scale(1.2);
  }

  .like-btn {
    margin-bottom: 1rem;
    width: 3rem;
    font-size: 2.5rem;
    background: transparent;
    color: black;
    border: none;
    transition: all 0.1s linear;
    cursor: pointer;
    &:hover {
      color: rgba(0, 0, 0, 0.5);
      transform: scale(1.1);
    }
  }
  .like-btn:active {
    color: #84d5edd6;
  }

  h1 {
    color: black;
    font-size: 2rem;
    font-weight: 300;
  }
  h4 {
    width: 85%;
    /* max-width: 500px; */
    text-align: justify;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    color: black;
    /* color: #050579; */
    text-transform: none;
    line-height: 1.5rem;
    font-weight: 400;
    font-size: 1.3rem;
    /* letter-spacing: 0.6px; */
    padding: 1rem 1.7rem;
    border-radius: 25px;
    background: linear-gradient(
      14deg,
      rgba(255, 246, 246, 1) 31%,
      rgba(18, 117, 189, 0.2) 80%
    );
  }
  @media screen and (max-width: 800px) {
    .buttons {
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 800px) {
    .section-center {
      margin: 0 auto;
    }
    .header {
      margin: 0 auto;
    }
    .photo-desc {
      margin: 1rem 0;
      grid-template-columns: 350px 300px;
      column-gap: 1.5rem;
    }
    .photo {
      grid-column: 1;
    }
    h4 {
      width: 300px;
      display: flex;
      align-items: center;
      top: 15px;
      grid-column: 2;
      grid-row: 1;
    }
  }
  @media screen and (min-width: 900px) {
    .photo-desc {
      grid-template-columns: 400px 330px;
    }
    h4 {
      width: 330px;
    }
  }
  @media screen and (min-width: 1000px) {
    .photo-desc {
      grid-template-columns: 450px 350px;
    }
    h4 {
      width: 350px;
    }
  }
  @media screen and (min-width: 1200px) {
    .photo-desc {
      grid-template-columns: 500px 450px;
    }
    .photo {
      grid-row: 1;
      grid-column: 1 / -1;
      height: 550px;
    }

    h4 {
      margin-top: 1rem;
      grid-row: 2;
      grid-column: 1 / -1;
      width: 800px;
    }
    .buttons {
      max-width: 1200px;
    }
  }
`;

export default SinglePage;
