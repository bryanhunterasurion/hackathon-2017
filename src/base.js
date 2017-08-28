var Rebase = require('re-base');
var firebase = require('firebase');

var app = firebase.initializeApp({
    apiKey: "AIzaSyDMP56XXsnbQ3xgJ62vmJ5tcSBpRCgWY4s",
    authDomain: "hackathon-2017-a89a3.firebaseapp.com",
    databaseURL: "https://hackathon-2017-a89a3.firebaseio.com",
    storageBucket: "hackathon-2017-a89a3.appspot.com",
    messagingSenderId: "760009280285"
});

var base = Rebase.createClass(app.database());

export default base;
