const reducer = (state, action) => {
  if (action.type === "UPDATE_CATEGORY") {
    // const { value } = action.payload;
    return { ...state, category: action.payload };
  }
  if (action.type === "ADD_TO_LIKED") {
    const { id, image, title } = action.payload;
    const tempItem = state.liked.find((i) => i.id === id);
    if (!tempItem) {
      const newItem = {
        id,
        image,
        title,
      };
      return { ...state, liked: [...state.liked, newItem] };
    } else {
      return { ...state };
    }
  }

  if (action.type === "DELETE_PHOTOS") {
    return { ...state, liked: [] };
  }

  if (action.type === "DELETE_PHOTO") {
    const tempLiked = state.liked.filter((item) => item.id !== action.payload);
    return { ...state, liked: tempLiked };
  }
};

export default reducer;
