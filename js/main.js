// Initialize Firebase
var config = {
    apiKey: "AIzaSyAjufGqnzBmLJ1xqTxGRi7qYxbsladv84Q",
    authDomain: "contact-form-50fc4.firebaseapp.com",
    databaseURL: "https://contact-form-50fc4.firebaseio.com",
    projectId: "contact-form-50fc4",
    storageBucket: "contact-form-50fc4.appspot.com",
    messagingSenderId: "502129744358"
  };
  firebase.initializeApp(config);

 //Create Firebase
 var database = firebase.database();
   
  // Create Ref
  var ref=database.ref("contactForm");

function onSubmit(){
    // event.preventDefault();

   //create data 
  var name = document.getElementById("name").value;
  var company = document.getElementById("company").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value
    var data = {
        name:name,
        company:company,
        number:number,
        email:email,
        message:message
    }
    // push data
     ref.push(data);
}