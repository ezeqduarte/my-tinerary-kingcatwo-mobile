import { createReducer } from "@reduxjs/toolkit";
import showsActions from "../actions/showsActions";
const { getShows, deleteShows, editShows, createShows } = showsActions;

const initialState = {
  showsReducer: [],
};

const showsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getShows.fulfilled, (state, action) => {
    return { ...state, showsReducer: action.payload.showsUser };
  });

  builder.addCase(deleteShows.fulfilled, (state, action) => {
    return {
      ...state,
      showsReducer: state.showsReducer.filter(
        (show) => show._id != action.payload.idShowDeleted
      ),
    };
  });

  builder.addCase(editShows.fulfilled, (state, action) => {
    return {
      ...state,
      showsReducer: state.showsReducer
        .filter((show) => show._id != action.payload.idShowEdited._id)
        .concat(action.payload.idShowEdited),
    };
  });

  builder.addCase(createShows.fulfilled, (state, action) => {
    if (action.payload.success) {
      return {
        ...state,
        showsReducer: state.showsReducer.concat(action.payload.idShowCreated),
      };
    } else {
      return { ...state, showsReducer: state.showsReducer };
    }
  });
});

export default showsReducer;
