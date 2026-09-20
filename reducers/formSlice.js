import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "Male",
    favouriteSubject: [],
    resume: "",
    url: "",
    choice: "",
    about: "",
};

const formSlice = createSlice({
  name: "choice",
  initialState,
  reducers: {
    setReduxFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFormRedux: () => initialState,
  },
});

export const { setReduxFormData, resetFormRedux } = formSlice.actions;
export default formSlice.reducer;
