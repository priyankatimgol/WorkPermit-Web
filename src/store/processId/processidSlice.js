import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ProcessId: '',
};

const processIdSlice = createSlice({
  name: 'processid',
  initialState,
  reducers: {
    setProcessId: (state, action) => {
      state.ProcessId = action.payload;
    },
  },
});

console.log('StatusName', processIdSlice.reducer);

export const { setProcessId } = processIdSlice.actions;
export const getprocessid = (state) => state.processid.ProcessId;

export default processIdSlice.reducer;
