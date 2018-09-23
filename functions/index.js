const functions = require('firebase-functions');
const admin = require('firebase-admin');
// const { CONFIG } = require("./../front-end/src/config");
const serviceAccount = require("./config.json");

// admin.initializeApp(functions.config().firebase);
admin.initializeApp({
    databaseURL: "https://ibrokethis-9b72f.firebaseio.com",
    credential: admin.credential.cert(serviceAccount)
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.getProgram = functions.https.onRequest((request, response) => {
    const db = admin.database();
    const ref = db.ref("programs/-LN2Pb4OYbeHemOByVFz");
    return ref.once("value", (snapshot) => {
        return response.json(snapshot.val());
    });
})

exports.getOrganization = functions.https.onRequest((request, response) => {
    const db = admin.database();
    const ref = db.ref("organizations/-LN25D4xaMzsFYoCsg-7");
    return ref.once("value", (snapshot) => {
        return response.json(snapshot.val());
    });
})