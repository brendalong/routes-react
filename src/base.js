import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
    apiKey: "ReallyLongNumberGoesHere",
    authDomain: "your-database.firebaseapp.com",
    databaseURL: "https://your-database.firebaseio.com"
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

/* for my demo. Be sure to put to include your own database
apiKey: "AIzaSyA60-RA1ZHZRXrmmAH-gsp1h7OpRFYWugY",
authDomain: "d18-demo.firebaseapp.com",
databaseURL: "https://d18-demo.firebaseio.com"
*/

export default base;