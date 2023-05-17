import { Checkbox, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RedoIcon from "@material-ui/icons/Redo";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "../Section/Section";
import EmailRow from "../EmailRow/EmailRow";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { selectsearchFilter } from "../../features/mailSlice";
import { useSelector } from "react-redux";
function EmailList() {
  const {type} = useParams();
  const searchFilter = useSelector(selectsearchFilter);
  console.log(type);
  if(type==undefined)
  {
    type="about";
  }
  const [emails, setemails] = useState([]);
  useEffect(() => {
    db.collection('emails').doc(type).collection('Emails').onSnapshot(snapshot=>{
      setemails(
        snapshot.docs.map((doc) => {
          return({
          id: doc.id,
          data: doc.data(),
          })
        }
        )
      )
      console.log(emails);
      
      console.log(emails);
    })
  }, [type]);
  return (
    <div className="emailList">
      <div className="emailList-list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => {

          if(to.toLowerCase().includes(searchFilter.toLowerCase())||subject.toLowerCase().includes(searchFilter.toLowerCase()) )
          {
            return(<EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />)
          }
        }
        )
        }
      </div>
    </div>
  );
}

export default EmailList;
