import { configureStore } from '@reduxjs/toolkit';
import checklistSlice from './Checklist/checklistSlice';
import refDataSlice from './RefDataStore/refDataSlice';
import signatureSlice from './Signature/signatureSlice';
import statusSlice from './StatusName/statusnameSlice';
import tabshowSlice from './Tabshow/tabshowSlice';
import processidSlice from './processId/processidSlice';

export const store = configureStore({
  reducer: {
    checklist: checklistSlice,
    signature: signatureSlice,
    statusName: statusSlice,
    processid: processidSlice,
    refdata: refDataSlice,
    tabshow: tabshowSlice,
  },
});
