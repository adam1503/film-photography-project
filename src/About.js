import React from "react";
import styled from "styled-components";
import { RiDoubleQuotesL } from "react-icons/ri";

function About() {
  return (
    <>
      <Wrapper>
        <div className="section-center">
          {/* <div className="title-photo"> */}
          <h3 className="title">
            About me and my passion for <b>film photography</b>
          </h3>
          <div className="container">
            <div>
              <img
                src="./photos/me.jpg"
                alt="a photo of me"
                className="photo"
              />
              <div className="underline"></div>
            </div>
            {/* </div> */}
            <div className="desc-container">
              <h4 className="desc">
                &emsp; It all started some years ago when I bought my first
                camera from an old-aged man – he told me to take care of it, as
                he had used it to photograph a lot of his life’s years. It was
                my turn then. <br /> &emsp; It is a Zenit ET – a soviet camera
                from the 80’s. I always tell my friends that the camera does
                everything by itself: you just have to focus the lens and press
                the button – that’s how all the magic happens. When film is
                developed, you just mesmerize in front of the beauty of the
                photos – you couldn’t have imagined that all the details can be
                so charmingly highlighted by the camera. It covers every picture
                with poetic traits – <i>reflective, simple and enchanting</i>.
                <br />
                &emsp; I was instantly passionate about the ‘ritual’ that film
                photography requires. You cannot shoot everything because you
                have limited shots. You have to think before shooting – think
                about how and why you need to shoot something. Once the button
                is pressed, you cannot but smile and imagine how the photo will
                look.
                <br /> &emsp; Afterwards, for some time, I tend to let aside the
                used film in order to slightly forget what I shot. Then, after
                developing, I wholeheartedly rejoice of memories every picture
                evokes.
                <br /> &emsp; Film photography helps to picture my life in a{" "}
                <i>reflective, simple and enchanting way</i>.
              </h4>
              <RiDoubleQuotesL className="quotes" />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .section-center {
    width: 90vw;
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 2rem auto;
  }
  /* .container {
    max-width: 650px;
  } */

  .title {
    text-align: center;
    color: black;
    margin-bottom: 1.5rem;
    font-weight: 300;
    font-size: 2.3rem;
  }
  .photo {
    width: 100%;
    max-width: 80vw;
    height: 500px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
    border-radius: 15px;
  }
  .underline {
    width: 50%;
    max-width: 200px;
    height: 4px;
    border-radius: 10px;
    margin: 1.3rem auto;
    background: #97ccf1;
  }
  .desc-container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 80vw;

    /* max-width: 500px; */
    border: 2px solid rgb(125, 136, 164);
    border-radius: 25px;
    transition: all 0.1s linear;
  }
  .desc {
    font-weight: 300;
    font-size: 1.5rem;
    text-align: justify;
    padding: 15px 20px;
    color: black;
    font-family: "Fira Sans Extra Condensed", sans-serif;
  }
  .quotes {
    position: absolute;
    top: -17px;
    left: 7px;
    color: #97ccf1;
    font-size: 2rem;
    border: 2px solid #97ccf1;
    border-radius: 50%;
    background: white;
    transition: all 0.2s linear;
  }

  @media screen and (max-width: 1100px) {
    .container {
      max-width: 650px;
    }
  }

  @media screen and (min-width: 1100px) {
    .container {
      display: grid;
      width: 90vw;
      grid-template-columns: 1fr 1fr;
      column-gap: 1.5rem;
    }
    .photo {
      height: 100%;
      /* width: 100%; */
    }
    .desc-container {
      align-self: center;
      /* max-width: 320px; */
    }
    .underline {
      display: none;
    }
  }
  @media screen and (min-width: 1200px) {
    /* .container {
      grid-template-columns: 600px 400px;
    } */
  }
`;

export default About;
