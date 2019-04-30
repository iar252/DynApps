var admin = require("firebase-admin");

var serviceAccount = require("p./service_account_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dynapps-b6262.firebaseio.com"
});

var db = admin.database();
var ref = db.red('users');

//write data to the database
//.set is a firebase function that will overwrite data in our db
//.push allow us to write sets of data with unique entries
ref.set({

})

