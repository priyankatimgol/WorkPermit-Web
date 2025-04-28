import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tabshow: '',
};

const statusSlice = createSlice({
  name: 'tabshow',
  initialState,
  reducers: {
    setTabShow: (state, action) => {
      state.tabshow = action.payload;
    },
  },
});

export const { setTabShow } = statusSlice.actions;
export const getTabShow = (state) => state.tabshow;

export default statusSlice.reducer;
