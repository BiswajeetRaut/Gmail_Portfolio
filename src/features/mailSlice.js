import { createSlice } from "@reduxjs/toolkit";

var x = JSON.parse(localStorage.getItem('selectedMail'));
var Mail=null;
if(x){
  Mail = x;
}
export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: Mail,
    sendMessageIsOpen: false,
    searchFilter: "",
  },
  reducers: {
    selectMail: (state, action) => {
      console.log(action.payload);
      localStorage.setItem('selectedMail', JSON.stringify(action.payload));
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    selectFilter: (state,action) => {
      state.searchFilter = action.payload.filter;
    },
  },
});

export const { selectMail, openSendMessage, closeSendMessage, selectFilter } =
  mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectsearchFilter = (state) => state.mail.searchFilter;
export default mailSlice.reducer;
