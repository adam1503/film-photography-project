import React from "react";
import { useContext, useState, useReducer, useEffect } from "react";
import { json } from "react-router-dom";
import App from "./App";
import data from "./data";
import reducer from "./reducer";
import styled from "styled-components";

const getLocalStorage = () => {
  let liked = localStorage.getItem("liked");
  if (liked) {
    return JSON.parse(localStorage.getItem("liked"));
  } else {
    return [];
  }
};

const initialState = {
  liked: getLocalStorage(),
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [images, setImages] = useState(data);
  const [id, setID] = useState(1);
  const [sidebar, setSidebar] = useState(false);
  const [alert, setAlert] = useState(false);
  const [category, setCategory] = useState("all");
  const [rotate, setRotate] = useState(false);

  const openSidebar = () => {
    setSidebar(true);
  };
  const toggleSidebar = () => {
    setSidebar(!sidebar);
    setTimeout(() => {
      setRotate(true);
    }, 400);
  };
  const closeSidebar = () => {
    setSidebar(false);
    setRotate(false);
  };

  const safety = (num) => {
    if (num < 0) {
      return data.length - 1;
    }
    if (num > data.length - 1) {
      return 0;
    }
    return num;
  };

  //next photo

  //!not working
  // const nextPhoto = () => {
  //   safety(setID(id + 1));
  // };
  //!working
  const nextPhoto = () => {
    setID((index) => {
      return safety(index + 1);
    });
  };

  //prev photo
  const prevPhoto = () => {
    setID((index) => {
      return safety(index - 1);
    });
  };

  // const filterImages = () => {
  //   if (category === "all") {
  //     setImages(data);
  //   } else {
  //     const filtered = data.filter((item) => item.category === category);
  //     setImages(filtered);
  //   }
  // };

  //new version of filtering images
  const filterImages = (e) => {
    let value = e.target.textContent;
    setCategory(value);
  };
  useEffect(() => {
    let photos = data;
    if (category === "all") {
      setImages(photos);
    } else {
      const filtered = photos.filter((item) => item.category === category);
      setImages(filtered);
    }
  }, [category]);

  //add to likedPage
  const addToLike = (id, image, title) => {
    dispatch({ type: "ADD_TO_LIKED", payload: { id, image, title } });
    setAlert(true);
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 1500);
  };

  //local storage
  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(state.liked));
  }, [state.liked]);

  //delete photoSSS
  const deletePhotos = () => {
    dispatch({ type: "DELETE_PHOTOS" });
  };

  //delete photo
  const deletePhoto = (id) => {
    dispatch({ type: "DELETE_PHOTO", payload: id });
  };
  return (
    <AppContext.Provider
      value={{
        images,
        filterImages,
        setID,
        id,
        sidebar,
        openSidebar,
        closeSidebar,
        ...state,
        addToLike,
        deletePhotos,
        deletePhoto,
        alert,
        toggleSidebar,
        nextPhoto,
        prevPhoto,
        category,
        rotate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const Wrapper = styled.div`
  .alert {
    position: absolute;
    top: 5rem;
  }
`;

export { AppContext, AppProvider };
