import React, { useEffect } from "react";
import "./Mail.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { selectOpenMail } from "../../features/mailSlice";
import { useSelector } from "react-redux";
function Mail() {
  const history = useHistory();

  const selectedMail = useSelector(selectOpenMail);
  useEffect(() => {
    var p= document.getElementById('mail_desc');
  if(p!=null)
  {
    console.log(selectedMail.description);
    p.innerHTML=selectedMail.description;
//     p.innerHTML=`
//     <style>
//     .img-section{
//       width: 350px;
//       height: 250px;
//       padding: 20px 0;
//       border-radius: 5px;
      
//   }
//   .img-section img{
//       width:100%;
//       height:100%;
//   }
//     </style>
//     <section>
//     <div id="page">
//         <div id="about" class="pageControl"></div>
//         <div class="experince-container-fluid">
//             <div class="container">
//                 <div class="section-box-container">
//                     <div class="experince-header"><h2 class="experince-header-set">All Contacts</h2></div>
//                     <div class="experince-header"><h3 class="experince-header-set"></h3></div>
//                     <br></br>
//                     <div class="about-container">
//                         <div class="about-me-section">
//                             <div class="about-text">
//                             V-academics is a one stop resource finder web-app for the VIT CSE Core students.
//                                                         <br></br>
//                             <b>Contacts:</b>
//                             <br></br>
//                             <a href="https://github.com/BiswajeetRaut" target="blank"><b>Github</b></a>
//                             <br></br>
//                             <a href="https://www.linkedin.com/in/biswajeet-raut-9b14b0267/" target="blank"><b>LinkedIn</b></a>
//                             <br></br>
//                             <a href="mailto:biswajeetraut382@gmail.com" target="blank">Send Email</a>
//                             <br></br>
//                             Also, you can send me message from the compose option in the sidebar menu.
//                             </div>
//                         </div>
//                     </div>                      
//                 </div>
//             </div>
//                   </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//     </div>
// </section>`
  }
  }, [selectedMail]);
  const {type} = useParams();
  console.log(type);
  var toBack = "/"+type+"/emails";
  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-toolsLeft">
          <IconButton onClick={() => history.push(toBack)}>
            <ArrowBackIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-bodyHeader">
          <div className="mail-subject">
            <h2>{selectedMail?.subject}</h2>
            <LabelImportantIcon className="mail-important" />
          </div>
          <p>{selectedMail?.title}</p>
          <p className="mail-time">{selectedMail?.time}</p>
        </div>

        <div className="mail-message">
          <p id="mail_desc"></p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
