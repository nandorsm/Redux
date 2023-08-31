const initialState = ["Banana", "Maçã", "Morango"];

const fruitReducer = (state = initialState, action: { type?: any; fruit?: any; } ) => {
  switch (action.type) {
    case "ADD_FRUIT":
        const { fruit } = action
        return [...state, fruit]
    default:
      return state;
  }
};

export default fruitReducer;
