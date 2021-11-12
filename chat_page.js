var firebaseConfig = {
    apiKey: "AIzaSyCfwzgO7R6mRFyrf4TQDD5aXKvPyPliFno",
    authDomain: "let-s-chat-web-app-5c07a.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-5c07a-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-5c07a",
    storageBucket: "let-s-chat-web-app-5c07a.appspot.com",
    messagingSenderId: "986308324723",
    appId: "1:986308324723:web:9e22f7e7f6a26e1fa9a906"
  };
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig); 


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}