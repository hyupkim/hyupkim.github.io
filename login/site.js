
  var firebaseConfig = {
    apiKey: "AIzaSyBdZK4K8JnEa5tmnZNVKwsccSNDn5d6Icg",
    authDomain: "hyupkim-bac0d.firebaseapp.com",
    databaseURL: "https://hyupkim-bac0d.firebaseio.com",
    projectId: "hyupkim-bac0d",
    storageBucket: "",
    messagingSenderId: "729156936814",
    appId: "1:729156936814:web:9dd383519f3ab184f8327f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      alert(`Hello ${user.email}`)
      $("#loginDiv").hide();
      $("#loggedIn").show();
      $("#loggedIn").append(`Hello ${user.email}`);
    } else {
      alert("No user!")
      $("#loggedIn").hide();
    }
  });
  
$().ready(function () {

    $("#logIn").on("click", function() {
        login();
    });

    $("#logOut").on("click", function() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        alert("sign out successful");
        $("#loginDiv").show();
      }).catch(function(error) {
        // An error happened.
      });
    })

    

      function login() {

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            alert(errorMessage);
            // ...
          });
      }
    

});