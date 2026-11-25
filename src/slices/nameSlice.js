import { createSlice, current } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: {
    value: ["sahil", "shravan", "om", "avinash", "aman"],
  },
  reducers: {
    addName: (state, action) => {
      state.value.push(action.payload);
    },
    deleteName: (state, action) => {
      state.value = state.value.filter((d, i) => i !== action.payload);
    },
    updateName: (state, action) => {
      const { id, name } = action.payload;
      state.value[id] = name;
    },
  },
});

export const { addName, deleteName, updateName } = nameSlice.actions;

export default nameSlice.reducer;
