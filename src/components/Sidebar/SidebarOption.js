import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, selected }) {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`} onClick={()=>{
      console.log("click about");
    }}>
      <Icon style={{height:`30px`,width:`30px`}}/>
      <h3 style={{fontSize:`15px`}}>{title}</h3>
    </div>
  );
}

export default SidebarOption;
