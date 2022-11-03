import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import { RiDeleteBin6Line, RiH3 } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const LikedPage = () => {
  const { liked, deletePhotos, deletePhoto, setID } = useGlobalContext();
  return (
    <main>
      <Wrapper>
        <div className="section-center">
          {liked.length > 0 ? (
            <>
              <h1>Liked photos</h1>
              <Link className="back-link" to="/">
                Back to all photos
              </Link>
            </>
          ) : (
            <>
              <h2>No liked photos...</h2>{" "}
              <Link to="/" className="back-link">
                Back to all photos
              </Link>
            </>
          )}
          <div className="photos">
            {liked.map((item) => {
              const { id, image } = item;
              return (
                <article className="photo-item" key={id}>
                  <img src={image} alt="photo" className="photo" />
                  <div className="options">
                    <Link
                      to="/singlepage"
                      onClick={() => setID(id)}
                      className="link"
                    >
                      <FaSearch />
                    </Link>
                    <button onClick={() => deletePhoto(id)} className="btn">
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="photos1">
            {liked.map((item) => {
              const { id, image, title } = item;
              return (
                <article key={id} className="photo1-item">
                  <div className="container">
                    <img src={image} alt="image" className="photo1" />
                    <div className="title-container">
                      <h3 className="title">{title}</h3>
                    </div>
                    <Link
                      to="/singlepage"
                      className="link1"
                      onClick={() => setID(id)}
                    >
                      <FaSearch />
                    </Link>
                    <button
                      className="trash-btn"
                      onClick={() => deletePhoto(id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          {liked.length > 0 && (
            <button onClick={deletePhotos} className="delete-btn">
              Delete all photos
            </button>
          )}
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .section-center {
    width: 90vw;
    display: grid;
    justify-items: center;
    margin: 2rem auto;
  }
  .photos {
    width: 90vw;
    display: grid;
    justify-items: center;
  }
  .photos1 {
    display: none;
  }

  .photo-item {
    display: grid;
    grid-template-columns: 330px 1fr;
    width: 25rem;
    margin: 1.5rem 0;
  }

  @media screen and (max-width: 500px) {
    /* .photo-item {
      width: 90vw;
    } */
    .photo-item {
      grid-template-columns: 85% 1fr;
      width: 90vw;
    }
  }
  @media screen and (min-width: 800px) {
    .photos {
      width: 95vw;
      grid-template-columns: 1fr 1fr;
    }
    .photo-item {
      grid-template-columns: 300px 1fr;
      width: 24rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .photos {
      display: none;
    }
    .photos1 {
      display: grid;
      width: 95vw;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 1.5rem 0;
      row-gap: 3rem;
    }
  }

  .photo {
    width: 100%;
    height: 270px;
    object-fit: cover;
    object-position: center;
    display: block;
    border-radius: 20px;
  }
  .options {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .btn,
  .link {
    font-size: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.1s linear;
    color: black;
    &:hover {
      transform: scale(1.1);
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .link {
    font-size: 1.5rem;
  }
  .delete-btn {
    font-size: 1.3rem;
    margin: 1.5rem 10px;
    background: rgba(185, 183, 183, 0.4);
    border: none;
    border-radius: 10px;
    padding: 10px 10px;
    cursor: pointer;
    transition: all 0.1s linear;
    color: rgba(3, 2, 2, 0.687);
    &:hover {
      background: #a7d1ee;
      /* transform: scale(1.1); */
    }
  }

  .back-link {
    color: black;
    font-size: 1.2rem;
    animation: bounce1 1s ease-in-out infinite;
    transition: all 0.1s linear;
    margin-bottom: 1.5rem;
    &:hover {
      color: #97ccf1;
      /* transform: scale(1.1); */
    }
  }

  //style for media 1200
  .photos1 {
    width: 95vw;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .container {
    position: relative;
    background: black;
    border-radius: 20px;
  }
  .photo1-item {
    display: grid;
    width: 320px;
  }
  .photo1 {
    width: 100%;
    height: 320px;
    object-fit: cover;
    display: block;
    border-radius: 18px;
    transition: all 0.2s linear;
  }
  .link1 {
    position: absolute;
    left: 7%;
    bottom: 2%;
    font-size: 2.2rem;
    color: white;
    cursor: pointer;
    padding: 7px;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.2s linear;
    &:hover {
      color: #84d5edd6;
    }
  }
  .trash-btn {
    position: absolute;
    bottom: 5%;
    right: 7%;
    font-size: 2.5rem;
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    padding: 0;
    opacity: 0;
    &:hover {
      color: #84d5edd6;
    }
  }
  .title-container {
    position: absolute;
    width: 200px;
    height: 100px;
    top: 10%;
    right: 20%;
    background: transparent;
    opacity: 0;
  }
  .title {
    font-family: "Fira Sans Extra Condensed", sans-serif;
    position: absolute;
    text-align: center;
    color: #8badb7e8;
    font-size: 2.3rem;
    top: 0;
    right: 5%;
    z-index: 7;
    opacity: 0;
  }
  .container:hover img {
    opacity: 0.3;
    box-shadow: 0px 3px 22px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .container:hover .link1 {
    opacity: 1;
  }
  .container:hover .trash-btn {
    opacity: 1;
  }
  .container:hover .title {
    opacity: 1;
  }
  .container:hover .title-container {
    opacity: 1;
  }
`;

export default LikedPage;
