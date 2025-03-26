const initialState = {
  GradBVA: {},
};
export const GradBVAReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GradBVA_ACTION":
      return {
        ...state,
        GradBVA: action.payload,
      };
    default:
      return state;
  }
};
