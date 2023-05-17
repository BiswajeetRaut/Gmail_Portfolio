import { Button, IconButton, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import SidebarOption from "./SidebarOption";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";
import InfoIcon from '@material-ui/icons/Info';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import { selectSidebar, selectUser } from "../../features/userSlice";
import InsertCommentIcon from '@material-ui/icons/InsertComment';
function Sidebar() {
  const sidebar = useSelector(selectSidebar);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(history.location.pathname.split("/")[1]);
  const [path, setpath] = useState("");
  var selectArr = [true,false,false,false,false];
  const user = useSelector(selectUser);
  const [index, setindex] = useState(0);  
  const [about, setabout] = useState(true);
  const [education, seteducation] = useState(false);
  const [skills, setskills] = useState(false);
  const [exp, setexp] = useState(false);
  const [contact, setcontact] = useState(false);
  const [project, setproject] = useState(false);
  const [comments, setcomments] = useState(false);
  useEffect(() => {
  setpath(history.location.pathname.split("/")[1]?history.location.pathname.split("/")[1]:"");
  console.log(path);
  }, []);
  const select=(number)=>{
    console.log(number);
    console.log(index);
    if(selectArr==index)
    {
    }
    else{
      selectArr[number]=true;
      selectArr[index]=false;
      for(let i=0; i<selectArr.length; i++)
      {
        if(i!=number && i!=index)
        {
          selectArr[i]=false;
        }
      }
      setabout(selectArr[0]);
      seteducation(selectArr[1]);
      setskills(selectArr[2]);
      setexp(selectArr[3]);
      setcontact(selectArr[4]);
      setproject(selectArr[5]);
      setcomments(selectArr[6]);
      setindex(number);
    }
  }
  // select(2);
  return (
    <>
    {sidebar && (<div className="sidebar">
      <Button
        className="sidebar-compose"
        onClick={() =>{ 
          if(user)
          {
          dispatch(openSendMessage());
          }
          else{alert("Please SignIn and send Mail")}
          }}
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>
      <div onClick={()=>{
        select(0);
        history.push('/about/emails');
      }}>
      <SidebarOption Icon={InfoIcon} title="About"  selected={about}/>
      </div>
      <div onClick={()=>{
        select(1);
        history.push('/education/emails');
      }}>
      <SidebarOption Icon={SchoolIcon} title="Education"  selected={education}/>
      </div>
      <div onClick={()=>{
        select(2);
        history.push('/skills/emails');
      }}>
      <SidebarOption Icon={StarIcon} title="Skills"  selected={skills} />
      </div>
      <div onClick={()=>{
        select(3);
        history.push('/experience/emails');
      }}>
      <SidebarOption Icon={WorkIcon} title="Experience"  selected={exp} />
      </div>
      <div onClick={()=>{
        select(5);
        history.push('/project/emails');
      }}>
      <SidebarOption Icon={NoteIcon} title="Projects"  selected={project}/>
      </div>
      <div onClick={()=>{
        select(4);
        history.push('/contact/emails');
      }}>
      <SidebarOption Icon={PhoneIcon} title="Contact"  selected={contact}/>
      </div>
      <div onClick={()=>{
        select(6);
        history.push('/comments/emails');
      }}>
      <SidebarOption Icon={InsertCommentIcon} title="Comments"  selected={comments}/>
      </div>
    </div>)}
    </>
  );
}

export default Sidebar;
