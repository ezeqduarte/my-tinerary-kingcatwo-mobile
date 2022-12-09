import { createReducer } from "@reduxjs/toolkit";
import reactionsActions from "../actions/reactionsActions";
const { reactions, likeDislike, getReactionsOfUser, deleteReaction } =
  reactionsActions;

const initialState = {
  allReactionsOfUser: [],
  refresh: false,
};

const reactionsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getReactionsOfUser.fulfilled, (state, action) => {
    if (action.payload.success) {
      return {
        ...state,
        allReactionsOfUser: action.payload.reactions,
        refresh: !state.refresh,
      };
    } else {
      return { ...state };
    }
  });

  builder.addCase(deleteReaction.fulfilled, (state, action) => {
    if (action.payload.success) {
      let stateFiltered = state.allReactionsOfUser.filter(
        (reaction) => reaction._id !== action.payload.reaction._id
      );
      return {
        ...state,
        allReactionsOfUser: stateFiltered,
        refresh: !state.refresh,
      };
    } else {
      return { ...state };
    }
  });
});

export default reactionsReducer;
