# Gmail Portfolio with React Js

A Gmail Portfolio in which you can sign in with your Google Account, compose a new e-mail and send realtime emails to me and also view my details.

Click demo to try it by yourself!

## Author
Biswajeet Raut

### How to run the project

You can run the Project by:

1. First make a firebase project and in the firestore add emails collection to it.
2. Datastore design: emails(collections) --> docs(about,comments,personal_comments,contact,eductaion,skills,projects) --> in each doc we have collection Emails --> doc - id, data - (to,message,timestamp,subject) 
3. Setup Firebase google authentication.
4. yarn install
5. yarn start 


