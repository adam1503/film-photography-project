import React from "react";
import styled from "styled-components";

const Alert = () => {
  return (
    <>
      <Wrapper>
        <div className="alert-container">
          <div className="container">
            <h3>Photo added to the liked list</h3>
            {/* <div className="animation"> */}
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
            {/* </div> */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .alert-container {
    position: fixed;
    top: 2%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0 15px;
    width: 300px;
    /* height: 140px; */
    background: linear-gradient(
      14deg,
      rgba(246, 246, 246, 1) 40%,
      rgba(194, 212, 252, 1) 88%
    );
    z-index: 100;
    /* display: grid;
    align-items: center;
    justify-content: center; */
    /* padding-bottom: 15px; */
    border-radius: 15px;
    box-shadow: 0px 3px 22px 10px rgba(0, 0, 0, 0.54);
  }
  .container {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  /* @media screen and (min-width: 600px) {
    left: 28%;
  } */

  /* @media screen and (min-width: 750px) {
    left: 28%;
  } */

  /* @media screen and (min-width: 900px) {
    left: 32%;
    width: 350px;
  }
  @media screen and (min-width: 1200px) {
    left: 39%;
    
  } */
  h3 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 450;
    color: black;
    margin-bottom: -25px;
    padding-top: 14px;
  }

  .animation {
    /* position: absolute; */
    /* padding: 0; */
    /* bottom: 0; */
    /* left: 43%; */
    /* left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto; */
    /* margin-bottom: 0; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* background-color: transparent; */
  }

  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: black;
    /* stroke: rgba(185, 183, 183, 0.6); */
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }

  .checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: black;
    stroke-miterlimit: 10;
    margin: 10% auto;
    box-shadow: inset 0px 0px 0px #97ccf1;
    animation: fill 0.4s ease-in-out 0.4s forwards,
      scale 0.3s ease-in-out 0.9s both;
  }

  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes scale {
    0%,
    100% {
      transform: none;
    }

    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }

  @keyframes fill {
    100% {
      box-shadow: inset 0px 0px 0px 30px #97ccf1;
    }
  }
`;

export default Alert;
