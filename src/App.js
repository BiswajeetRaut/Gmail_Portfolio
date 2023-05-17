import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./components/Mail/Mail";
import EmailList from "./components/EmailList/EmailList";
import SendMail from "./components/SendMail/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login/Login";
import { db } from "./firebase";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const [emails, setEmails] = useState([]);

  console.log("emails", emails);
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <Router>
       <Switch>
       <Route path="/login" exact><Login></Login></Route>
       <Route path="/" exact><HomePage/></Route>
        <div className="app">
          <Header />
          <div className="app-body">
            <Sidebar />
            <Switch>
              <Route path="/:type/mail" exact>
                <Mail />
              </Route>
              <Route path="/:type/emails">
                <EmailList emails={emails}/>
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
        </Switch>
    </Router>
  );
}

export default App;
