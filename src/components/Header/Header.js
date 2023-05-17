import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout, side, selectSidebar } from "../../features/userSlice";
import { selectsearchFilter,selectFilter } from "../../features/mailSlice";
import { auth } from "../../firebase.js";
import logo_image from "../../features/logo_image.png"
import { useHistory } from "react-router-dom";
import { BuildTwoTone } from "@material-ui/icons";
function Header() {
  const user = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const sidebar = useSelector(selectSidebar);
  const searchfilter = useSelector(selectsearchFilter);
  const signOut = () => {
    // var y = alert("You want to sign out");
    console.log("signout")
  // if(y)
  // {   
    auth.signOut().then(() => {
      history.push('/login');
      dispatch(logout());
    });
  // }
  };
  const hamburger = ()=>{
    console.log(sidebar);
    dispatch(side(!sidebar));
  }
  const filterChange=()=>{
    var input = document.getElementById('input').value;
    console.log(input);
    dispatch(selectFilter({
      filter:input,
    }));
    console.log(searchfilter);
  }
  return (
    <div className="header">
      <div className="header-left">
        <IconButton className="hamburger-icon" onClick={hamburger}>
          <MenuIcon />
        </IconButton>
        <img
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRceIIBz4GgeNszaN5SupI6p1SJE_Bzgk3Q&usqp=CAU"
          src={logo_image}
          alt="gmail logo"
          onClick={()=>{
            window.location.replace('/about/emails');
            }}
        />
        <div onClick={()=>{
        window.location.replace('/about/emails');
        }}>BiswajeetRaut</div>
      </div>
      <div className="header-middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" onChange={filterChange} id='input'/>
        {/* <ArrowDropDownIcon className="header-inputCaret" /> */}
      </div>
      <div className="header-right">
        <Avatar src={user?.photoUrl} />
        <button className='sign-in-btn' onClick={signOut}>{user?"Sign Out":"Sign In"}</button>
      </div>
    </div>
  );
}

export default Header;
