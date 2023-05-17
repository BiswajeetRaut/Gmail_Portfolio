import { createSlice } from "@reduxjs/toolkit";
var displayName = localStorage.getItem("displayName")?localStorage.getItem("displayName"):"";
var photoURL = localStorage.getItem("photoURL")?localStorage.getItem("photoURL"):"";
var email = localStorage.getItem("email")?localStorage.getItem("email"):"";
var usr;
if(email == "" && photoURL == "" && displayName == "")
{
  usr=null;
}
else if(email !== "" && photoURL !== "" && displayName !== "")
{
  usr={
    displayName: displayName,
    email: email,
    photoUrl: photoURL,
  }
}
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: usr,
    sidebar: true,
  },
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", action.payload);
      localStorage.setItem("displayName", action.payload.displayName);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("photoURL", action.payload.photoUrl);
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("photoURL");
      localStorage.removeItem("email");
      localStorage.removeItem("displayName");
      state.user = null;
    },
    side : (state,action) =>{
        state.sidebar = action.payload;
    }
  },
});

export const { login, logout, side } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectSidebar = (state) => state.user.sidebar;

export default userSlice.reducer;
