const initialState = ["Banana", "Maçã", "Morango"];

const fruitReducer = (state = initialState, action: { type: any; }) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitReducer;