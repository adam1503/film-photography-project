import styled from "styled-components";
import { useGlobalContext } from "./context";
import data from "./data";

const Buttons = () => {
  const categories = ["all", ...new Set(data.map((item) => item.category))];

  const { filterImages, category } = useGlobalContext();

  return (
    <Wrapper>
      <div className="btn-container">
        {categories.map((c, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={filterImages}
              className={`filter-btn ${
                category === c.toLowerCase() && "active-btn"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn-container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 3rem;
    width: 80vw;
  }
  /* !to add an animation with size growing when hovered */
  .filter-btn {
    margin: 0 13px;
    padding: 7px;
    border-radius: 10px;
    border: none;
    background: white;
    cursor: pointer;
    transition: all 0.2s linear;
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: capitalize;
    &:hover {
      background: linear-gradient(
        90deg,
        rgba(220, 236, 245, 0.9308765742625175) 0%,
        rgba(159, 159, 162, 1) 100%
      );
    }
    &:active {
      transform: scale(1.2);
    }
  }

  .active-btn {
    background: linear-gradient(
      90deg,
      rgba(220, 236, 245, 0.9308765742625175) 0%,
      rgba(159, 159, 162, 1) 100%
    );
  }
  @media screen and (max-width: 500px) {
    .filter-btn {
      margin: 0;
      padding: 5px;
      &:hover {
        transform: scale(1);
      }
      &:active {
        transform: scale(1.2);
      }
    }
    .active-btn {
      transform: scale(1);
    }
  }
  @media screen and (min-width: 750px) {
    .filter-btn {
      font-size: 22px;
    }
  }

  @media screen and (min-width: 750px) {
    .filter-btn {
      margin: 0 16px;
    }
  }
`;

export default Buttons;
