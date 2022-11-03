import { useGlobalContext } from "./context";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineLike } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

import Alert from "./Alert";

const Images = () => {
  const { images, addToLike, deletePhoto, setID, alert, liked } =
    useGlobalContext();
  return (
    <Wrapper>
      <div className="section-center">
        {images.map(({ id, image, title }) => {
          const ifLiked = liked.find((i) => i.id === id);
          return (
            <article key={id} className="menu-item">
              <div className={`container ${ifLiked && "photo-liked"}`}>
                <img src={image} alt="name" className="photo " />
                <Link
                  to="/singlepage"
                  className="link"
                  onClick={() => setID(id)}
                >
                  <FaSearch />
                </Link>
                {!ifLiked && (
                  <button
                    className="like-btn"
                    onClick={() => addToLike(id, image, title)}
                  >
                    <AiOutlineLike />
                  </button>
                )}
                {ifLiked && (
                  <button
                    className="delete-btn"
                    onClick={() => deletePhoto(id)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                )}
                {/* <button
                  className="like-btn"
                  onClick={() => addToLike(id, image, title)}
                >
                  <AiOutlineLike />
                </button> */}
              </div>
              <div className="item-info">
                <header>
                  <h4 className="title-two">{title}</h4>
                </header>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section-center {
    display: grid;
    justify-items: center;
    row-gap: 3rem;
    width: 90vw;
    margin: 0 auto;
    max-width: 1000px;
  }
  .menu-item {
    display: grid;
    row-gap: 1rem;
    max-width: 35rem;
  }

  @media screen and (min-width: 750px) {
    .menu-item {
      grid-template-columns: 350px 1fr;
      width: 30rem;
      gap: 0 1.25rem;
      align-items: center;
    }
    .photo {
      height: 175px;
    }
  }
  @media screen and (min-width: 1200px) {
    .section-center {
      width: 95vw;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }

    .photo {
      height: 150px;
    }
    .menu-item {
      grid-template-rows: 350px 1fr;
      align-items: center;
    }
  }

  .photo {
    width: 100%;
    height: 320px;
    object-fit: cover;
    display: block;
    border-radius: 18px;
    transition: all 0.2s linear;
  }

  .title-two {
    text-transform: capitalize;
    font-size: 1.5rem;
    letter-spacing: 1px;
    font-family: "Fira Sans Extra Condensed", sans-serif;
    color: black;
    text-align: center;
  }

  .item-text {
    text-align: center;
    padding-top: 1rem;
  }
  .container {
    position: relative;
    background: black;
    border-radius: 20px;
    transition: all 0.1s linear;
  }
  .photo-liked {
    border: 2px solid #7eaebed6;
    box-shadow: 0px 3px 22px 10px rgba(0, 0, 0, 0.2);
  }
  .link {
    position: absolute;
    left: 43%;
    top: 40%;
    font-size: 2.5rem;
    color: white;
    cursor: pointer;
    /* border: solid 3px white; */
    padding: 7px;
    border-radius: 50%;
    /* background-color: gray; */
    opacity: 0;
    transition: all 0.2s linear;
    &:hover {
      color: #84d5edd6;
    }
  }
  .link:active {
    color: #84d5edd6;
  }
  .like-btn {
    position: absolute;
    bottom: 5%;
    left: 7%;
    font-size: 2.5rem;
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    padding: 0;
    animation: bounce 1s ease-in-out infinite;
    opacity: 0;
    &:hover {
      color: #dbddec;
    }
    &:action {
      transform: scale(1.2);
    }
  }
  .delete-btn {
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
      color: #dbddec;
    }
    &:action {
      transform: scale(1.2);
    }
  }
  .like-btn:active {
    color: #84d5edd6;
  }
  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .container:hover img {
    opacity: 0.5;
    box-shadow: 0px 3px 22px 10px rgba(0, 0, 0, 0.2);
  }
  .container:hover .link {
    opacity: 1;
  }
  .container:hover .like-btn {
    opacity: 1;
  }
  .container:hover .delete-btn {
    opacity: 1;
  }
`;

export default Images;
